// // scripts/build-search.mjs
// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";

// // Absolute path resolution configurations
// const BASE_ROOT = process.cwd();
// const TARGET_DIR = path.join(BASE_ROOT, "app");
// const OUTPUT_FILE = path.join(
//   BASE_ROOT,
//   "app",
//   "[lang]",
//   "components",
//   "SearchData.ts",
// );
// const ROOT_DICTS_DIR = path.join(BASE_ROOT, "dictionaries");

// function isTrueContentPage(filePath, filename) {
//   const lowerName = filename.toLowerCase();
//   const systemReservedKeywords = [
//     "layout.tsx",
//     "loading.tsx",
//     "error.tsx",
//     "not-found.tsx",
//     "template.tsx",
//     "middleware.ts",
//     "route.ts",
//     "searchdata.ts",
//     "styledmain",
//     "clientrootlayout",
//     "navigation-context",
//     "theme",
//     "provider",
//     "config",
//     "types",
//     "component",
//   ];
//   if (systemReservedKeywords.some((keyword) => lowerName.includes(keyword)))
//     return false;
//   if (
//     lowerName.includes("list") ||
//     lowerName.includes("dictionary") ||
//     lowerName.includes("dict")
//   )
//     return false;

//   const ext = path.extname(filename);
//   if (ext === ".tsx") return lowerName === "page.tsx";
//   return ext === ".md" || ext === ".mdx";
// }

// // function parseCleanProse(content, isTsx = false) {
// //   let processedText = content;

// //   if (isTsx) {
// //     // Isolate layout strings by stripping leading code definitions entirely
// //     processedText = processedText.replace(/^[\s\S]*?return\s*\(\s*/g, "");

// //     // Remove code definitions like mappings, ternary paths, and variables
// //     processedText = processedText
// //       .replace(/import\s+[\s\S]*?from\s+['"].*?['"];?/g, " ")
// //       .replace(/const\s+[\s\S]*?=\s*[\s\S]*?;/g, " ")
// //       .replace(/\{[^}]*?\.map\([\s\S]*?\)\}/g, " ")
// //       .replace(/\{[^}]*?\?[^}]*?:[^}]*?\}/g, " ");
// //   } else {
// //     processedText = processedText.replace(/```[\s\S]*?```/g, " ");
// //   }

// //   return processedText
// //     .replace(/<[^>]+>/g, " ") // Strip HTML/JSX tags entirely
// //     .replace(/\{[^}]+\}/g, " ") // Strip dangling brackets and mappings
// //     .replace(/[#*`_\[\]()\-]/g, " ") // Clean out structural markdown code characters
// //     .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, "") // Drop remarks
// //     .replace(/[<>{}()]/g, " ") // Strip absolute dangling brackets completely
// //     .replace(/\s+/g, " ") // Normalize whitespace gaps
// //     .trim();
// // }

// // function parseCleanProse(content, isTsx = false) {
// //   let processedText = content;

// //   if (isTsx) {
// //     // 1. Isolate layout strings by stripping leading code definitions entirely
// //     processedText = processedText.replace(/^[\s\S]*?return\s*\(\s*/g, "");

// //     // 2. Remove code definitions like mappings, ternary paths, and variables
// //     processedText = processedText
// //       .replace(/import\s+[\s\S]*?from\s+['"].*?['"];?/g, " ")
// //       .replace(/const\s+[\s\S]*?=\s*[\s\S]*?;/g, " ")
// //       .replace(/\{[^}]*?\.map\([\s\S]*?\)\}/g, " ")
// //       .replace(/\{[^}]*?\?[^}]*?:[^}]*?\}/g, " ");

// //     // ✅ FIX: Strip inline React component property assignments (e.g., adrsList={ThreeDPrinterAdrsList})
// //     // This removes variable property handles from component tags before they get mangled
// //     processedText = processedText.replace(/\w+=\s*\{[^}]+\}/g, " ");
// //   } else {
// //     processedText = processedText.replace(/```[\s\S]*?```/g, " ");
// //   }

// //   return processedText
// //     .replace(/<[^>]+>/g, " ") // Strip HTML/JSX tags entirely
// //     .replace(/\{[^}]+\}/g, " ") // Strip dangling brackets and mappings
// //     .replace(/[#*`_\[\]()\-]/g, " ") // Clean out structural markdown code characters
// //     .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, "") // Drop remarks
// //     .replace(/[<>{}()]/g, " ") // Strip absolute dangling brackets completely
// //     .replace(/\s+/g, " ") // Normalize whitespace gaps
// //     .trim();
// // }

// function parseCleanProse(content, isTsx = false) {
//   let processedText = content;

//   if (isTsx) {
//     // 1. Isolate layout strings by stripping leading code definitions entirely
//     processedText = processedText.replace(/^[\s\S]*?return\s*\(\s*/g, "");

//     // 2. Remove code definitions like mappings, ternary paths, and variables
//     processedText = processedText
//       .replace(/import\s+[\s\S]*?from\s+['"].*?['"];?/g, " ")
//       .replace(/const\s+[\s\S]*?=\s*[\s\S]*?;/g, " ");

//     // 3. Strip inline React component property assignments (e.g., adrsList={...})
//     processedText = processedText.replace(/\w+=\s*\{[^}]+\}/g, " ");

//     // 4. Completely strip multi-line layout array listings and dynamic .map looping methods
//     processedText = processedText.replace(
//       /\[\s*\{[\s\S]*?\}\s*\]\.map\([\s\S]*?\)/g,
//       " ",
//     );
//     processedText = processedText.replace(
//       /\.map\s*\(\s*\([^)]*\)\s*=>[\s\S]*?\)/g,
//       " ",
//     );

//     // 5. Scrub trailing javascript programming keyword shards and inner loop variables
//     processedText = processedText
//       .replace(
//         /\b(map|item|export|default|function|return|const|let|async|await)\b/g,
//         " ",
//       )
//       .replace(/\{[^}]*?dict[^}]*?\}/g, " ")
//       .replace(/\{[^}]*?item[^}]*?\}/g, " ");
//   } else {
//     processedText = processedText.replace(/```[\s\S]*?```/g, " ");
//   }

//   return processedText
//     .replace(/<[^>]+>/g, " ") // Strip HTML/JSX tags entirely
//     .replace(/\{[^}]+\}/g, " ") // Strip dangling brackets and mappings
//     .replace(/[#*`_\[\]()\-]/g, " ") // Clean out structural markdown code characters
//     .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, "") // Drop remarks
//     .replace(/[<>{}()=\[\]]/g, " ") // Clean loose bracket fragments and equals symbols completely
//     .replace(/[,;.]/g, " ") // Clean loose array punctuation shards
//     .replace(/\s+/g, " ") // Normalize whitespace gaps
//     .trim();
// }

// function formatFallbackTitle(filename, dirName) {
//   const segment =
//     filename.toLowerCase() === "page.tsx"
//       ? dirName
//       : filename.replace(/\.[^/.]+$/, "");
//   return segment
//     .replace(/[-_]/g, " ")
//     .replace(/\b\w/g, (char) => char.toUpperCase());
// }

// function loadTranslations() {
//   const globalDicts = {};
//   if (fs.existsSync(ROOT_DICTS_DIR)) {
//     fs.readdirSync(ROOT_DICTS_DIR).forEach((file) => {
//       if (file.endsWith(".json")) {
//         const lang = path.basename(file, ".json");
//         try {
//           globalDicts[lang] = JSON.parse(
//             fs.readFileSync(path.join(ROOT_DICTS_DIR, file), "utf8"),
//           );
//         } catch (err) {
//           console.error(`⚠️ Error parsing global dictionary: ${file}`, err);
//         }
//       }
//     });
//   }
//   return globalDicts;
// }

// function findLocalDictionaries(dirPath) {
//   const localDicts = {};
//   if (!fs.existsSync(dirPath)) return localDicts;
//   const entries = fs.readdirSync(dirPath);
//   const dictDirName = entries.find(
//     (e) =>
//       fs.statSync(path.join(dirPath, e)).isDirectory() &&
//       /(dictionaries|dict|i18n)/i.test(e),
//   );

//   if (dictDirName) {
//     const fullDictPath = path.join(dirPath, dictDirName);
//     fs.readdirSync(fullDictPath).forEach((file) => {
//       if (file.endsWith(".json")) {
//         const lang = path.basename(file, ".json");
//         try {
//           localDicts[lang] = JSON.parse(
//             fs.readFileSync(path.join(fullDictPath, file), "utf8"),
//           );
//         } catch (err) {
//           console.error(`⚠️ Error reading localized path: ${file}`, err);
//         }
//       }
//     });
//   }
//   return localDicts;
// }

// function executeBuildPipeline() {
//   console.log("⏳ Running smart filter repository parsing sequence...");
//   if (!fs.existsSync(TARGET_DIR)) return;

//   const globalTranslations = loadTranslations();
//   const searchIndexMap = { en: [], de: [] };

//   function traverse(currentFolder) {
//     const directoryItems = fs.readdirSync(currentFolder);
//     const localTranslations = findLocalDictionaries(currentFolder);

//     directoryItems.forEach((item) => {
//       const fullPath = path.join(currentFolder, item);
//       const fileStat = fs.statSync(fullPath);

//       if (fileStat.isDirectory()) {
//         traverse(fullPath);
//       } else {
//         if (!isTrueContentPage(fullPath, item)) return;

//         const rawData = fs.readFileSync(fullPath, "utf8");
//         const fileExt = path.extname(item);
//         const containingDir = path.basename(currentFolder);

//         // Normalize base file routing values
//         let cleanUrlPath = fullPath
//           .replace(TARGET_DIR, "")
//           .replace(/page\.tsx$/, "")
//           .replace(/\.(md|mdx)$/, "")
//           .replace(/\\/g, "/");

//         if (cleanUrlPath.endsWith("/") && cleanUrlPath.length > 1) {
//           cleanUrlPath = cleanUrlPath.slice(0, -1);
//         }

//         const URLSegments = cleanUrlPath.split("/");
//         const tailSlug = URLSegments[URLSegments.length - 1];

//         // Locate parent container to feed informative breadcrumbs context
//         const adrContainerFolder =
//           URLSegments.find((segment) => segment.includes("-adr")) ||
//           containingDir;
//         const parentCategoryContext = formatFallbackTitle(
//           "",
//           adrContainerFolder,
//         );

//         const supportedLocales = ["en", "de"];

//         supportedLocales.forEach((resolvedLocale) => {
//           let extractedTitle = "";
//           let parsedCleanBody = "";

//           // ✅ FIX: Keep the structural link hierarchy matching your config lists exactly!
//           let dynamicWebUrl = cleanUrlPath.replace("[lang]", resolvedLocale);

//           if (!dynamicWebUrl.startsWith("/"))
//             dynamicWebUrl = "/" + dynamicWebUrl;

//           if (fileExt === ".tsx") {
//             parsedCleanBody = parseCleanProse(rawData, true);
//             if (
//               localTranslations[resolvedLocale] &&
//               localTranslations[resolvedLocale][tailSlug]
//             ) {
//               extractedTitle = localTranslations[resolvedLocale][tailSlug];
//             } else if (
//               globalTranslations[resolvedLocale] &&
//               globalTranslations[resolvedLocale][tailSlug]
//             ) {
//               extractedTitle = globalTranslations[resolvedLocale][tailSlug];
//             } else {
//               const typographyMatch = rawData.match(
//                 /<Typography[^>]*>([\s\S]*?)<\/Typography>/,
//               );
//               if (typographyMatch && typographyMatch[1]) {
//                 extractedTitle = typographyMatch[1]
//                   .replace(/<[^>]+>/g, "")
//                   .trim();
//               } else {
//                 extractedTitle = formatFallbackTitle(item, containingDir);
//               }
//             }
//           } else {
//             const { data, content } = matter(rawData);
//             extractedTitle =
//               data.title || formatFallbackTitle(item, containingDir);
//             parsedCleanBody = parseCleanProse(content, fileExt === ".mdx");
//           }

//           if (parsedCleanBody.length < 5 && extractedTitle.length < 3) return;

//           searchIndexMap[resolvedLocale].push({
//             title: extractedTitle,
//             category: parentCategoryContext,
//             url: dynamicWebUrl,
//             content: parsedCleanBody,
//           });
//         });
//       }
//     });
//   }

//   traverse(TARGET_DIR);

//   const outputFolder = path.dirname(OUTPUT_FILE);
//   if (!fs.existsSync(outputFolder))
//     fs.mkdirSync(outputFolder, { recursive: true });

//   const fileContentString = `// Generated automatically via scripts/build-search.mjs. Do not edit manually.\n\nexport const staticSearchDataset: Record<string, Array<{ title: string; category: string; url: string; content: string }>> = ${JSON.stringify(searchIndexMap, null, 2)};\n`;

//   fs.writeFileSync(OUTPUT_FILE, fileContentString, "utf8");
//   // console.log(
//   //   "✅ Accurate production link index database created with intact path hierarchies.",
//   // );

//   Object.keys(searchIndexMap).forEach((locale) => {
//     console.log(
//       `✅ Index mapped cleanly [${locale.toUpperCase()}]: ${searchIndexMap[locale].length} pure content pages verified.`,
//     );
//   });
// }

// executeBuildPipeline();

// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";

// // Absolute path resolution configurations
// const BASE_ROOT = process.cwd();
// const TARGET_DIR = path.join(BASE_ROOT, "app");
// const OUTPUT_FILE = path.join(
//   BASE_ROOT,
//   "app",
//   "[lang]",
//   "components",
//   "SearchData.ts",
// );
// const ROOT_DICTS_DIR = path.join(BASE_ROOT, "dictionaries");
// const CATEGORIES_CONFIG_FILE = path.join(
//   BASE_ROOT,
//   "app",
//   "[lang]",
//   "config",
//   "adrs-lists.ts",
// );

// function isTrueContentPage(filePath, filename) {
//   const lowerName = filename.toLowerCase();
//   const systemReservedKeywords = [
//     "layout.tsx",
//     "loading.tsx",
//     "error.tsx",
//     "not-found.tsx",
//     "template.tsx",
//     "middleware.ts",
//     "route.ts",
//     "searchdata.ts",
//     "styledmain",
//     "clientrootlayout",
//     "navigation-context",
//     "theme",
//     "provider",
//     "config",
//     "types",
//     "component",
//   ];
//   if (systemReservedKeywords.some((keyword) => lowerName.includes(keyword)))
//     return false;
//   if (
//     lowerName.includes("list") ||
//     lowerName.includes("dictionary") ||
//     lowerName.includes("dict")
//   )
//     return false;

//   const ext = path.extname(filename);
//   if (ext === ".tsx") return lowerName === "page.tsx";
//   return ext === ".md" || ext === ".mdx";
// }

// function resolveDictionaryStrings(
//   text,
//   locale,
//   globalTranslations,
//   localTranslations,
//   tailSlug,
// ) {
//   if (!text || typeof text !== "string") return "";

//   const dictRegex = /dict\s*\[\s*['"]([^'"]+)['"]\s*\]/g;

//   let resolved = text.replace(dictRegex, (match, dictKey) => {
//     if (localTranslations[locale] && localTranslations[locale][dictKey]) {
//       return localTranslations[locale][dictKey];
//     }
//     if (globalTranslations[locale] && globalTranslations[locale][dictKey]) {
//       return globalTranslations[locale][dictKey];
//     }
//     return dictKey;
//   });

//   if (
//     (resolved.includes("{") || resolved.includes("}")) &&
//     localTranslations[locale] &&
//     localTranslations[locale][tailSlug]
//   ) {
//     return localTranslations[locale][tailSlug];
//   }
//   if (
//     (resolved.includes("{") || resolved.includes("}")) &&
//     globalTranslations[locale] &&
//     globalTranslations[locale][tailSlug]
//   ) {
//     return globalTranslations[locale][tailSlug];
//   }

//   return resolved;
// }

// function parseCleanProse(content, isTsx = false) {
//   let processedText = content;

//   if (isTsx) {
//     const layoutStartMatch = processedText.match(
//       /return\s*\(\s*(?:<>|<([A-Za-z0-9]+))/m,
//     );
//     if (layoutStartMatch) {
//       if (layoutStartMatch.includes("<>")) {
//         processedText = processedText.substring(
//           layoutStartMatch.index + layoutStartMatch.length,
//         );
//       } else {
//         const sliceIndex = layoutStartMatch.index + layoutStartMatch.length;
//         processedText = processedText.substring(sliceIndex);
//       }
//     } else {
//       processedText = processedText.replace(/^[\s\S]*?return\s*\(\s*/g, "");
//     }

//     processedText = processedText
//       .replace(/import\s+[\s\S]*?from\s+['"].*?['"];?/g, " ")
//       .replace(/const\s+[\s\S]*?=\s*[\s\S]*?;/g, " ");

//     processedText = processedText.replace(/\w+=\s*\{[^}]+\}/g, " ");
//     processedText = processedText.replace(
//       /\[\s*\{[\s\S]*?\}\s*\]\.map\([\s\S]*?\)/g,
//       " ",
//     );
//     processedText = processedText.replace(
//       /\.map\s*\(\s*\([^)]*\)\s*=>[\s\S]*?\)/g,
//       " ",
//     );

//     processedText = processedText
//       .replace(
//         /\b(map|item|export|default|function|return|const|let|async|await|try|catch|err|console|warn|turn|urn)\b/g,
//         " ",
//       )
//       .replace(/\{[^}]*?dict[^}]*?\}/g, " ")
//       .replace(/\{[^}]*?item[^}]*?\}/g, " ");
//   } else {
//     processedText = processedText.replace(/```[\s\S]*?```/g, " ");
//   }

//   return processedText
//     .replace(/<[^>]+>/g, " ")
//     .replace(/\{[^}]+\}/g, " ")
//     .replace(/[#*`_\[\]()\-]/g, " ")
//     .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, "")
//     .replace(/[<>{}()=\[\]\/]/g, " ")
//     .replace(/[,;.]/g, " ")
//     .replace(/\s+/g, " ")
//     .trim();
// }

// function formatFallbackTitle(filename, dirName) {
//   const segment =
//     filename.toLowerCase() === "page.tsx"
//       ? dirName
//       : filename.replace(/\.[^/.]+$/, "");
//   return segment
//     .replace(/[-_]/g, " ")
//     .replace(/\b\w/g, (char) => char.toUpperCase());
// }

// /**
//  * ✅ EXTENDED CONFIG PARSER
//  * Targets specific object blocks in adrs-lists.ts and extracts the precise category key.
//  */
// function getCategoryNameFromConfig(urlSegments, globalTranslations, locale) {
//   if (!fs.existsSync(CATEGORIES_CONFIG_FILE)) return "";

//   const configContent = fs.readFileSync(CATEGORIES_CONFIG_FILE, "utf8");

//   for (const segmentSlug of urlSegments) {
//     if (!segmentSlug || segmentSlug === "adrs" || segmentSlug === "decisions")
//       continue;

//     // Matches individual structural objects within the rawCategories definition block array
//     const categoryBlockRegex =
//       /id:\s*["']([^"']+)["'][\s\S]*?name:\s*["']([^"']+)["'][\s\S]*?adrs:\s*\[([\s\S]*?)\]/g;
//     let match;

//     while ((match = categoryBlockRegex.exec(configContent)) !== null) {
//       const categoryNameKey = match[2]; // Extracts exact key token, e.g., "category.rd-center"
//       const adrsArrayBlock = match[3]; // Extracts the specific nested slug block content array string

//       if (
//         adrsArrayBlock.includes(`slug: "${segmentSlug}"`) ||
//         adrsArrayBlock.includes(`slug: '${segmentSlug}'`) ||
//         segmentSlug === match[1] // Matches if the segment directly equals the category ID (fallback)
//       ) {
//         // Look up against the global translation key context (e.g. "category.rd-center")
//         if (
//           globalTranslations[locale] &&
//           globalTranslations[locale][categoryNameKey]
//         ) {
//           return globalTranslations[locale][categoryNameKey];
//         }
//         // Fallback trace normalization
//         return categoryNameKey.replace("category.", "").replace(/[-_]/g, " ");
//       }
//     }
//   }
//   return "";
// }

// function loadTranslations() {
//   const globalDicts = {};
//   if (fs.existsSync(ROOT_DICTS_DIR)) {
//     fs.readdirSync(ROOT_DICTS_DIR).forEach((file) => {
//       if (file.endsWith(".json")) {
//         const lang = path.basename(file, ".json");
//         try {
//           globalDicts[lang] = JSON.parse(
//             fs.readFileSync(path.join(ROOT_DICTS_DIR, file), "utf8"),
//           );
//         } catch (err) {
//           console.error(`⚠️ Error parsing global dictionary: ${file}`, err);
//         }
//       }
//     });
//   }
//   return globalDicts;
// }

// function findLocalDictionaries(dirPath) {
//   const localDicts = {};
//   const targetCheckPaths = [
//     dirPath,
//     path.dirname(dirPath),
//     path.dirname(path.dirname(dirPath)),
//   ];

//   for (const scanPath of targetCheckPaths) {
//     if (!fs.existsSync(scanPath)) continue;

//     const entries = fs.readdirSync(scanPath);
//     const dictDirName = entries.find(
//       (e) =>
//         fs.statSync(path.join(scanPath, e)).isDirectory() &&
//         /(dictionaries|dict|i18n)/i.test(e),
//     );

//     if (dictDirName) {
//       const fullDictPath = path.join(scanPath, dictDirName);
//       fs.readdirSync(fullDictPath).forEach((file) => {
//         if (file.endsWith(".json")) {
//           const lang = path.basename(file, ".json");
//           try {
//             localDicts[lang] = {
//               ...localDicts[lang],
//               ...JSON.parse(
//                 fs.readFileSync(path.join(fullDictPath, file), "utf8"),
//               ),
//             };
//           } catch (err) {
//             console.error(`⚠️ Error reading localized path: ${file}`, err);
//           }
//         }
//       });
//     }
//   }
//   return localDicts;
// }

// function executeBuildPipeline() {
//   console.log("⏳ Running smart filter repository parsing sequence...");
//   if (!fs.existsSync(TARGET_DIR)) return;

//   const globalTranslations = loadTranslations();
//   const searchIndexMap = { en: [], de: [] };

//   function traverse(currentFolder) {
//     const directoryItems = fs.readdirSync(currentFolder);
//     const localTranslations = findLocalDictionaries(currentFolder);

//     directoryItems.forEach((item) => {
//       const fullPath = path.join(currentFolder, item);
//       const fileStat = fs.statSync(fullPath);

//       if (fileStat.isDirectory()) {
//         traverse(fullPath);
//       } else {
//         if (!isTrueContentPage(fullPath, item)) return;

//         const rawData = fs.readFileSync(fullPath, "utf8");
//         const fileExt = path.extname(item);
//         const containingDir = path.basename(currentFolder);

//         let cleanUrlPath = fullPath
//           .replace(TARGET_DIR, "")
//           .replace(/page\.tsx$/, "")
//           .replace(/\.(md|mdx)$/, "")
//           .replace(/\\/g, "/");

//         if (cleanUrlPath.endsWith("/") && cleanUrlPath.length > 1) {
//           cleanUrlPath = cleanUrlPath.slice(0, -1);
//         }

//         const URLSegments = cleanUrlPath.split("/");
//         const tailSlug = URLSegments[URLSegments.length - 1];

//         const supportedLocales = ["en", "de"];

//         supportedLocales.forEach((resolvedLocale) => {
//           let extractedTitle = "";
//           let parsedCleanBody = "";
//           let dynamicWebUrl = cleanUrlPath.replace("[lang]", resolvedLocale);

//           if (!dynamicWebUrl.startsWith("/"))
//             dynamicWebUrl = "/" + dynamicWebUrl;

//           const lookupLookupKey = tailSlug;

//           // Cross-reference path segments to map correct translated category metadata headers from adrs-lists.ts
//           const parentCategoryContext =
//             getCategoryNameFromConfig(
//               URLSegments,
//               globalTranslations,
//               resolvedLocale,
//             ) || formatFallbackTitle("", containingDir);

//           if (fileExt === ".tsx") {
//             parsedCleanBody = parseCleanProse(rawData, true);
//             parsedCleanBody = resolveDictionaryStrings(
//               parsedCleanBody,
//               resolvedLocale,
//               globalTranslations,
//               localTranslations,
//               lookupLookupKey,
//             );

//             if (
//               localTranslations[resolvedLocale] &&
//               localTranslations[resolvedLocale][lookupLookupKey]
//             ) {
//               extractedTitle =
//                 localTranslations[resolvedLocale][lookupLookupKey];
//             } else if (
//               globalTranslations[resolvedLocale] &&
//               globalTranslations[resolvedLocale][lookupLookupKey]
//             ) {
//               extractedTitle =
//                 globalTranslations[resolvedLocale][lookupLookupKey];
//             } else {
//               const typographyMatch = rawData.match(
//                 /<Typography[^>]*>([\s\S]*?)<\/Typography>/,
//               );
//               if (typographyMatch && typographyMatch) {
//                 const rawTitle = resolveDictionaryStrings(
//                   typographyMatch,
//                   resolvedLocale,
//                   globalTranslations,
//                   localTranslations,
//                   lookupLookupKey,
//                 );
//                 extractedTitle = rawTitle.replace(/\s+/g, " ").trim();
//               } else {
//                 extractedTitle = formatFallbackTitle(item, containingDir);
//               }
//             }
//           } else {
//             const { data, content } = matter(rawData);

//             if (
//               localTranslations[resolvedLocale] &&
//               localTranslations[resolvedLocale][lookupLookupKey]
//             ) {
//               extractedTitle =
//                 localTranslations[resolvedLocale][lookupLookupKey];
//             } else {
//               extractedTitle =
//                 data.title || formatFallbackTitle(item, containingDir);
//             }

//             parsedCleanBody = parseCleanProse(content, fileExt === ".mdx");
//           }

//           if (
//             extractedTitle.includes("{") ||
//             extractedTitle.includes("}") ||
//             extractedTitle.includes("dict")
//           ) {
//             extractedTitle = formatFallbackTitle(item, containingDir);
//           }

//           if (parsedCleanBody.length < 5 && extractedTitle.length < 3) return;

//           searchIndexMap[resolvedLocale].push({
//             title: extractedTitle,
//             category: parentCategoryContext,
//             url: dynamicWebUrl,
//             content: parsedCleanBody,
//           });
//         });
//       }
//     });
//   }

//   traverse(TARGET_DIR);

//   const outputFolder = path.dirname(OUTPUT_FILE);
//   if (!fs.existsSync(outputFolder))
//     fs.mkdirSync(outputFolder, { recursive: true });

//   const fileContentString = `// Generated automatically via scripts/build-search.mjs. Do not edit manually.\n\nexport const staticSearchDataset: Record<string, Array<{ title: string; category: string; url: string; content: string }>> = ${JSON.stringify(searchIndexMap, null, 2)};\n`;

//   fs.writeFileSync(OUTPUT_FILE, fileContentString, "utf8");
//   console.log(
//     "✅ Accurate production link index database created with fully resolved localization text values.",
//   );
// }

// executeBuildPipeline();

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
const CATEGORIES_CONFIG_FILE = path.join(
  BASE_ROOT,
  "app",
  "[lang]",
  "config",
  "adrs-lists.ts",
);

function isTrueContentPage(filePath, filename) {
  const lowerName = filename.toLowerCase();

  // ✅ FIX: Block the script from indexing root framework parameter layouts or grouping folders
  // This drops paths like app/[lang]/page.tsx or app/(marketing)/page.tsx at the entry point
  const standardSlashPath = filePath.replace(/\\/g, "/");
  if (standardSlashPath.includes("/[") || standardSlashPath.includes("/(")) {
    // If the file sits directly inside a folder named like [lang], check if it's a structural root page
    const segments = standardSlashPath.split("/");
    const parentFolder = segments[segments.length - 2];
    if (parentFolder.startsWith("[") || parentFolder.startsWith("(")) {
      return false;
    }
  }

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

function resolveDictionaryStrings(
  text,
  locale,
  globalTranslations,
  localTranslations,
  tailSlug,
) {
  if (!text || typeof text !== "string") return "";

  const dictRegex = /dict\s*\[\s*['"]([^'"]+)['"]\s*\]/g;

  let resolved = text.replace(dictRegex, (match, dictKey) => {
    if (localTranslations[locale] && localTranslations[locale][dictKey]) {
      return localTranslations[locale][dictKey];
    }
    if (globalTranslations[locale] && globalTranslations[locale][dictKey]) {
      return globalTranslations[locale][dictKey];
    }
    return dictKey;
  });

  if (
    (resolved.includes("{") || resolved.includes("}")) &&
    localTranslations[locale] &&
    localTranslations[locale][tailSlug]
  ) {
    return localTranslations[locale][tailSlug];
  }
  if (
    (resolved.includes("{") || resolved.includes("}")) &&
    globalTranslations[locale] &&
    globalTranslations[locale][tailSlug]
  ) {
    return globalTranslations[locale][tailSlug];
  }

  return resolved;
}

function parseCleanProse(content, isTsx = false) {
  let processedText = content;

  // ✅ GLOBAL FIX: Strip out LaTeX mathematical block definitions ($$ ... $$) and inline math strings ($ ... $)
  // This completely stops formula notation from leaking into search description results
  processedText = processedText
    .replace(/\$\{[\s\S]*?\}\$/g, " ") // Strip potential template string math hooks
    .replace(/\$\$[\s\S]*?\$\$/g, " ") // Strip multi-line LaTeX block formulas
    .replace(/\$[\s\S]*?\$/g, " "); // Strip remaining inline mathematical expressions

  if (isTsx) {
    // Isolate layout strings by stripping leading code definitions entirely
    const layoutStartMatch = processedText.match(
      /return\s*\(\s*(?:<>|<([A-Za-z0-9]+))/m,
    );
    if (layoutStartMatch) {
      if (layoutStartMatch.includes("<>")) {
        processedText = processedText.substring(
          layoutStartMatch.index + layoutStartMatch.length,
        );
      } else {
        const sliceIndex = layoutStartMatch.index + layoutStartMatch.length;
        processedText = processedText.substring(sliceIndex);
      }
    } else {
      processedText = processedText.replace(/^[\s\S]*?return\s*\(\s*/g, "");
    }

    // Clear out TypeScript type assertions, parameters, interfaces, and extensions completely
    processedText = processedText
      .replace(/interface\s+\w+\s*(?:extends\s+[^{]+)?\s*\{[\s\S]*?\}/g, " ")
      .replace(/type\s+\w+\s*=[\s\S]*?;/g, " ")
      .replace(/import\s+[\s\S]*?from\s+['"].*?['"];?/g, " ")
      .replace(/const\s+[\s\S]*?=\s*[\s\S]*?;/g, " ");

    processedText = processedText.replace(/\w+=\s*\{[^}]+\}/g, " ");
    processedText = processedText.replace(
      /\[\s*\{[\s\S]*?\}\s*\]\.map\([\s\S]*?\)/g,
      " ",
    );
    processedText = processedText.replace(
      /\.map\s*\(\s*\([^)]*\)\s*=>[\s\S]*?\)/g,
      " ",
    );

    processedText = processedText
      .replace(
        /\b(map|item|export|default|function|return|const|let|async|await|try|catch|err|console|warn|turn|urn|type|interface|extends|React|HTMLAttributes|Props|Locale|Promise|lang|params|Readonly)\b/g,
        " ",
      )
      .replace(/\{[^}]*?dict[^}]*?\}/g, " ")
      .replace(/\{[^}]*?item[^}]*?\}/g, " ");
  } else {
    processedText = processedText.replace(/```[\s\S]*?```/g, " ");
  }

  // Clean punctuation shards, drop LaTeX macros, and isolate real prose strings
  processedText = processedText
    .replace(
      /\\(?:begin|end|text|frac|int|sum|iint|det|ce|textcolor|definecolor)\b[^{}]*\{[^{}]*\}/g,
      " ",
    ) // Clear common multi-bracket macros
    .replace(/\\[A-Za-z]+\b/g, " ") // ✅ GLOBAL FIX: Strip raw hanging LaTeX command strings (e.g., \nabla, \hbar, \\)
    .replace(/<[^>]+>/g, " ") // Strip HTML/JSX tags entirely
    .replace(/\{[^}]+\}/g, " ") // Strip dangling brackets and mappings
    .replace(/[#*`_\[\]()\-]/g, " ") // Clean out structural markdown code characters
    .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, "") // Drop remarks
    .replace(/[<>{}()=\[\]]/g, " ") // Clean loose bracket fragments completely
    .replace(/\s\/\s/g, " ") // Remove stray slashes that sit between spaces
    .replace(/[:&|]/g, " ") // Strip stray colons, ampersands, and code lines
    .replace(/\\/g, " ") // Clean remaining leftover backslash anchors
    .replace(/[,;.]/g, " "); // Clean loose array punctuation shards

  // Strip out isolated single characters (like "T", "t") bounded by white space, preserving "a" or "I"
  processedText = processedText.replace(/\b(?![aAiI]\b)[a-zA-Z]\b/g, " ");

  return processedText.replace(/\s+/g, " ").trim();
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

/**
 * ✅ EXTENDED CATEGORY RESOLVER
 * Maps file routes to ADR collections via adrs-lists.ts, or falls back to
 * root-level dictionary categories (Products, Services, Applications).
 */
function getCategoryNameFromConfig(urlSegments, globalTranslations, locale) {
  // --- TIER 1: Match System Routing Sub-Folders (Products, Services, Apps) ---
  for (const segment of urlSegments) {
    if (!segment) continue;
    const lowerSegment = segment.toLowerCase();

    if (
      lowerSegment === "products" &&
      globalTranslations[locale]?.["products"]
    ) {
      return globalTranslations[locale]["products"]; // Returns translated "Products"
    }
    if (
      lowerSegment === "services" &&
      globalTranslations[locale]?.["services"]
    ) {
      return globalTranslations[locale]["services"]; // Returns translated "Services"
    }
    // Match both "/apps/" route folder parameters and your dictionary translation key "applications"
    if (
      (lowerSegment === "apps" || lowerSegment === "applications") &&
      globalTranslations[locale]?.["applications"]
    ) {
      return globalTranslations[locale]["applications"]; // Returns translated "Applications"
    }
  }

  // --- TIER 2: Match ADR Configuration Blocks via adrs-lists.ts ---
  if (!fs.existsSync(CATEGORIES_CONFIG_FILE)) return "";
  const configContent = fs.readFileSync(CATEGORIES_CONFIG_FILE, "utf8");

  for (const segmentSlug of urlSegments) {
    if (!segmentSlug || segmentSlug === "adrs" || segmentSlug === "decisions")
      continue;

    const categoryBlockRegex =
      /id:\s*["']([^"']+)["'][\s\S]*?name:\s*["']([^"']+)["'][\s\S]*?adrs:\s*\[([\s\S]*?)\]/g;
    let match;

    while ((match = categoryBlockRegex.exec(configContent)) !== null) {
      const categoryNameKey = match[2];
      const adrsArrayBlock = match[3];

      if (
        adrsArrayBlock.includes(`slug: "${segmentSlug}"`) ||
        adrsArrayBlock.includes(`slug: '${segmentSlug}'`) ||
        segmentSlug === match[1]
      ) {
        if (
          globalTranslations[locale] &&
          globalTranslations[locale][categoryNameKey]
        ) {
          return globalTranslations[locale][categoryNameKey];
        }
        return categoryNameKey.replace("category.", "").replace(/[-_]/g, " ");
      }
    }
  }
  return "";
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
  const targetCheckPaths = [
    dirPath,
    path.dirname(dirPath),
    path.dirname(path.dirname(dirPath)),
  ];

  for (const scanPath of targetCheckPaths) {
    if (!fs.existsSync(scanPath)) continue;

    const entries = fs.readdirSync(scanPath);
    const dictDirName = entries.find(
      (e) =>
        fs.statSync(path.join(scanPath, e)).isDirectory() &&
        /(dictionaries|dict|i18n)/i.test(e),
    );

    if (dictDirName) {
      const fullDictPath = path.join(scanPath, dictDirName);
      fs.readdirSync(fullDictPath).forEach((file) => {
        if (file.endsWith(".json")) {
          const lang = path.basename(file, ".json");
          try {
            localDicts[lang] = {
              ...localDicts[lang],
              ...JSON.parse(
                fs.readFileSync(path.join(fullDictPath, file), "utf8"),
              ),
            };
          } catch (err) {
            console.error(`⚠️ Error reading localized path: ${file}`, err);
          }
        }
      });
    }
  }
  return localDicts;
}

function executeBuildPipeline() {
  console.log("⏳ Running smart filter repository parsing sequence... ");
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

        const supportedLocales = ["en", "de"];

        supportedLocales.forEach((resolvedLocale) => {
          let extractedTitle = "";
          let parsedCleanBody = "";
          let dynamicWebUrl = cleanUrlPath.replace("[lang]", resolvedLocale);

          if (!dynamicWebUrl.startsWith("/"))
            dynamicWebUrl = "/" + dynamicWebUrl;

          const lookupLookupKey = tailSlug;
          const parentCategoryContext =
            getCategoryNameFromConfig(
              URLSegments,
              globalTranslations,
              resolvedLocale,
            ) || formatFallbackTitle("", containingDir);

          if (fileExt === ".tsx") {
            parsedCleanBody = parseCleanProse(rawData, true);
            parsedCleanBody = resolveDictionaryStrings(
              parsedCleanBody,
              resolvedLocale,
              globalTranslations,
              localTranslations,
              lookupLookupKey,
            );

            if (
              localTranslations[resolvedLocale] &&
              localTranslations[resolvedLocale][lookupLookupKey]
            ) {
              extractedTitle =
                localTranslations[resolvedLocale][lookupLookupKey];
            } else if (
              globalTranslations[resolvedLocale] &&
              globalTranslations[resolvedLocale][lookupLookupKey]
            ) {
              extractedTitle =
                globalTranslations[resolvedLocale][lookupLookupKey];
            } else {
              const typographyMatch = rawData.match(
                /<Typography[^>]*>([\s\S]*?)<\/Typography>/,
              );
              if (typographyMatch && typographyMatch[1]) {
                const rawTitle = resolveDictionaryStrings(
                  typographyMatch[1],
                  resolvedLocale,
                  globalTranslations,
                  localTranslations,
                  lookupLookupKey,
                );
                extractedTitle = rawTitle.replace(/\s+/g, " ").trim();
              } else {
                extractedTitle = formatFallbackTitle(item, containingDir);
              }
            }
          } else {
            const { data, content } = matter(rawData);

            // ✅ FIX: Extract title directly from standard Markdown H1 tags if frontmatter title is missing
            if (data.title) {
              extractedTitle = data.title;
            } else {
              const markdownH1Match = content.match(/^#\s+(.+)$/m);
              if (markdownH1Match && markdownH1Match[1]) {
                extractedTitle = markdownH1Match[1].trim();
              } else {
                extractedTitle = formatFallbackTitle(item, containingDir);
              }
            }

            parsedCleanBody = parseCleanProse(content, fileExt === ".mdx");
          }

          if (
            extractedTitle.includes("{") ||
            extractedTitle.includes("}") ||
            extractedTitle.includes("dict")
          ) {
            extractedTitle = formatFallbackTitle(item, containingDir);
          }

          // ✅ FIX: Filter out pages that ended up completely empty after cleaning.
          // This prevents empty layout wrappers or structural page shells from showing up in search results.
          if (parsedCleanBody.length < 5) {
            // If there's no real body prose content, check if the title is just a fallback directory string
            const lowerTitle = extractedTitle.toLowerCase();
            if (
              lowerTitle === "page" ||
              lowerTitle === "index" ||
              extractedTitle === formatFallbackTitle("page.tsx", containingDir)
            ) {
              return; // Completely drop this entry from the search index dataset
            }
          }

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
    "✅ Accurate production link index database created with fully resolved localization text values.",
  );
}

executeBuildPipeline();
