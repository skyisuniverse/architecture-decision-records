// app/[lang]/glossary/components/GlossaryHeader.tsx
import { Box, Typography } from "@mui/material";

interface GlossaryHeroProps {
  title: string;
  subtitle: string;
}

export function GlossaryHeader({ title, subtitle }: GlossaryHeroProps) {
  return (
    <Box sx={{ mb: 6 }}>
      <Typography
        variant="h3"
        component="h1"
        sx={{ fontWeight: 100, textAlign: "center", mb: 1 }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ textAlign: "center", maxWidth: 600, mx: "auto" }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
}
