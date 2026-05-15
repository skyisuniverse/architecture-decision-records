// scripts/build-search.mjs
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Absolute path resolution configurations
const BASE_ROOT = process.cwd();
const TARGET_DIR = path.join(BASE_ROOT, "app");
const OUTPUT_FILE = path.join(
  BASE_ROOT,
  "app",
  "[lang]",
  "components",
  "SearchData.ts",
);
const ROOT_DICTS_DIR = path.join(BASE_ROOT, "dictionaries");

function isTrueContentPage(filePath, filename) {
  const lowerName = filename.toLowerCase();
  const systemReservedKeywords = [
    "layout.tsx",
    "loading.tsx",
    "error.tsx",
    "not-found.tsx",
    "template.tsx",
    "middleware.ts",
    "route.ts",
    "searchdata.ts",
    "styledmain",
    "clientrootlayout",
    "navigation-context",
    "theme",
    "provider",
    "config",
    "types",
    "component",
  ];
  if (systemReservedKeywords.some((keyword) => lowerName.includes(keyword)))
    return false;
  if (
    lowerName.includes("list") ||
    lowerName.includes("dictionary") ||
    lowerName.includes("dict")
  )
    return false;

  const ext = path.extname(filename);
  if (ext === ".tsx") return lowerName === "page.tsx";
  return ext === ".md" || ext === ".mdx";
}

function parseCleanProse(content, isTsx = false) {
  let processedText = content;

  if (isTsx) {
    // Isolate layout strings by stripping leading code definitions entirely
    processedText = processedText.replace(/^[\s\S]*?return\s*\(\s*/g, "");

    // Remove code definitions like mappings, ternary paths, and variables
    processedText = processedText
      .replace(/import\s+[\s\S]*?from\s+['"].*?['"];?/g, " ")
      .replace(/const\s+[\s\S]*?=\s*[\s\S]*?;/g, " ")
      .replace(/\{[^}]*?\.map\([\s\S]*?\)\}/g, " ")
      .replace(/\{[^}]*?\?[^}]*?:[^}]*?\}/g, " ");
  } else {
    processedText = processedText.replace(/```[\s\S]*?```/g, " ");
  }

  return processedText
    .replace(/<[^>]+>/g, " ") // Strip HTML/JSX tags entirely
    .replace(/\{[^}]+\}/g, " ") // Strip dangling brackets and mappings
    .replace(/[#*`_\[\]()\-]/g, " ") // Clean out structural markdown code characters
    .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, "") // Drop remarks
    .replace(/[<>{}()]/g, " ") // Strip absolute dangling brackets completely
    .replace(/\s+/g, " ") // Normalize whitespace gaps
    .trim();
}

function formatFallbackTitle(filename, dirName) {
  const segment =
    filename.toLowerCase() === "page.tsx"
      ? dirName
      : filename.replace(/\.[^/.]+$/, "");
  return segment
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function loadTranslations() {
  const globalDicts = {};
  if (fs.existsSync(ROOT_DICTS_DIR)) {
    fs.readdirSync(ROOT_DICTS_DIR).forEach((file) => {
      if (file.endsWith(".json")) {
        const lang = path.basename(file, ".json");
        try {
          globalDicts[lang] = JSON.parse(
            fs.readFileSync(path.join(ROOT_DICTS_DIR, file), "utf8"),
          );
        } catch (err) {
          console.error(`⚠️ Error parsing global dictionary: ${file}`, err);
        }
      }
    });
  }
  return globalDicts;
}

function findLocalDictionaries(dirPath) {
  const localDicts = {};
  if (!fs.existsSync(dirPath)) return localDicts;
  const entries = fs.readdirSync(dirPath);
  const dictDirName = entries.find(
    (e) =>
      fs.statSync(path.join(dirPath, e)).isDirectory() &&
      /(dictionaries|dict|i18n)/i.test(e),
  );

  if (dictDirName) {
    const fullDictPath = path.join(dirPath, dictDirName);
    fs.readdirSync(fullDictPath).forEach((file) => {
      if (file.endsWith(".json")) {
        const lang = path.basename(file, ".json");
        try {
          localDicts[lang] = JSON.parse(
            fs.readFileSync(path.join(fullDictPath, file), "utf8"),
          );
        } catch (err) {
          console.error(`⚠️ Error reading localized path: ${file}`, err);
        }
      }
    });
  }
  return localDicts;
}

function executeBuildPipeline() {
  console.log("⏳ Running smart filter repository parsing sequence...");
  if (!fs.existsSync(TARGET_DIR)) return;

  const globalTranslations = loadTranslations();
  const searchIndexMap = { en: [], de: [] };

  function traverse(currentFolder) {
    const directoryItems = fs.readdirSync(currentFolder);
    const localTranslations = findLocalDictionaries(currentFolder);

    directoryItems.forEach((item) => {
      const fullPath = path.join(currentFolder, item);
      const fileStat = fs.statSync(fullPath);

      if (fileStat.isDirectory()) {
        traverse(fullPath);
      } else {
        if (!isTrueContentPage(fullPath, item)) return;

        const rawData = fs.readFileSync(fullPath, "utf8");
        const fileExt = path.extname(item);
        const containingDir = path.basename(currentFolder);

        // Normalize base file routing values
        let cleanUrlPath = fullPath
          .replace(TARGET_DIR, "")
          .replace(/page\.tsx$/, "")
          .replace(/\.(md|mdx)$/, "")
          .replace(/\\/g, "/");

        if (cleanUrlPath.endsWith("/") && cleanUrlPath.length > 1) {
          cleanUrlPath = cleanUrlPath.slice(0, -1);
        }

        const URLSegments = cleanUrlPath.split("/");
        const tailSlug = URLSegments[URLSegments.length - 1];

        // Locate parent container to feed informative breadcrumbs context
        const adrContainerFolder =
          URLSegments.find((segment) => segment.includes("-adr")) ||
          containingDir;
        const parentCategoryContext = formatFallbackTitle(
          "",
          adrContainerFolder,
        );

        const supportedLocales = ["en", "de"];

        supportedLocales.forEach((resolvedLocale) => {
          let extractedTitle = "";
          let parsedCleanBody = "";

          // ✅ FIX: Keep the structural link hierarchy matching your config lists exactly!
          let dynamicWebUrl = cleanUrlPath.replace("[lang]", resolvedLocale);

          if (!dynamicWebUrl.startsWith("/"))
            dynamicWebUrl = "/" + dynamicWebUrl;

          if (fileExt === ".tsx") {
            parsedCleanBody = parseCleanProse(rawData, true);
            if (
              localTranslations[resolvedLocale] &&
              localTranslations[resolvedLocale][tailSlug]
            ) {
              extractedTitle = localTranslations[resolvedLocale][tailSlug];
            } else if (
              globalTranslations[resolvedLocale] &&
              globalTranslations[resolvedLocale][tailSlug]
            ) {
              extractedTitle = globalTranslations[resolvedLocale][tailSlug];
            } else {
              const typographyMatch = rawData.match(
                /<Typography[^>]*>([\s\S]*?)<\/Typography>/,
              );
              if (typographyMatch && typographyMatch[1]) {
                extractedTitle = typographyMatch[1]
                  .replace(/<[^>]+>/g, "")
                  .trim();
              } else {
                extractedTitle = formatFallbackTitle(item, containingDir);
              }
            }
          } else {
            const { data, content } = matter(rawData);
            extractedTitle =
              data.title || formatFallbackTitle(item, containingDir);
            parsedCleanBody = parseCleanProse(content, fileExt === ".mdx");
          }

          if (parsedCleanBody.length < 5 && extractedTitle.length < 3) return;

          searchIndexMap[resolvedLocale].push({
            title: extractedTitle,
            category: parentCategoryContext,
            url: dynamicWebUrl,
            content: parsedCleanBody,
          });
        });
      }
    });
  }

  traverse(TARGET_DIR);

  const outputFolder = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputFolder))
    fs.mkdirSync(outputFolder, { recursive: true });

  const fileContentString = `// Generated automatically via scripts/build-search.mjs. Do not edit manually.\n\nexport const staticSearchDataset: Record<string, Array<{ title: string; category: string; url: string; content: string }>> = ${JSON.stringify(searchIndexMap, null, 2)};\n`;

  fs.writeFileSync(OUTPUT_FILE, fileContentString, "utf8");
  console.log(
    "✅ Accurate production link index database created with intact path hierarchies.",
  );
}

executeBuildPipeline();
