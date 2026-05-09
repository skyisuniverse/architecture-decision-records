// mdx-components.tsx
import type { MDXComponents } from "mdx/types";

type Dictionary = Record<string, string>;

// ─────────────────────────────────────────────────────────────
// REQUIRED by @next/mdx — do NOT rename or remove this function
// It is automatically imported by every .mdx file
export function useMDXComponents(
  components: MDXComponents = {},
): MDXComponents {
  return components; // default passthrough (you can merge global components here later)
}

// ─────────────────────────────────────────────────────────────
// Our custom helper — this is what we actually use with the dictionary
export function getMDXComponents(dict: Dictionary = {}): MDXComponents {
  return {
    // Translation component — works in any MDX file
    T: ({
      id,
      ...props
    }: { id: string } & React.HTMLAttributes<HTMLSpanElement>) => {
      return <span {...props}>{dict[id] ?? id}</span>;
    },

    // ← Add more custom components later (AdrImage, Link, etc.)
  };
}
