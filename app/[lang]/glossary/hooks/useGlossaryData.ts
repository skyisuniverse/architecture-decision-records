// app/[lang]/glossary/hooks/useGlossaryData.ts
import { useState, useMemo } from "react";
import { usePathname } from "next/navigation";
import { getGlossaryData, GlossaryItem, GlossaryDomain } from "../glossaryData";

export function useGlossaryData(dict: Record<string, string>) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<GlossaryDomain>("all");
  const pathname = usePathname();

  // Multi-tier data transformation compute layer
  const { grouped, letters } = useMemo(() => {
    let data = getGlossaryData(dict);
    const searchLower = searchTerm.trim().toLowerCase();

    if (activeTab !== "all") {
      data = data.filter((item) => item.domain === activeTab);
    }

    const filtered = data.filter(
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
  }, [dict, searchTerm, activeTab]);

  // Safely strips URL hashes on tab switch without bouncing viewports
  const handleTabChange = (newTab: GlossaryDomain) => {
    setActiveTab(newTab);
    window.history.replaceState(null, "", pathname);
  };

  return {
    searchTerm,
    setSearchTerm,
    activeTab,
    handleTabChange,
    grouped,
    letters,
  };
}
