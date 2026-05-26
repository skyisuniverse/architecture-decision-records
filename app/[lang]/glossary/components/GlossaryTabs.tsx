// app/[lang]/glossary/components/GlossaryTabs.tsx
import { Tabs, Tab, Box } from "@mui/material";
import { GlossaryDomain } from "../glossaryData";

interface GlossaryTabsProps {
  activeTab: GlossaryDomain;
  onChange: (newTab: GlossaryDomain) => void;
  dict: Record<string, string>;
}

export function GlossaryTabs({ activeTab, onChange, dict }: GlossaryTabsProps) {
  // Collection of your active domain translation keys
  const domains: GlossaryDomain[] = [
    "all",
    "glossary.domain.general",
    "glossary.domain.llm-training",
  ];

  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        mb: 4,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Tabs
        value={activeTab}
        onChange={(_, newValue: GlossaryDomain) => onChange(newValue)}
        variant="scrollable" // Smooth scrolling behavior on mobile viewports
        scrollButtons="auto"
        allowScrollButtonsMobile
        aria-label="Glossary domains"
        sx={{
          "& .MuiTab-root": {
            fontWeight: 600,
            textTransform: "none", // MD3 favors natural string casing
            fontSize: "0.95rem",
          },
        }}
      >
        {domains.map((domainKey) => (
          <Tab
            key={domainKey}
            label={
              domainKey === "all"
                ? dict["glossary.domain.all"] || "All"
                : dict[domainKey]
            }
            value={domainKey}
            id={`tab-${domainKey}`}
            aria-controls={`panel-${domainKey}`}
          />
        ))}
      </Tabs>
    </Box>
  );
}
