// app/[lang]/glossary/glossaryData.ts

// Maintain strict dictionary key references for domain types
export type GlossaryDomain =
  | "all"
  | "glossary.domain.general"
  | "glossary.domain.llm-training";

export interface GlossaryItem {
  term: string;
  definition: string;
  domain: GlossaryDomain; // Constrained directly to translation keys
  wikiUrl?: string;
}

export const getGlossaryData = (
  dict: Record<string, string>,
): GlossaryItem[] => [
  {
    term: dict["glossary.term.ADR"],
    definition: dict["glossary.definition.ADR"],
    domain: "glossary.domain.general",
  },
  {
    term: dict["glossary.term.nanoassembler"],
    definition: dict["glossary.definition.nanoassembler"],
    domain: "glossary.domain.general",
  },
  {
    term: dict["glossary.term.starship"],
    definition: dict["glossary.definition.starship"],
    domain: "glossary.domain.general",
  },
  {
    term: dict["glossary.term.optimus"],
    definition: dict["glossary.definition.optimus"],
    domain: "glossary.domain.general",
  },
  {
    term: dict["glossary.term.neuralink"],
    definition: dict["glossary.definition.neuralink"],
    domain: "glossary.domain.general",
  },
  {
    term: dict["glossary.term.fusion"],
    definition: dict["glossary.definition.fusion"],
    domain: "glossary.domain.general",
  },
  {
    term: dict["glossary.term.terraforming"],
    definition: dict["glossary.definition.terraforming"],
    domain: "glossary.domain.general",
  },
  {
    term: dict["glossary.term.commoditization"],
    definition: dict["glossary.definition.commoditization"],
    wikiUrl: "https://en.wikipedia.org/wiki/Commoditization",
    domain: "glossary.domain.general",
  },
  {
    term: dict["glossary.term.commodity"],
    definition: dict["glossary.definition.commodity"],
    wikiUrl: "https://en.wikipedia.org/wiki/Commodity",
    domain: "glossary.domain.general",
  },
  {
    term: dict["glossary.term.fungibility"],
    definition: dict["glossary.definition.fungibility"],
    wikiUrl: "https://en.wikipedia.org/wiki/Fungibility",
    domain: "glossary.domain.general",
  },
];
