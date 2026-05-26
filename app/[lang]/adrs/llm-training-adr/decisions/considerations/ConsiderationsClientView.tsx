// app/[lang]/adrs/llm-training-adr/decisions/considerations/ConsiderationsClientView.tsx
"use client";

import { Box } from "@mui/material";
import { useConsiderationsState } from "./hooks/useConsiderationsState";
import { TableOfContents } from "./components/TableOfContents";
import { ConsiderationsAccordions } from "./components/ConsiderationsAccordions";
import { ConsiderationSection } from "./considerationsData";

interface ClientViewProps {
  sections: ConsiderationSection[];
  tocLabel: string;
}

export function ConsiderationsClientView({
  sections,
  tocLabel,
}: ClientViewProps) {
  const { expandedPanel, handleAccordionChange, handleLinkClick } =
    useConsiderationsState();

  return (
    <Box>
      <TableOfContents
        sections={sections}
        onLinkClick={handleLinkClick}
        titleLabel={tocLabel}
      />

      <ConsiderationsAccordions
        sections={sections}
        expandedPanel={expandedPanel}
        onChange={handleAccordionChange}
      />
    </Box>
  );
}
