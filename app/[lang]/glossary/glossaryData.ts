// app/[lang]/glossary/glossaryData.ts

export interface GlossaryItem {
  term: string;
  definition: string;
  wikiUrl?: string;
}

export const getGlossaryData = (
  dict: Record<string, string>,
): GlossaryItem[] => [
  {
    term: dict["glossary.term.ADR"],
    definition: dict["glossary.definition.ADR"],
  },
  {
    term: dict["glossary.term.nanoassembler"],
    definition: dict["glossary.definition.nanoassembler"],
  },
  {
    term: dict["glossary.term.starship"],
    definition: dict["glossary.definition.starship"],
  },
  {
    term: dict["glossary.term.optimus"],
    definition: dict["glossary.definition.optimus"],
  },
  {
    term: dict["glossary.term.neuralink"],
    definition: dict["glossary.definition.neuralink"],
  },
  {
    term: dict["glossary.term.fusion"],
    definition: dict["glossary.definition.fusion"],
  },
  {
    term: dict["glossary.term.terraforming"],
    definition: dict["glossary.definition.terraforming"],
  },
  {
    term: dict["glossary.term.commoditization"],
    definition: dict["glossary.definition.commoditization"],
    wikiUrl: "https://en.wikipedia.org/wiki/Commoditization",
  },
  {
    term: dict["glossary.term.commodity"],
    definition: dict["glossary.definition.commodity"],
    wikiUrl: "https://en.wikipedia.org/wiki/Commodity",
  },
  {
    term: dict["glossary.term.fungibility"],
    definition: dict["glossary.definition.fungibility"],
    wikiUrl: "https://en.wikipedia.org/wiki/Fungibility",
  },
];
