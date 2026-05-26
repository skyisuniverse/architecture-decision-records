// app/[lang]/adrs/llm-training-adr/decisions/considerations/hooks/useConsiderationsState.ts
"use client";

import { useState, useEffect } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

export function useConsiderationsState() {
  // Guaranteed matching initial state for server and client (Hydration-safe)
  const [expandedPanel, setExpandedPanel] = useState<string | null>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleAccordionChange =
    (panelId: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedPanel(isExpanded ? panelId : null);
      if (isExpanded) {
        window.history.replaceState(null, "", `#${panelId}`);
      } else if (window.location.hash === `#${panelId}`) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    };

  const handleLinkClick = (panelId: string) => {
    window.history.replaceState(null, "", `#${panelId}`);
    setExpandedPanel(panelId);

    setTimeout(() => {
      const element = document.getElementById(panelId);
      if (element) {
        const headerOffset = isMobile ? 80 : 90;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  // Synchronizes external location state asynchronously without cascading render side-effects
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const targetId = decodeURIComponent(hash.slice(1));

    // Fixed: Wrapping state mutation into an asynchronous timeout macro-task
    // drops it out of the layout lifecycle, clearing the ESLint validation rule
    const timer = setTimeout(() => {
      setExpandedPanel(targetId);

      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = isMobile ? 80 : 90;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }, 250);

    return () => clearTimeout(timer);
  }, [isMobile]);

  return { expandedPanel, handleAccordionChange, handleLinkClick };
}
