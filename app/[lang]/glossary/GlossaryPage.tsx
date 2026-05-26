// app/[lang]/glossary/glossarypage.tsx
"use client";

import { useState, useMemo } from "react";
import { Container, Box, Typography } from "@mui/material";
import { getGlossaryData, GlossaryItem } from "./glossaryData";
import { useGlossaryScroll } from "./hooks/useGlossaryScroll";

// Single-line import via our new index barrel!
import {
  GlossaryHeader,
  GlossarySearchBar,
  GlossaryAlphabetNav,
  GlossarySection,
  EmptyState,
} from "./components";

interface Props {
  dict: Record<string, string>;
}

export default function GlossaryPage({ dict }: Props) {
  const [searchTerm, setSearchTerm] = useState("");

  // Pure Data Compute Layer
  const { grouped, letters } = useMemo(() => {
    const rawData = getGlossaryData(dict);
    const searchLower = searchTerm.trim().toLowerCase();

    const filtered = rawData.filter(
      (item) =>
        item.term?.toLowerCase().includes(searchLower) ||
        item.definition?.toLowerCase().includes(searchLower),
    );

    const groupedData = filtered.reduce(
      (acc: Record<string, GlossaryItem[]>, item) => {
        if (!item.term) return acc;
        const letter = item.term[0].toUpperCase();

        if (!acc[letter]) acc[letter] = [];
        acc[letter].push(item);
        return acc;
      },
      {},
    );

    return { grouped: groupedData, letters: Object.keys(groupedData).sort() };
  }, [dict, searchTerm]);

  // Clean layout behavior execution hook
  const { handleLetterClick, handleTermClick } = useGlossaryScroll(letters);

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ px: { xs: 2, sm: 4, md: 0 }, py: { xs: 6, md: 0 } }}
    >
      <GlossaryHeader
        title={dict.glossary}
        subtitle={dict["glossary.subtitle"]}
      />

      <Box sx={{ mb: 6 }}>
        <GlossarySearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder={dict["glossary.searchPlaceholder"]}
        />
        <GlossaryAlphabetNav
          letters={letters}
          onLetterClick={handleLetterClick}
        />
      </Box>

      {letters.length === 0 ? (
        <EmptyState message={dict["glossary.noTermsFound"]} />
      ) : (
        letters.map((letter) => (
          <GlossarySection
            key={letter}
            letter={letter}
            items={grouped[letter]}
            onLetterClick={() => handleLetterClick(letter)}
            onTermClick={handleTermClick}
          />
        ))
      )}

      <Typography
        variant="caption"
        sx={{ display: "block", textAlign: "center", opacity: 0.6, mt: 8 }}
      >
        {dict["glossary.lastUpdated"]}
      </Typography>
    </Container>
  );
}
