// app/[lang]/glossary/components/GlossaryAlphabetNav.tsx
import { Stack, Button } from "@mui/material";

interface NavProps {
  letters: string[];
  onLetterClick: (letter: string) => void;
}

export function GlossaryAlphabetNav({ letters, onLetterClick }: NavProps) {
  return (
    <Stack
      direction="row"
      spacing={1}
      flexWrap="wrap"
      justifyContent="center"
      sx={{ mt: 4 }}
    >
      {letters.map((letter) => (
        <Button
          key={letter}
          variant="outlined"
          size="small"
          onClick={() => onLetterClick(letter)}
          sx={{
            minWidth: 42,
            borderRadius: 4,
            fontWeight: 600,
            "&:hover": { bgcolor: "primary.main", color: "white" },
          }}
        >
          {letter}
        </Button>
      ))}
    </Stack>
  );
}
