// app/[lang]/components/WithDictionary.tsx
import type { Locale } from "@/i18n-config";
import type { ReactNode } from "react";

type Dictionary = Record<string, string>;

interface WithDictionaryProps {
  children: (dict: Dictionary) => ReactNode;
  params: Promise<{ lang: Locale }>;
}

// ─────────────────────────────────────────────────────────────
// All dictionary loading logic lives here — single source of truth
async function loadDictionary(lang: Locale): Promise<Dictionary> {
  const dictModule = await import(`@/dictionaries/${lang}.json`);
  return dictModule.default || dictModule;
}

export default async function WithDictionary({
  children,
  params,
}: WithDictionaryProps) {
  const { lang } = await params;
  const dict = await loadDictionary(lang);

  return <>{children(dict)}</>;
}

// Optional: export the loader if you ever need it outside the render-prop
// (e.g. in generateMetadata)
export { loadDictionary as getDictionary };
