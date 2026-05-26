// app/[lang]/glossary/components/GlossarySection.tsx
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { GlossaryItem } from "../glossaryData";
import { GlossaryCard } from "./GlossaryCard";

interface SectionProps {
  letter: string;
  items: GlossaryItem[];
  onLetterClick: () => void;
  onTermClick: (term: string) => void;
}

export function GlossarySection({
  letter,
  items,
  onLetterClick,
  onTermClick,
}: SectionProps) {
  return (
    <Box sx={{ mb: 8 }}>
      <Typography
        id={`letter-${letter}`}
        variant="h2"
        onClick={onLetterClick}
        sx={{
          fontSize: "4rem",
          fontWeight: 100,
          lineHeight: 1,
          mb: 3,
          color: "primary.main",
          opacity: 0.15,
          position: "relative",
          scrollMarginTop: "120px",
          cursor: "pointer",
          "&:hover": { opacity: 0.3, transition: "opacity 0.2s ease" },
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 8,
            left: 0,
            width: "100%",
            height: 2,
            bgcolor: "primary.main",
            opacity: 0.15,
          },
        }}
      >
        {letter}
      </Typography>

      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid key={item.term} size={{ xs: 12, sm: 6, md: 4 }}>
            <GlossaryCard item={item} onClick={() => onTermClick(item.term)} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
