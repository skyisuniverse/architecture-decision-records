// app/[lang]/glossary/components/EmptyState.tsx
import { Typography } from "@mui/material";

export function EmptyState({ message }: { message: string }) {
  return (
    <Typography variant="h6" align="center" sx={{ py: 8, opacity: 0.6 }}>
      {message}
    </Typography>
  );
}
