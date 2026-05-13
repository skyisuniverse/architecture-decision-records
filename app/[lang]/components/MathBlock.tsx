// // "use client";

// // import { useState } from "react";
// // import { Paper, Box, Typography, IconButton, Tooltip } from "@mui/material";
// // import ContentCopyIcon from "@mui/icons-material/ContentCopy";
// // import CheckIcon from "@mui/icons-material/Check";

// // export default function MathBlock({ children, ...props }: any) {
// //   const [copied, setCopied] = useState(false);

// //   // Extract the raw LaTeX string provided automatically by rehype-mathjax
// //   const rawLatex = props["data-tex"] || "";

// //   const handleCopy = async () => {
// //     if (rawLatex) {
// //       await navigator.clipboard.writeText(rawLatex.trim());
// //       setCopied(true);
// //       setTimeout(() => setCopied(false), 2000);
// //     }
// //   };

// //   return (
// //     <Paper
// //       elevation={0}
// //       sx={{
// //         my: 4,
// //         width: "100% !important",
// //         maxWidth: "100% !important",
// //         overflow: "hidden !important",
// //         border: 1,
// //         borderColor: "divider",
// //         borderRadius: 2,
// //         backgroundColor: "#212126", // Matches your CodeBlock background style
// //         boxSizing: "border-box",
// //       }}
// //     >
// //       {/* Header */}
// //       <Box
// //         sx={{
// //           px: 3,
// //           py: 1.5,
// //           bgcolor: "white",
// //           borderBottom: 1,
// //           borderColor: "divider",
// //           display: "flex",
// //           alignItems: "center",
// //           gap: 1,
// //         }}
// //       >
// //         <Typography
// //           variant="caption"
// //           sx={{
// //             fontWeight: 700,
// //             textTransform: "uppercase",
// //             letterSpacing: "0.5px",
// //             color: "text.secondary",
// //             fontFamily: "monospace",
// //           }}
// //         >
// //           Math Formula
// //         </Typography>

// //         <Tooltip title={copied ? "Copied LaTeX!" : "Copy LaTeX"}>
// //           <IconButton size="small" onClick={handleCopy} sx={{ ml: "auto" }}>
// //             {copied ? (
// //               <CheckIcon fontSize="small" />
// //             ) : (
// //               <ContentCopyIcon fontSize="small" />
// //             )}
// //           </IconButton>
// //         </Tooltip>
// //       </Box>

// //       {/* Render Output Area */}
// //       <Box
// //         sx={{
// //           m: 0,
// //           p: { xs: 3, sm: 4 },
// //           width: "100% !important",
// //           maxWidth: "100% !important",
// //           overflowX: "auto",
// //           overflowY: "hidden",
// //           boxSizing: "border-box",
// //           display: "flex",
// //           justifyContent: "center",
// //           alignItems: "center",
// //           backgroundColor: "#212126 !important",
// //         }}
// //       >
// //         {/* Pass down original attributes directly to native MathJax container */}
// //         <mjx-container {...props}>{children}</mjx-container>
// //       </Box>
// //     </Paper>
// //   );
// // }

// "use client";

// import { useState, useRef } from "react";
// import { Paper, Box, Typography, IconButton, Tooltip } from "@mui/material";
// import ContentCopyIcon from "@mui/icons-material/ContentCopy";
// import CheckIcon from "@mui/icons-material/Check";

// interface MathBlockProps {
//   children?: React.ReactNode;
//   title?: string;
//   formula?: string; // Explicit property to safely carry formulas without MDX parsing errors
// }

// export default function MathBlock({
//   children,
//   title,
//   formula,
// }: MathBlockProps) {
//   const [copied, setCopied] = useState(false);
//   const containerRef = useRef<HTMLDivElement>(null);

//   const handleCopy = async () => {
//     let textToCopy = "";

//     // 1. If explicit formula string prop is provided, copy that directly
//     if (formula) {
//       textToCopy = formula;
//     }
//     // 2. Otherwise, look inside the rendered elements to grab the hidden raw TeX data string
//     else if (containerRef.current) {
//       const mathjaxElement = containerRef.current.querySelector(
//         "mjx-container[data-tex]",
//       );
//       textToCopy =
//         mathjaxElement?.getAttribute("data-tex") ||
//         containerRef.current.innerText;
//     }

//     // Clean up block markers if they were included inside a formula string parameter
//     if (textToCopy) {
//       textToCopy = textToCopy.replace(/^(\$\$|\$)|(\$\$|\$)$/g, "");
//       await navigator.clipboard.writeText(textToCopy.trim());
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     }
//   };

//   return (
//     <Paper
//       elevation={0}
//       sx={{
//         my: 4,
//         width: "100% !important",
//         maxWidth: "100% !important",
//         overflow: "hidden !important",
//         border: 1,
//         borderColor: "divider",
//         borderRadius: 2,
//         backgroundColor: "#212126", // Matches your exact CodeBlock background color
//         boxSizing: "border-box",
//       }}
//     >
//       {/* Header */}
//       <Box
//         sx={{
//           px: 3,
//           py: 1.5,
//           bgcolor: "white",
//           borderBottom: 1,
//           borderColor: "divider",
//           display: "flex",
//           alignItems: "center",
//           gap: 1,
//         }}
//       >
//         <Typography
//           variant="caption"
//           sx={{
//             fontWeight: 700,
//             textTransform: "uppercase",
//             letterSpacing: "0.5px",
//             color: "text.secondary",
//             fontFamily: "monospace",
//           }}
//         >
//           {title ? `MATH: ${title}` : "Math Formula"}
//         </Typography>

//         <Tooltip title={copied ? "Copied LaTeX!" : "Copy LaTeX"}>
//           <IconButton size="small" onClick={handleCopy} sx={{ ml: "auto" }}>
//             {copied ? (
//               <CheckIcon fontSize="small" />
//             ) : (
//               <ContentCopyIcon fontSize="small" />
//             )}
//           </IconButton>
//         </Tooltip>
//       </Box>

//       {/* Render Output Area */}
//       <Box
//         ref={containerRef}
//         sx={{
//           m: 0,
//           p: { xs: 3, sm: 4 },
//           width: "100% !important",
//           maxWidth: "100% !important",
//           overflowX: "auto",
//           overflowY: "hidden",
//           boxSizing: "border-box",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           backgroundColor: "#212126 !important",
//         }}
//       >
//         {formula ? formula : children}
//       </Box>
//     </Paper>
//   );
// }

"use client";

import { useState, useRef } from "react";
import { Paper, Box, Typography, IconButton, Tooltip } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";

interface MathBlockProps {
  children?: React.ReactNode;
  title?: string;
  formula?: string; // Explicit property to safely carry formulas without MDX parsing errors
}

export default function MathBlock({
  children,
  title,
  formula,
}: MathBlockProps) {
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCopy = async () => {
    let textToCopy = "";

    // 1. If explicit formula string prop is provided, copy that directly
    if (formula) {
      textToCopy = formula;
    }
    // 2. Otherwise, look inside the rendered elements to grab the hidden raw TeX data string
    else if (containerRef.current) {
      const mathjaxElement = containerRef.current.querySelector(
        "mjx-container[data-tex]",
      );
      textToCopy =
        mathjaxElement?.getAttribute("data-tex") ||
        containerRef.current.innerText;
    }

    // Clean up block markers if they were included inside a formula string parameter
    if (textToCopy) {
      textToCopy = textToCopy.replace(/^(\$\$|\$)|(\$\$|\$)$/g, "");
      await navigator.clipboard.writeText(textToCopy.trim());
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
        backgroundColor: "#212126", // Matches your exact CodeBlock background color
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
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
        <Typography
          variant="caption"
          sx={{
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            color: "text.secondary",
            fontFamily: "monospace",
          }}
        >
          {title ? `MATH: ${title}` : "Math Formula"}
        </Typography>

        <Tooltip title={copied ? "Copied LaTeX!" : "Copy LaTeX"}>
          <IconButton size="small" onClick={handleCopy} sx={{ ml: "auto" }}>
            {copied ? (
              <CheckIcon fontSize="small" />
            ) : (
              <ContentCopyIcon fontSize="small" />
            )}
          </IconButton>
        </Tooltip>
      </Box>

      {/* Render Output Area */}
      <Box
        ref={containerRef}
        className="math-card-content" // Core hook linking this card's nested math to Moonlight syntax styling colors
        sx={{
          m: 0,
          p: { xs: 3, sm: 4 },
          width: "100% !important",
          maxWidth: "100% !important",
          overflowX: "auto",
          overflowY: "hidden",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#212126 !important",
        }}
      >
        {formula ? formula : children}
      </Box>
    </Paper>
  );
}
