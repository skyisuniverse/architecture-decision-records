// app/[lang]/adrs/llm-training-adr/decisions/considerations/components/ConsiderationsAccordions.tsx
"use client";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ConsiderationSection } from "../considerationsData";

interface AccordionsProps {
  sections: ConsiderationSection[];
  expandedPanel: string | null;
  onChange: (
    panelId: string,
  ) => (_: React.SyntheticEvent, isExpanded: boolean) => void;
}

export function ConsiderationsAccordions({
  sections,
  expandedPanel,
  onChange,
}: AccordionsProps) {
  return (
    <>
      {sections.map((section) => (
        <Accordion
          key={section.id}
          id={section.id}
          expanded={expandedPanel === section.id}
          onChange={onChange(section.id)}
          slotProps={{ transition: { unmountOnExit: true } }} // Recommended for big component tree performance
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            id={`${section.id}-header`}
            aria-controls={`${section.id}-content`}
          >
            <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
              {section.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.8 }}
            >
              {section.content}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
