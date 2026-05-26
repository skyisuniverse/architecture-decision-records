// // app/[lang]/glossary/hooks/useGlossaryScroll.ts
// import { useEffect } from "react";
// import { useRouter, usePathname } from "next/navigation";
// import { useMediaQuery, useTheme } from "@mui/material";

// export function useGlossaryScroll(letters: string[]) {
//   const router = useRouter();
//   const pathname = usePathname();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

//   const scrollToLetter = (letter: string) => {
//     const element = document.getElementById(`letter-${letter}`);
//     element?.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

//   const scrollToTerm = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       const headerOffset = isMobile ? 80 : 90;
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.scrollY - headerOffset;

//       window.scrollTo({ top: offsetPosition, behavior: "smooth" });
//     }
//   };

//   const handleLetterClick = (letter: string) => {
//     router.replace(`${pathname}#${letter}`, { scroll: false });
//     scrollToLetter(letter);
//   };

//   const handleTermClick = (term: string) => {
//     router.replace(`${pathname}#${encodeURIComponent(term)}`, {
//       scroll: false,
//     });
//     scrollToTerm(term);
//   };

//   // Direct link URL hash routing tracking effect
//   useEffect(() => {
//     const hash = window.location.hash;
//     if (!hash) return;

//     const timer = setTimeout(() => {
//       const id = decodeURIComponent(hash.slice(1));
//       if (id.length === 1 && letters.includes(id)) {
//         scrollToLetter(id);
//       } else {
//         scrollToTerm(id);
//       }
//     }, 150);

//     return () => clearTimeout(timer);
//   }, [pathname, letters]);

//   return { handleLetterClick, handleTermClick };
// }

// app/[lang]/glossary/hooks/useGlossaryScroll.ts
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useMediaQuery, useTheme } from "@mui/material";

export function useGlossaryScroll(letters: string[]) {
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const scrollToLetter = (letter: string) => {
    const element = document.getElementById(`letter-${letter}`);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToTerm = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = isMobile ? 80 : 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  // Uses native state mutation to accurately lock scroll viewports
  const handleLetterClick = (letter: string) => {
    window.history.replaceState(null, "", `${pathname}#${letter}`);
    scrollToLetter(letter);
  };

  const handleTermClick = (term: string) => {
    window.history.replaceState(
      null,
      "",
      `${pathname}#${encodeURIComponent(term)}`,
    );
    scrollToTerm(term);
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const timer = setTimeout(() => {
      const id = decodeURIComponent(hash.slice(1));
      if (id.length === 1 && letters.includes(id)) {
        scrollToLetter(id);
      } else {
        scrollToTerm(id);
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname, letters]);

  return { handleLetterClick, handleTermClick };
}
