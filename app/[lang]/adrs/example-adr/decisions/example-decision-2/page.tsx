// app/[lang]/adrs/generic-r&d-center-adr/decisions/enable-commoditization/page.tsx

import type { Locale } from "@/i18n-config";
import { getDictionary } from "@/app/[lang]/components/WithDictionary";
import { ADRHeader } from "@/app/[lang]/components/ADRHeader";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MuiNextLink from "@/app/[lang]/components/MuiNextLink";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;

  // Load global dictionary (products, services, applications, etc.)
  const globalDict = await getDictionary(lang);

  // Load colocated decision-specific dictionary
  let decisionDict: Record<string, string> = {};
  try {
    const decisionModule = await import(
      `../../decisions-dictionaries/${lang}.json`
    );
    decisionDict = decisionModule.default || decisionModule;
  } catch (err) {
    console.warn(
      "Could not load decision dictionary for enable-commoditization",
    );
  }

  // Merge both dictionaries
  const dict = { ...globalDict, ...decisionDict };

  // Glossary link (same for all languages, anchors to the English term "Commodity")
  const glossaryHref = `/${lang}/glossary#Commodity`;

  // Word to be linked (different per language)
  const commoditizedWord = lang === "en" ? "commoditized" : "kommoditisiert";

  return (
    <>
      <ADRHeader />

      <Paper
        elevation={0}
        sx={{
          p: { xs: 4, md: 6 },
          borderRadius: 3,
          backgroundColor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        {/* Introductory paragraph with inline links */}
        <Typography
          variant="body1"
          paragraph
          sx={{
            fontSize: "1.1rem",
            lineHeight: 1.8,
            color: "text.secondary",
          }}
        >
          {dict["enable-commoditization.intro1"]}{" "}
        </Typography>


      </Paper>
    </>
  );
}
