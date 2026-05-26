// app/[lang]/glossary/components/GlossaryCard.tsx
import { Paper, Typography, Divider, Link } from "@mui/material";
import { GlossaryItem } from "../glossaryData";

interface CardProps {
  item: GlossaryItem;
  onClick: () => void;
}

export function GlossaryCard({ item, onClick }: CardProps) {
  return (
    <Paper
      id={item.term}
      elevation={0}
      sx={{
        p: 3.5,
        height: "100%",
        borderRadius: 5,
        border: "1px solid",
        borderColor: "divider",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        scrollMarginTop: "120px",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: (theme) => theme.shadows[10],
          borderColor: "primary.main",
        },
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <Typography
        variant="h5"
        component="div"
        sx={{ fontWeight: 500, mb: 1.5, letterSpacing: "-0.01em" }}
      >
        {item.term}
      </Typography>

      <Divider sx={{ mb: 2 }} />

      <Typography
        variant="body1"
        sx={{ lineHeight: 1.7, color: "text.secondary" }}
      >
        {item.definition}
      </Typography>

      {item.wikiUrl && (
        <Typography variant="caption" sx={{ mt: 2, display: "block" }}>
          <Link
            href={item.wikiUrl}
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            sx={{ fontSize: "0.75rem", color: "primary.main" }}
            onClick={(e) => e.stopPropagation()}
          >
            (Wiki)
          </Link>
        </Typography>
      )}
    </Paper>
  );
}
