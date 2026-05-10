// mdx-components.tsx
"use client";

import type { MDXComponents } from "mdx/types";
import CodeBlock from "@/app/[lang]/components/CodeBlock";

type Dictionary = Record<string, string>;

export function getMDXComponents(dict: Dictionary = {}): MDXComponents {
  return {
    pre: (props: any) => <CodeBlock {...props} />,

    T: ({
      id,
      ...props
    }: { id: string } & React.HTMLAttributes<HTMLSpanElement>) => (
      <span {...props}>{dict[id] ?? id}</span>
    ),
  };
}
