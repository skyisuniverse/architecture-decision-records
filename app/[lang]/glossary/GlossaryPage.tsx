// // app/[lang]/glossary/glossarypage.tsx
// "use client";

// import { useState, useMemo } from "react";
// import { usePathname } from "next/navigation"; // Removed unused useRouter
// import { Container, Box, Typography } from "@mui/material";
// import { getGlossaryData, GlossaryItem, GlossaryDomain } from "./glossaryData";
// import { useGlossaryScroll } from "./hooks/useGlossaryScroll";

// import {
//   GlossaryHeader,
//   GlossarySearchBar,
//   GlossaryAlphabetNav,
//   GlossarySection,
//   EmptyState,
// } from "./components";
// import { GlossaryTabs } from "./components/GlossaryTabs";

// interface Props {
//   dict: Record<string, string>;
// }

// export default function GlossaryPage({ dict }: Props) {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [activeTab, setActiveTab] = useState<GlossaryDomain>("all");
//   const pathname = usePathname();

//   // Multi-tier compute layer
//   const { grouped, letters } = useMemo(() => {
//     let data = getGlossaryData(dict);
//     const searchLower = searchTerm.trim().toLowerCase();

//     if (activeTab !== "all") {
//       data = data.filter((item) => item.domain === activeTab);
//     }

//     const filtered = data.filter(
//       (item) =>
//         item.term?.toLowerCase().includes(searchLower) ||
//         item.definition?.toLowerCase().includes(searchLower),
//     );

//     const groupedData = filtered.reduce(
//       (acc: Record<string, GlossaryItem[]>, item) => {
//         if (!item.term || item.term.length === 0) return acc;
//         const letter = item.term[0].toUpperCase();

//         if (!acc[letter]) acc[letter] = [];
//         acc[letter].push(item);
//         return acc;
//       },
//       {},
//     );

//     return { grouped: groupedData, letters: Object.keys(groupedData).sort() };
//   }, [dict, searchTerm, activeTab]);

//   const { handleLetterClick, handleTermClick } = useGlossaryScroll(letters);

//   // Tab change handler that safely removes the hash string fragment without scrolling
//   const handleTabChange = (newTab: GlossaryDomain) => {
//     setActiveTab(newTab);

//     // Fixed: Native history mutation cleans the URL safely without bouncing the scroll viewport
//     window.history.replaceState(null, "", pathname);
//   };

//   return (
//     <Container
//       maxWidth={false}
//       disableGutters
//       sx={{ px: { xs: 2, sm: 4, md: 0 }, py: { xs: 6, md: 0 } }}
//     >
//       <GlossaryHeader
//         title={dict.glossary}
//         subtitle={dict["glossary.subtitle"]}
//       />

//       <Box sx={{ mb: 4 }}>
//         <GlossarySearchBar
//           value={searchTerm}
//           onChange={setSearchTerm}
//           placeholder={dict["glossary.searchPlaceholder"]}
//         />
//       </Box>

//       <GlossaryTabs
//         activeTab={activeTab}
//         onChange={handleTabChange}
//         dict={dict}
//       />

//       <Box sx={{ mb: 6 }}>
//         <GlossaryAlphabetNav
//           letters={letters}
//           onLetterClick={handleLetterClick}
//         />
//       </Box>

//       <div
//         id={`panel-${activeTab}`}
//         role="tabpanel"
//         aria-labelledby={`tab-${activeTab}`}
//       >
//         {letters.length === 0 ? (
//           <EmptyState message={dict["glossary.noTermsFound"]} />
//         ) : (
//           letters.map((letter) => (
//             <GlossarySection
//               key={`${activeTab}-${letter}`}
//               letter={letter}
//               items={grouped[letter]}
//               onLetterClick={() => handleLetterClick(letter)}
//               onTermClick={handleTermClick}
//             />
//           ))
//         )}
//       </div>

//       <Typography
//         variant="caption"
//         sx={{ display: "block", textAlign: "center", opacity: 0.6, mt: 8 }}
//       >
//         {dict["glossary.lastUpdated"]}
//       </Typography>
//     </Container>
//   );
// }

// app/[lang]/glossary/glossarypage.tsx
"use client";

import { Box, Container, Typography } from "@mui/material";
import { useGlossaryData } from "./hooks/useGlossaryData";
import { useGlossaryScroll } from "./hooks/useGlossaryScroll";
import {
  GlossaryHeader,
  GlossarySearchBar,
  GlossaryTabs,
  GlossaryAlphabetNav,
  GlossarySection,
  EmptyState,
} from "./components";

interface Props {
  dict: Record<string, string>;
}

export default function GlossaryPage({ dict }: Props) {
  const {
    searchTerm,
    setSearchTerm,
    activeTab,
    handleTabChange,
    grouped,
    letters,
  } = useGlossaryData(dict);
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

      <Box sx={{ mb: 4 }}>
        <GlossarySearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder={dict["glossary.searchPlaceholder"]}
        />
      </Box>

      <GlossaryTabs
        activeTab={activeTab}
        onChange={handleTabChange}
        dict={dict}
      />

      <Box sx={{ mb: 6 }}>
        <GlossaryAlphabetNav
          letters={letters}
          onLetterClick={handleLetterClick}
        />
      </Box>

      <div
        id={`panel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
      >
        {letters.length === 0 ? (
          <EmptyState message={dict["glossary.noTermsFound"]} />
        ) : (
          letters.map((letter) => (
            <GlossarySection
              key={`${activeTab}-${letter}`}
              letter={letter}
              items={grouped[letter]}
              onLetterClick={() => handleLetterClick(letter)}
              onTermClick={handleTermClick}
            />
          ))
        )}
      </div>

      <Typography
        variant="caption"
        sx={{ display: "block", textAlign: "center", opacity: 0.6, mt: 8 }}
      >
        {dict["glossary.lastUpdated"]}
      </Typography>
    </Container>
  );
}
