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
          },
        }}
      >
        {children}
      </Box>
    </Paper>
  );
}
