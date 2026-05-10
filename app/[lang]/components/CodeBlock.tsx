// app/[lang]/components/CodeBlock.tsx
"use client";

import { useState } from "react";
import { Paper, Box, Typography, IconButton, Tooltip } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";

export default function CodeBlock(props: any) {
  const { children, "data-language": language, "data-title": title } = props;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (typeof children === "string") {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Paper
      elevation={0}
      sx={{
        my: 4,
        width: "100% !important",
        maxWidth: "100% !important",
        overflow: "hidden !important",
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
        backgroundColor: "#212126",
        boxSizing: "border-box",
      }}
      {...props}
    >
      {/* Header */}
      {(language || title) && (
        <Box
          sx={{
            px: 3,
            py: 1.5,
            bgcolor: "white",
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          {title && (
            <Typography
              variant="caption"
              sx={{ fontWeight: 700, fontFamily: "monospace" }}
            >
              {title}
            </Typography>
          )}
          {language && !title && (
            <Typography
              variant="caption"
              sx={{
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                color: "text.secondary",
              }}
            >
              {language}
            </Typography>
          )}

          <Tooltip title={copied ? "Copied!" : "Copy"}>
            <IconButton size="small" onClick={handleCopy} sx={{ ml: "auto" }}>
              {copied ? (
                <CheckIcon fontSize="small" />
              ) : (
                <ContentCopyIcon fontSize="small" />
              )}
            </IconButton>
          </Tooltip>
        </Box>
      )}

      {/* Shiki content */}
      <Box
        component="pre"
        sx={{
          m: 0,
          p: { xs: 3, sm: 4 },
          width: "100% !important",
          maxWidth: "100% !important",
          overflowX: "auto",
          overflowY: "hidden",
          fontSize: "0.95rem",
          lineHeight: 1.6,
          boxSizing: "border-box",
          "& code": {
            fontFamily: "ui-monospace, monospace",
            backgroundColor: "#212126 !important",
            width: "100% !important",
            maxWidth: "100% !important",

            /* === LINE NUMBERS === */
            "&[data-line-numbers]": {
              counterReset: "line",
            },
            "&[data-line-numbers] > [data-line]::before": {
              counterIncrement: "line",
              content: "counter(line)",
              display: "inline-block",
              width: "2.5rem",
              marginRight: "2rem",
              textAlign: "right",
              color: "#9499b3", // light gray – clearly visible on #212126
              opacity: 0.75,
              userSelect: "none",
              fontSize: "0.9em",
            },
            // Auto-adjust width for 3+ digit line numbers
            "&[data-line-numbers-max-digits='2'] > [data-line]::before": {
              width: "3rem",
            },
            "&[data-line-numbers-max-digits='3'] > [data-line]::before": {
              width: "3.5rem",
            },

            /* === HIGHLIGHTED LINE ({4}) === */
            "& [data-highlighted-line]": {
              backgroundColor: "rgba(134, 179, 255, 0.18)", // soft blue tint that pops on Moonlight dark bg
              borderLeft: "3px solid #569cd6",
              borderRadius: "2px",
            },

            /* WORD HIGHLIGHTING (new) */
            "& [data-highlighted-chars]": {
              backgroundColor: "rgba(134, 179, 255, 0.25)",
              padding: "2px 6px",
              borderRadius: "4px",
              color: "#c5d4ff",
              boxShadow: "0 0 0 1px rgba(134, 179, 255, 0.15)",
            },
          },
        }}
      >
        {children}
      </Box>
    </Paper>
  );
}
