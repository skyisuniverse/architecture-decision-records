// app/[lang]/glossary/components/GlossarySearchBar.tsx
import { TextField, InputAdornment, alpha } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
}

export function GlossarySearchBar({
  value,
  onChange,
  placeholder,
}: SearchBarProps) {
  return (
    <TextField
      fullWidth
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "text.secondary" }} />
            </InputAdornment>
          ),
        },
      }}
      sx={{
        maxWidth: 480,
        mx: "auto",
        display: "block",
        "& .MuiOutlinedInput-root": {
          borderRadius: 6,
          bgcolor: (theme) => alpha(theme.palette.background.paper, 0.6),
        },
      }}
    />
  );
}
