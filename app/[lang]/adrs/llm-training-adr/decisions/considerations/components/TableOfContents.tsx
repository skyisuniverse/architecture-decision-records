// app/[lang]/adrs/llm-training-adr/decisions/considerations/components/TableOfContents.tsx
"use client";

import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";
import { ConsiderationSection } from "../considerationsData";

interface TOCProps {
  sections: ConsiderationSection[];
  onLinkClick: (id: string) => void;
  titleLabel: string;
}

export function TableOfContents({
  sections,
  onLinkClick,
  titleLabel,
}: TOCProps) {
  return (
    <Paper
      variant="outlined"
      sx={{ p: 3, mb: 4, borderRadius: 3, bgcolor: "background.neutral" }}
    >
      <Typography variant="h6" component="h2" sx={{ fontWeight: 600, mb: 1.5 }}>
        {titleLabel}
      </Typography>
      <List disablePadding>
        {sections.map((section) => (
          <ListItem key={section.id} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              onClick={() => onLinkClick(section.id)}
              sx={{
                borderRadius: 2,
                px: 1.5,
                color: "primary.main",
                "&:hover": {
                  textDecoration: "underline",
                  bgcolor: "action.hover",
                },
              }}
            >
              <ListItemText
                primary={section.title}
                primaryTypographyProps={{ variant: "body1", fontWeight: 500 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
