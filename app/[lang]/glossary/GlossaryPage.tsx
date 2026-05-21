"use client";

import { useState, useMemo, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Box,
  TextField,
  InputAdornment,
  Button,
  Stack,
  Paper,
  Typography,
  Grid,
  alpha,
  Divider,
  Container,
  Link,
  useMediaQuery, // ← NEW: for responsive offset
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface GlossaryItem {
  term: string;
  definition: string;
  wikiUrl?: string;
}

interface Props {
  dict: Record<string, string>;
}

export default function GlossaryPage({ dict }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  // Responsive detection (mobile = below md breakpoint)
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  // Group by first letter + filter
  const grouped = useMemo(() => {
    const glossaryData: GlossaryItem[] = [
      {
        term: dict["glossary.term.ADR"],
        definition: dict["glossary.definition.ADR"],
      },
      {
        term: dict["glossary.term.nanoassembler"],
        definition: dict["glossary.definition.nanoassembler"],
      },
      {
        term: dict["glossary.term.starship"],
        definition: dict["glossary.definition.starship"],
      },
      {
        term: dict["glossary.term.optimus"],
        definition: dict["glossary.definition.optimus"],
      },
      {
        term: dict["glossary.term.neuralink"],
        definition: dict["glossary.definition.neuralink"],
      },
      {
        term: dict["glossary.term.fusion"],
        definition: dict["glossary.definition.fusion"],
      },
      {
        term: dict["glossary.term.terraforming"],
        definition: dict["glossary.definition.terraforming"],
      },
      {
        term: dict["glossary.term.commoditization"],
        definition: dict["glossary.definition.commoditization"],
        wikiUrl: "https://en.wikipedia.org/wiki/Commoditization",
      },
      {
        term: dict["glossary.term.commodity"],
        definition: dict["glossary.definition.commodity"],
        wikiUrl: "https://en.wikipedia.org/wiki/Commodity",
      },
      {
        term: dict["glossary.term.fungibility"],
        definition: dict["glossary.definition.fungibility"],
        wikiUrl: "https://en.wikipedia.org/wiki/Fungibility",
      },
    ];

    const filtered = glossaryData.filter(
      (item) =>
        item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.definition.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    return filtered.reduce((acc: Record<string, GlossaryItem[]>, item) => {
      const letter = item.term[0].toUpperCase();
      if (!acc[letter]) acc[letter] = [];
      acc[letter].push(item);
      return acc;
    }, {});
  }, [dict, searchTerm]);

  const letters = Object.keys(grouped).sort();

  // Original scroll function for letter headers (no offset)
  const scrollToLetter = (letter: string) => {
    const element = document.getElementById(`letter-${letter}`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Scroll function for terms with RESPONSIVE offset
  const scrollToTerm = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = isMobile ? 80 : 90; // ← 80px mobile, 90px desktop

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Click on letter button (top nav) or big letter header
  const handleLetterClick = (letter: string) => {
    const hash = `#${letter}`;
    router.replace(`${pathname}${hash}`, { scroll: false });
    scrollToLetter(letter);
  };

  // Click on term card
  const handleTermClick = (term: string) => {
    const hash = `#${encodeURIComponent(term)}`;
    router.replace(`${pathname}${hash}`, { scroll: false });
    scrollToTerm(term);
  };

  // Auto-scroll on direct link with hash (supports both #Letter and #Term)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const timer = setTimeout(() => {
        const id = decodeURIComponent(hash.slice(1));

        if (id.length === 1 && letters.includes(id)) {
          scrollToLetter(id);
        } else {
          scrollToTerm(id);
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [pathname, letters]);

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        px: { xs: 2, sm: 4, md: 0 },
        py: { xs: 6, md: 0 },
      }}
    >
      {/* HERO */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 100,
            textAlign: "center",
            mb: 1,
          }}
        >
          {dict.glossary}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ textAlign: "center", maxWidth: 600, mx: "auto" }}
        >
          {dict["glossary.subtitle"]}
        </Typography>
      </Box>

      {/* SEARCH + A-Z NAV */}
      <Box sx={{ mb: 6 }}>
        <TextField
          fullWidth
          placeholder={dict["glossary.searchPlaceholder"]}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
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
              onClick={() => handleLetterClick(letter)}
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
      </Box>

      {/* CONTENT */}
      {letters.length === 0 ? (
        <Typography variant="h6" align="center" sx={{ py: 8, opacity: 0.6 }}>
          {dict["glossary.noTermsFound"]}
        </Typography>
      ) : (
        letters.map((letter) => (
          <Box key={letter} sx={{ mb: 8 }}>
            {/* Letter Header – clickable */}
            <Typography
              id={`letter-${letter}`}
              variant="h2"
              onClick={() => handleLetterClick(letter)}
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
                "&:hover": {
                  opacity: 0.3,
                  transition: "opacity 0.2s ease",
                },
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

            {/* Terms Grid */}
            <Grid container spacing={3}>
              {grouped[letter].map((item) => (
                <Grid key={item.term} size={{ xs: 12, sm: 6, md: 4 }}>
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
                    onClick={() => handleTermClick(item.term)}
                  >
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{
                        fontWeight: 500,
                        mb: 1.5,
                        letterSpacing: "-0.01em",
                      }}
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
                      <Typography
                        variant="caption"
                        sx={{ mt: 2, display: "block" }}
                      >
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
                </Grid>
              ))}
            </Grid>
          </Box>
        ))
      )}

      {/* FOOTER NOTE */}
      <Typography
        variant="caption"
        sx={{ display: "block", textAlign: "center", opacity: 0.6, mt: 8 }}
      >
        {dict["glossary.lastUpdated"]}
      </Typography>
    </Container>
  );
}
