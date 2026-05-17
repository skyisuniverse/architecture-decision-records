// // app/[lang]/components/Search.tsx
// "use client";

// import React, { useRef, useEffect, ChangeEvent, useMemo } from "react";
// import { useNavigation } from "../contexts/navigation-context";
// import { useParams } from "next/navigation";
// import { Highlight } from "@orama/highlight";
// import {
//   TextField,
//   List,
//   ListItemButton,
//   ListItemText,
//   Typography,
//   Box,
//   Paper,
//   InputAdornment,
//   Chip,
//   CircularProgress,
// } from "@mui/material";

// export default function Search() {
//   const params = useParams();
//   const currentLocale = (params?.lang as string) || "en";
//   const containerRef = useRef<HTMLDivElement>(null);
//   const highlighter = useMemo(() => new Highlight(), []);

//   const {
//     searchQuery,
//     setSearchQuery,
//     searchResults,
//     isSearchOpen,
//     setIsSearchOpen,
//     isSearchReady,
//   } = useNavigation();

//   useEffect(() => {
//     function handleOutsideClick(e: MouseEvent) {
//       if (
//         containerRef.current &&
//         !containerRef.current.contains(e.target as Node)
//       ) {
//         setIsSearchOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleOutsideClick);
//     return () => document.removeEventListener("mousedown", handleOutsideClick);
//   }, [setIsSearchOpen]);

//   useEffect(() => {
//     function handleKeyDown(e: KeyboardEvent) {
//       if ((e.ctrlKey || e.metaKey) && e.key === "k") {
//         e.preventDefault();
//         containerRef.current?.querySelector("input")?.focus();
//         setIsSearchOpen(true);
//       }
//     }
//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [setIsSearchOpen]);

//   function generateSnippet(body: string, keyword: string, offset = 55): string {
//     if (!body) return "";
//     const matchIdx = body.toLowerCase().indexOf(keyword.toLowerCase());
//     if (matchIdx === -1) return body.substring(0, offset * 2) + "...";

//     const start = Math.max(0, matchIdx - offset);
//     const end = Math.min(body.length, matchIdx + keyword.length + offset);
//     let slice = body.substring(start, end);

//     if (start > 0) slice = "..." + slice;
//     if (end < body.length) slice = slice + "...";

//     const highlightedInstance = highlighter.highlight(slice, keyword);
//     return highlightedInstance.HTML.replace(
//       /class="orama-highlight"/g,
//       'style="background-color: #ffe082; color: #000; font-weight: 600; padding: 2px 4px; border-radius: 3px;"',
//     );
//   }

//   return (
//     <Box
//       ref={containerRef}
//       sx={{
//         position: "relative",
//         width: "100%",
//         maxWidth: 460,
//         mx: "auto",
//         zIndex: 1200,
//       }}
//     >
//       <TextField
//         fullWidth
//         size="small"
//         placeholder={
//           currentLocale === "de"
//             ? "Dokumentation durchsuchen..."
//             : "Search documentation..."
//         }
//         value={searchQuery}
//         onFocus={() => setIsSearchOpen(true)}
//         onChange={(e: ChangeEvent<HTMLInputElement>) =>
//           setSearchQuery(e.target.value)
//         }
//         slotProps={{
//           input: {
//             endAdornment: (
//               <InputAdornment position="end">
//                 {!isSearchReady ? (
//                   <CircularProgress size={16} />
//                 ) : (
//                   <Chip
//                     label="Ctrl+K"
//                     size="small"
//                     variant="outlined"
//                     sx={{ height: 18, fontSize: "0.6rem", opacity: 0.6 }}
//                   />
//                 )}
//               </InputAdornment>
//             ),
//           },
//         }}
//         sx={{
//           "& .MuiOutlinedInput-root": {
//             borderRadius: 2,
//             bgcolor: "background.paper",
//             "& fieldset": { borderColor: "divider" },
//           },
//         }}
//       />

//       {isSearchOpen && searchQuery.trim() !== "" && (
//         <Paper
//           elevation={4}
//           sx={{
//             position: "absolute",
//             top: "112%",
//             left: 0,
//             right: 0,
//             maxHeight: 400,
//             overflowY: "auto",
//             borderRadius: 2.5,
//             border: "1px solid",
//             borderColor: "divider",
//             p: 0.75,
//             boxShadow: "0px 8px 24px rgba(0,0,0,0.12)",
//           }}
//         >
//           {searchResults.length > 0 ? (
//             <List disablePadding>
//               {searchResults.map((hit, index) => (
//                 <ListItemButton
//                   key={index}
//                   component="a"
//                   href={hit.url}
//                   sx={{
//                     borderRadius: 1.5,
//                     mb: 0.5,
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "flex-start",
//                     p: 1.5,
//                     "&:last-child": { mb: 0 },
//                   }}
//                 >
//                   {/* Nextra Style Breadcrumb Classification Header Path */}
//                   <Typography
//                     variant="caption"
//                     sx={{
//                       color: "primary.main",
//                       fontWeight: 500,
//                       fontSize: "0.7rem",
//                       textTransform: "uppercase",
//                       tracking: "0.05em",
//                       mb: 0.25,
//                     }}
//                   >
//                     {hit.category || "General"}
//                   </Typography>

//                   <ListItemText
//                     primary={
//                       <Typography
//                         variant="body2"
//                         sx={{
//                           fontWeight: 600,
//                           color: "text.primary",
//                           lineHeight: 1.3,
//                         }}
//                       >
//                         {hit.title}
//                       </Typography>
//                     }
//                     secondary={
//                       <Typography
//                         variant="caption"
//                         color="text.secondary"
//                         component="span"
//                         sx={{
//                           display: "block",
//                           mt: 0.5,
//                           wordBreak: "break-word",
//                           lineHeight: "1.45",
//                         }}
//                         dangerouslySetInnerHTML={{
//                           __html: generateSnippet(hit.content, searchQuery),
//                         }}
//                       />
//                     }
//                     sx={{ width: "100%", m: 0 }}
//                   />
//                 </ListItemButton>
//               ))}
//             </List>
//           ) : (
//             <Box sx={{ py: 3.5, textAlign: "center" }}>
//               <Typography variant="caption" color="text.secondary">
//                 {currentLocale === "de"
//                   ? "Keine Ergebnisse gefunden."
//                   : "No search results matched your entry."}
//               </Typography>
//             </Box>
//           )}
//         </Paper>
//       )}
//     </Box>
//   );
// }

// "use client";
// import React, { useRef, useEffect, ChangeEvent, useMemo } from "react";
// import { useNavigation } from "../contexts/navigation-context";
// import { useParams } from "next/navigation";
// import { Highlight } from "@orama/highlight";
// import {
//   InputBase,
//   IconButton,
//   List,
//   ListItemButton,
//   ListItemText,
//   Typography,
//   Box,
//   CircularProgress,
//   Paper,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";

// export default function Search() {
//   const params = useParams();
//   const currentLocale = (params?.lang as string) || "en";
//   const containerRef = useRef<HTMLDivElement>(null);
//   const highlighter = useMemo(() => new Highlight(), []);

//   const {
//     searchQuery,
//     setSearchQuery,
//     searchResults,
//     isSearchOpen,
//     setIsSearchOpen,
//     isSearchReady,
//   } = useNavigation();

//   // Closes search dropdown list whenever user clicks completely outside of container boundary
//   useEffect(() => {
//     function handleOutsideClick(e: MouseEvent) {
//       if (
//         containerRef.current &&
//         !containerRef.current.contains(e.target as Node)
//       ) {
//         setIsSearchOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleOutsideClick);
//     return () => document.removeEventListener("mousedown", handleOutsideClick);
//   }, [setIsSearchOpen]);

//   function generateSnippet(body: string, keyword: string, offset = 55): string {
//     if (!body) return "";
//     const matchIdx = body.toLowerCase().indexOf(keyword.toLowerCase());
//     if (matchIdx === -1) return body.substring(0, offset * 2) + "...";

//     const start = Math.max(0, matchIdx - offset);
//     const end = Math.min(body.length, matchIdx + keyword.length + offset);
//     let slice = body.substring(start, end);
//     if (start > 0) slice = "..." + slice;
//     if (end < body.length) slice = slice + "...";

//     const highlightedInstance = highlighter.highlight(slice, keyword);
//     return highlightedInstance.HTML.replace(
//       /class="orama-highlight"/g,
//       'style="background-color: #ffe082; color: #000; font-weight: 600; padding: 2px 4px; border-radius: 3px;"',
//     );
//   }

//   return (
//     <Box
//       ref={containerRef}
//       sx={{
//         position: "relative",
//         width: "100%",
//         maxWidth: 460,
//         mx: "auto",
//         zIndex: 1200,
//       }}
//     >
//       {/* Replaced Paper with transparent Box + white text/icon to blend into blue AppBar */}
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           backgroundColor: "rgba(255, 255, 255, 0.15)",
//           borderRadius: "8px",
//           px: 2,
//           py: 0.1,
//           color: "white",
//           transition: "background-color 0.2s ease",
//           // "&:hover": {
//           //   backgroundColor: "rgba(255, 255, 255, 0.25)",
//           // },
//           // "&:focus-within": {
//           //   backgroundColor: "rgba(255, 255, 255, 0.25)",
//           // },
//         }}
//       >
//         <InputBase
//           sx={{
//             ml: 1,
//             flex: 1,
//             color: "white",
//             // borderBottom: "1px solid white",
//             "& .MuiInputBase-input": {
//               color: "white",
//               "&::placeholder": {
//                 color: "white",
//                 opacity: 1,
//               },
//             },
//           }}
//           placeholder={currentLocale === "de" ? "Suche" : "Search"}
//           value={searchQuery}
//           onFocus={() => setIsSearchOpen(true)}
//           onChange={(e: ChangeEvent<HTMLInputElement>) =>
//             setSearchQuery(e.target.value)
//           }
//           inputProps={{ "aria-label": "search documentation" }}
//         />

//         <IconButton sx={{ p: "10px", color: "white" }} aria-label="search">
//           {!isSearchReady ? (
//             <CircularProgress size={22} thickness={4} color="inherit" />
//           ) : (
//             <SearchIcon />
//           )}
//         </IconButton>
//       </Box>

//       {/* Search results dropdown – unchanged (needs light background for readability) */}
//       {isSearchOpen && searchQuery.trim() !== "" && (
//         <Paper
//           elevation={4}
//           sx={{
//             position: "absolute",
//             top: "100%",
//             left: 0,
//             right: 0,
//             maxHeight: 400,
//             overflowY: "auto",
//             borderRadius: "0 0 8px 8px",
//             border: "1px solid",
//             borderColor: "divider",
//             borderTop: "none",
//             p: 0.75,
//             boxShadow: "0px 8px 24px rgba(0,0,0,0.12)",
//             // backgroundColor: "background.paper",
//             mt: 0.5, // small gap now that input no longer has white Paper
//           }}
//         >
//           {searchResults.length > 0 ? (
//             <List disablePadding>
//               {searchResults.map((hit, index) => (
//                 <ListItemButton
//                   key={index}
//                   component="a"
//                   href={hit.url}
//                   sx={{
//                     borderRadius: 1.5,
//                     mb: 0.5,
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "flex-start",
//                     p: 1.5,
//                     "&:last-child": { mb: 0 },
//                   }}
//                 >
//                   {/* Nextra Style Breadcrumb Classification Header Path */}
//                   <Typography
//                     variant="caption"
//                     sx={{
//                       color: "primary.main",
//                       fontWeight: 500,
//                       fontSize: "0.7rem",
//                       textTransform: "uppercase",
//                       letterSpacing: "0.05em",
//                       mb: 0.25,
//                     }}
//                   >
//                     {hit.category || "General"}
//                   </Typography>
//                   <ListItemText
//                     primary={
//                       <Typography
//                         variant="body2"
//                         sx={{
//                           fontWeight: 600,
//                           color: "text.primary",
//                           lineHeight: 1.3,
//                         }}
//                       >
//                         {hit.title}
//                       </Typography>
//                     }
//                     secondary={
//                       <Typography
//                         variant="caption"
//                         color="text.secondary"
//                         component="span"
//                         sx={{
//                           display: "block",
//                           mt: 0.5,
//                           wordBreak: "break-word",
//                           lineHeight: "1.45",
//                         }}
//                         dangerouslySetInnerHTML={{
//                           __html: generateSnippet(hit.content, searchQuery),
//                         }}
//                       />
//                     }
//                     sx={{ width: "100%", m: 0 }}
//                   />
//                 </ListItemButton>
//               ))}
//             </List>
//           ) : (
//             <Box sx={{ py: 3.5, textAlign: "center" }}>
//               <Typography variant="caption" color="text.secondary">
//                 {currentLocale === "de"
//                   ? "Keine Ergebnisse gefunden."
//                   : "No search results matched your entry."}
//               </Typography>
//             </Box>
//           )}
//         </Paper>
//       )}
//     </Box>
//   );
// }

// "use client";
// import React, { useRef, useEffect, ChangeEvent, useMemo } from "react";
// import { useTheme } from "@mui/material/styles";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { useNavigation } from "../contexts/navigation-context";
// import { useParams } from "next/navigation";
// import { Highlight } from "@orama/highlight";
// import {
//   InputBase,
//   IconButton,
//   List,
//   ListItemButton,
//   ListItemText,
//   Typography,
//   Box,
//   CircularProgress,
//   Paper,
//   Dialog,
//   DialogContent,
//   AppBar,
//   Toolbar,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// export default function Search() {
//   const params = useParams();
//   const currentLocale = (params?.lang as string) || "en";
//   const containerRef = useRef<HTMLDivElement>(null);
//   const highlighter = useMemo(() => new Highlight(), []);

//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   const {
//     searchQuery,
//     setSearchQuery,
//     searchResults,
//     isSearchOpen,
//     setIsSearchOpen,
//     isSearchReady,
//   } = useNavigation();

//   // Closes search dropdown (desktop only) when clicking outside
//   useEffect(() => {
//     if (isMobile) return; // modal handles its own close on mobile

//     function handleOutsideClick(e: MouseEvent) {
//       if (
//         containerRef.current &&
//         !containerRef.current.contains(e.target as Node)
//       ) {
//         setIsSearchOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleOutsideClick);
//     return () => document.removeEventListener("mousedown", handleOutsideClick);
//   }, [setIsSearchOpen, isMobile]);

//   function generateSnippet(body: string, keyword: string, offset = 55): string {
//     if (!body) return "";
//     const matchIdx = body.toLowerCase().indexOf(keyword.toLowerCase());
//     if (matchIdx === -1) return body.substring(0, offset * 2) + "...";

//     const start = Math.max(0, matchIdx - offset);
//     const end = Math.min(body.length, matchIdx + keyword.length + offset);
//     let slice = body.substring(start, end);
//     if (start > 0) slice = "..." + slice;
//     if (end < body.length) slice = slice + "...";

//     const highlightedInstance = highlighter.highlight(slice, keyword);
//     return highlightedInstance.HTML.replace(
//       /class="orama-highlight"/g,
//       'style="background-color: #ffe082; color: #000; font-weight: 600; padding: 2px 4px; border-radius: 3px;"',
//     );
//   }

//   return (
//     <Box
//       ref={containerRef}
//       sx={{
//         position: "relative",
//         width: "100%",
//         maxWidth: 460,
//         mx: "auto",
//         zIndex: 1200,
//       }}
//     >
//       {/* ====================== DESKTOP (sm+) ====================== */}
//       {!isMobile && (
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             borderBottom: "1px solid white",
//             px: 2,
//             py: 0.75,
//             color: "white",
//           }}
//         >
//           <InputBase
//             sx={{
//               ml: 1,
//               flex: 1,
//               color: "white",
//               "& .MuiInputBase-input": {
//                 color: "white",
//                 "&::placeholder": {
//                   color: "rgba(255, 255, 255, 0.75)",
//                   opacity: 1,
//                 },
//               },
//             }}
//             placeholder={currentLocale === "de" ? "Suche" : "Search"}
//             value={searchQuery}
//             onFocus={() => setIsSearchOpen(true)}
//             onChange={(e: ChangeEvent<HTMLInputElement>) =>
//               setSearchQuery(e.target.value)
//             }
//             inputProps={{ "aria-label": "search documentation" }}
//           />

//           <IconButton sx={{ p: "10px", color: "white" }} aria-label="search">
//             {!isSearchReady ? (
//               <CircularProgress size={22} thickness={4} color="inherit" />
//             ) : (
//               <SearchIcon />
//             )}
//           </IconButton>
//         </Box>
//       )}

//       {/* Desktop dropdown results */}
//       {!isMobile && isSearchOpen && searchQuery.trim() !== "" && (
//         <Paper
//           elevation={4}
//           sx={{
//             position: "absolute",
//             top: "100%",
//             left: 0,
//             right: 0,
//             maxHeight: 400,
//             overflowY: "auto",
//             borderRadius: "0 0 8px 8px",
//             border: "1px solid",
//             borderColor: "divider",
//             borderTop: "none",
//             p: 0.75,
//             boxShadow: "0px 8px 24px rgba(0,0,0,0.12)",
//             backgroundColor: "background.paper",
//             mt: 0.5,
//           }}
//         >
//           {searchResults.length > 0 ? (
//             <List disablePadding>
//               {searchResults.map((hit, index) => (
//                 <ListItemButton
//                   key={index}
//                   component="a"
//                   href={hit.url}
//                   sx={{
//                     borderRadius: 1.5,
//                     mb: 0.5,
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "flex-start",
//                     p: 1.5,
//                     "&:last-child": { mb: 0 },
//                   }}
//                 >
//                   <Typography
//                     variant="caption"
//                     sx={{
//                       color: "primary.main",
//                       fontWeight: 500,
//                       fontSize: "0.7rem",
//                       textTransform: "uppercase",
//                       letterSpacing: "0.05em",
//                       mb: 0.25,
//                     }}
//                   >
//                     {hit.category || "General"}
//                   </Typography>
//                   <ListItemText
//                     primary={
//                       <Typography
//                         variant="body2"
//                         sx={{
//                           fontWeight: 600,
//                           color: "text.primary",
//                           lineHeight: 1.3,
//                         }}
//                       >
//                         {hit.title}
//                       </Typography>
//                     }
//                     secondary={
//                       <Typography
//                         variant="caption"
//                         color="text.secondary"
//                         component="span"
//                         sx={{
//                           display: "block",
//                           mt: 0.5,
//                           wordBreak: "break-word",
//                           lineHeight: "1.45",
//                         }}
//                         dangerouslySetInnerHTML={{
//                           __html: generateSnippet(hit.content, searchQuery),
//                         }}
//                       />
//                     }
//                     sx={{ width: "100%", m: 0 }}
//                   />
//                 </ListItemButton>
//               ))}
//             </List>
//           ) : (
//             <Box sx={{ py: 3.5, textAlign: "center" }}>
//               <Typography variant="caption" color="text.secondary">
//                 {currentLocale === "de"
//                   ? "Keine Ergebnisse gefunden."
//                   : "No search results matched your entry."}
//               </Typography>
//             </Box>
//           )}
//         </Paper>
//       )}

//       {/* ====================== MOBILE (xs) ====================== */}
//       {isMobile && (
//         <IconButton
//           color="inherit"
//           aria-label="search"
//           onClick={() => setIsSearchOpen(true)}
//           sx={{ p: "10px" }}
//         >
//           {!isSearchReady ? (
//             <CircularProgress size={24} thickness={4} color="inherit" />
//           ) : (
//             <SearchIcon />
//           )}
//         </IconButton>
//       )}

//       {/* Full-screen modal for mobile only */}
//       {isMobile && (
//         <Dialog
//           fullScreen
//           open={isSearchOpen}
//           onClose={() => setIsSearchOpen(false)}
//           PaperProps={{
//             sx: { backgroundColor: "background.default" },
//           }}
//         >
//           <AppBar position="sticky" color="primary">
//             <Toolbar>
//               <IconButton
//                 edge="start"
//                 color="inherit"
//                 onClick={() => setIsSearchOpen(false)}
//                 aria-label="back"
//               >
//                 <ArrowBackIcon />
//               </IconButton>

//               <InputBase
//                 autoFocus
//                 fullWidth
//                 sx={{
//                   ml: 2,
//                   flex: 1,
//                   color: "white",
//                   "& .MuiInputBase-input": {
//                     color: "white",
//                     fontSize: "1.1rem",
//                     "&::placeholder": {
//                       color: "rgba(255, 255, 255, 0.85)",
//                       opacity: 1,
//                     },
//                   },
//                 }}
//                 placeholder={
//                   currentLocale === "de"
//                     ? "Dokumentation durchsuchen..."
//                     : "Search documentation..."
//                 }
//                 value={searchQuery}
//                 onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                   setSearchQuery(e.target.value)
//                 }
//                 inputProps={{ "aria-label": "search documentation" }}
//               />

//               {searchQuery && (
//                 <IconButton
//                   color="inherit"
//                   onClick={() => setSearchQuery("")}
//                   sx={{ ml: 1 }}
//                 >
//                   ✕
//                 </IconButton>
//               )}
//             </Toolbar>
//           </AppBar>

//           <DialogContent sx={{ p: 2, pt: 3 }}>
//             {searchResults.length > 0 ? (
//               <List disablePadding>
//                 {searchResults.map((hit, index) => (
//                   <ListItemButton
//                     key={index}
//                     component="a"
//                     href={hit.url}
//                     onClick={() => setIsSearchOpen(false)} // close modal when result is clicked
//                     sx={{
//                       borderRadius: 1.5,
//                       mb: 0.5,
//                       display: "flex",
//                       flexDirection: "column",
//                       alignItems: "flex-start",
//                       p: 1.5,
//                       "&:last-child": { mb: 0 },
//                     }}
//                   >
//                     <Typography
//                       variant="caption"
//                       sx={{
//                         color: "primary.main",
//                         fontWeight: 500,
//                         fontSize: "0.7rem",
//                         textTransform: "uppercase",
//                         letterSpacing: "0.05em",
//                         mb: 0.25,
//                       }}
//                     >
//                       {hit.category || "General"}
//                     </Typography>
//                     <ListItemText
//                       primary={
//                         <Typography
//                           variant="body2"
//                           sx={{
//                             fontWeight: 600,
//                             color: "text.primary",
//                             lineHeight: 1.3,
//                           }}
//                         >
//                           {hit.title}
//                         </Typography>
//                       }
//                       secondary={
//                         <Typography
//                           variant="caption"
//                           color="text.secondary"
//                           component="span"
//                           sx={{
//                             display: "block",
//                             mt: 0.5,
//                             wordBreak: "break-word",
//                             lineHeight: "1.45",
//                           }}
//                           dangerouslySetInnerHTML={{
//                             __html: generateSnippet(hit.content, searchQuery),
//                           }}
//                         />
//                       }
//                       sx={{ width: "100%", m: 0 }}
//                     />
//                   </ListItemButton>
//                 ))}
//               </List>
//             ) : (
//               <Box sx={{ py: 8, textAlign: "center" }}>
//                 <Typography variant="caption" color="text.secondary">
//                   {currentLocale === "de"
//                     ? "Keine Ergebnisse gefunden."
//                     : "No search results matched your entry."}
//                 </Typography>
//               </Box>
//             )}
//           </DialogContent>
//         </Dialog>
//       )}
//     </Box>
//   );
// }

"use client";
import React, { useRef, useEffect, ChangeEvent, useMemo } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigation } from "../contexts/navigation-context";
import { useParams } from "next/navigation";
import { Highlight } from "@orama/highlight";
import {
  InputBase,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Box,
  CircularProgress,
  Paper,
  Dialog,
  DialogContent,
  AppBar,
  Toolbar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Search() {
  const params = useParams();
  const currentLocale = (params?.lang as string) || "en";
  const containerRef = useRef<HTMLDivElement>(null);
  const highlighter = useMemo(() => new Highlight(), []);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const mobileInputRef = useRef<HTMLInputElement>(null);

  const {
    searchQuery,
    setSearchQuery,
    searchResults,
    isSearchOpen,
    setIsSearchOpen,
    isSearchReady,
  } = useNavigation();

  // Closes search dropdown list whenever user clicks completely outside of container boundary (desktop only)
  useEffect(() => {
    if (isMobile) return;

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
  }, [setIsSearchOpen, isMobile]);

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
      {/* ====================== DESKTOP (sm+) ====================== */}
      {/* EXACT same UI and styles as before – nothing changed */}
      {!isMobile && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            borderRadius: "8px",
            px: 2,
            py: 0.1,
            color: "white",
            transition: "background-color 0.2s ease",
          }}
        >
          <InputBase
            sx={{
              ml: 1,
              flex: 1,
              color: "white",
              "& .MuiInputBase-input": {
                color: "white",
                "&::placeholder": {
                  color: "white",
                  opacity: 1,
                },
              },
            }}
            placeholder={currentLocale === "de" ? "Suche" : "Search"}
            value={searchQuery}
            onFocus={() => setIsSearchOpen(true)}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearchQuery(e.target.value)
            }
            inputProps={{ "aria-label": "search documentation" }}
          />

          <IconButton sx={{ p: "10px", color: "white" }} aria-label="search">
            {!isSearchReady ? (
              <CircularProgress size={22} thickness={4} color="inherit" />
            ) : (
              <SearchIcon />
            )}
          </IconButton>
        </Box>
      )}

      {/* Desktop dropdown results – unchanged */}
      {!isMobile && isSearchOpen && searchQuery.trim() !== "" && (
        <Paper
          elevation={4}
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            maxHeight: 400,
            overflowY: "auto",
            borderRadius: "0 0 8px 8px",
            border: "1px solid",
            borderColor: "divider",
            borderTop: "none",
            p: 0.75,
            boxShadow: "0px 8px 24px rgba(0,0,0,0.12)",
            mt: 0.5,
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
                  <Typography
                    variant="caption"
                    sx={{
                      color: "primary.main",
                      fontWeight: 500,
                      fontSize: "0.7rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
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

      {/* ====================== MOBILE (xs) ====================== */}
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="search"
          onClick={() => setIsSearchOpen(true)}
          sx={{ p: "10px" }}
        >
          {!isSearchReady ? (
            <CircularProgress size={24} thickness={4} color="inherit" />
          ) : (
            <SearchIcon />
          )}
        </IconButton>
      )}

      {/* Full-screen modal for mobile only – with reliable autofocus */}
      {isMobile && (
        <Dialog
          fullScreen
          open={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          PaperProps={{
            sx: { backgroundColor: "background.default" },
          }}
          TransitionProps={{
            onEntered: () => {
              // This fires AFTER the modal animation finishes → most reliable focus
              if (mobileInputRef.current) {
                mobileInputRef.current.focus();
              }
            },
          }}
        >
          <AppBar position="sticky" color="primary">
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => setIsSearchOpen(false)}
                aria-label="back"
              >
                <ArrowBackIcon />
              </IconButton>

              <InputBase
                inputRef={mobileInputRef}
                autoFocus
                fullWidth
                sx={{
                  ml: 2,
                  flex: 1,
                  color: "white",
                  "& .MuiInputBase-input": {
                    color: "white",
                    fontSize: "1.1rem",
                    "&::placeholder": {
                      color: "rgba(255, 255, 255, 0.85)",
                      opacity: 1,
                    },
                  },
                }}
                placeholder={currentLocale === "de" ? "Suche" : "Search"}
                value={searchQuery}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setSearchQuery(e.target.value)
                }
                inputProps={{ "aria-label": "search documentation" }}
              />

              {searchQuery && (
                <IconButton
                  color="inherit"
                  onClick={() => setSearchQuery("")}
                  sx={{ ml: 1 }}
                >
                  ✕
                </IconButton>
              )}
            </Toolbar>
          </AppBar>

          <DialogContent sx={{ p: 2, pt: 3 }}>
            {searchResults.length > 0 ? (
              <List disablePadding>
                {searchResults.map((hit, index) => (
                  <ListItemButton
                    key={index}
                    component="a"
                    href={hit.url}
                    onClick={() => setIsSearchOpen(false)}
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
                    <Typography
                      variant="caption"
                      sx={{
                        color: "primary.main",
                        fontWeight: 500,
                        fontSize: "0.7rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
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
              <Box sx={{ py: 8, textAlign: "center" }}>
                <Typography variant="caption" color="text.secondary">
                  {currentLocale === "de"
                    ? "Keine Ergebnisse gefunden."
                    : "No search results matched your entry."}
                </Typography>
              </Box>
            )}
          </DialogContent>
        </Dialog>
      )}
    </Box>
  );
}
