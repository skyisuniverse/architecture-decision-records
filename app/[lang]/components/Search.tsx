// app/[lang]/components/Search.tsx
"use client";

import React, { useRef, useEffect, ChangeEvent, useMemo } from "react";
import { useNavigation } from "../contexts/navigation-context";
import { useParams } from "next/navigation";
import { Highlight } from "@orama/highlight";
import {
  TextField,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Box,
  Paper,
  InputAdornment,
  Chip,
  CircularProgress,
} from "@mui/material";

export default function Search() {
  const params = useParams();
  const currentLocale = (params?.lang as string) || "en";
  const containerRef = useRef<HTMLDivElement>(null);
  const highlighter = useMemo(() => new Highlight(), []);

  const {
    searchQuery,
    setSearchQuery,
    searchResults,
    isSearchOpen,
    setIsSearchOpen,
    isSearchReady,
  } = useNavigation();

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [setIsSearchOpen]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        containerRef.current?.querySelector("input")?.focus();
        setIsSearchOpen(true);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setIsSearchOpen]);

  function generateSnippet(body: string, keyword: string, offset = 55): string {
    if (!body) return "";
    const matchIdx = body.toLowerCase().indexOf(keyword.toLowerCase());
    if (matchIdx === -1) return body.substring(0, offset * 2) + "...";

    const start = Math.max(0, matchIdx - offset);
    const end = Math.min(body.length, matchIdx + keyword.length + offset);
    let slice = body.substring(start, end);

    if (start > 0) slice = "..." + slice;
    if (end < body.length) slice = slice + "...";

    const highlightedInstance = highlighter.highlight(slice, keyword);
    return highlightedInstance.HTML.replace(
      /class="orama-highlight"/g,
      'style="background-color: #ffe082; color: #000; font-weight: 600; padding: 2px 4px; border-radius: 3px;"',
    );
  }

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: 460,
        mx: "auto",
        zIndex: 1200,
      }}
    >
      <TextField
        fullWidth
        size="small"
        placeholder={
          currentLocale === "de"
            ? "Dokumentation durchsuchen..."
            : "Search documentation..."
        }
        value={searchQuery}
        onFocus={() => setIsSearchOpen(true)}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchQuery(e.target.value)
        }
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                {!isSearchReady ? (
                  <CircularProgress size={16} />
                ) : (
                  <Chip
                    label="Ctrl+K"
                    size="small"
                    variant="outlined"
                    sx={{ height: 18, fontSize: "0.6rem", opacity: 0.6 }}
                  />
                )}
              </InputAdornment>
            ),
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
            bgcolor: "background.paper",
            "& fieldset": { borderColor: "divider" },
          },
        }}
      />

      {isSearchOpen && searchQuery.trim() !== "" && (
        <Paper
          elevation={4}
          sx={{
            position: "absolute",
            top: "112%",
            left: 0,
            right: 0,
            maxHeight: 400,
            overflowY: "auto",
            borderRadius: 2.5,
            border: "1px solid",
            borderColor: "divider",
            p: 0.75,
            boxShadow: "0px 8px 24px rgba(0,0,0,0.12)",
          }}
        >
          {searchResults.length > 0 ? (
            <List disablePadding>
              {searchResults.map((hit, index) => (
                <ListItemButton
                  key={index}
                  component="a"
                  href={hit.url}
                  sx={{
                    borderRadius: 1.5,
                    mb: 0.5,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    p: 1.5,
                    "&:last-child": { mb: 0 },
                  }}
                >
                  {/* Nextra Style Breadcrumb Classification Header Path */}
                  <Typography
                    variant="caption"
                    sx={{
                      color: "primary.main",
                      fontWeight: 500,
                      fontSize: "0.7rem",
                      textTransform: "uppercase",
                      tracking: "0.05em",
                      mb: 0.25,
                    }}
                  >
                    {hit.category || "General"}
                  </Typography>

                  <ListItemText
                    primary={
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 600,
                          color: "text.primary",
                          lineHeight: 1.3,
                        }}
                      >
                        {hit.title}
                      </Typography>
                    }
                    secondary={
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        component="span"
                        sx={{
                          display: "block",
                          mt: 0.5,
                          wordBreak: "break-word",
                          lineHeight: "1.45",
                        }}
                        dangerouslySetInnerHTML={{
                          __html: generateSnippet(hit.content, searchQuery),
                        }}
                      />
                    }
                    sx={{ width: "100%", m: 0 }}
                  />
                </ListItemButton>
              ))}
            </List>
          ) : (
            <Box sx={{ py: 3.5, textAlign: "center" }}>
              <Typography variant="caption" color="text.secondary">
                {currentLocale === "de"
                  ? "Keine Ergebnisse gefunden."
                  : "No search results matched your entry."}
              </Typography>
            </Box>
          )}
        </Paper>
      )}
    </Box>
  );
}
