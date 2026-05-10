// app/[lang]/md-page/page.tsx
import fs from "fs/promises";
import path from "path";

import WithDictionary from "@/app/[lang]/components/WithDictionary";
import type { Locale } from "@/i18n-config";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import CodeBlock from "@/app/[lang]/components/CodeBlock";
import { NavigationProvider } from "@/app/[lang]/contexts/navigation-context";

import moonlightTheme from "@/public/assets/moonlight-ii.json" with { type: "json" };

const rehypePrettyCodeOptions = {
  keepBackground: false,
  theme: moonlightTheme,
  grid: true,
};

export default async function MdxPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;

  // Keep it as page.md — no need to rename
  const mdxFilePath = path.join(
    process.cwd(),
    "app",
    "[lang]",
    "md-page",
    "index.md", // ← keep .md here
  );

  const mdxSource = await fs.readFile(mdxFilePath, "utf-8");

  return (
    <WithDictionary params={params}>
      {(dict) => (
        <NavigationProvider dict={dict}>
          <MDXRemote
            source={mdxSource}
            options={{
              mdxOptions: {
                rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
              },
            }}
            components={{
              pre: (props: any) => <CodeBlock {...props} />,
              T: ({
                id,
                ...props
              }: { id: string } & React.HTMLAttributes<HTMLSpanElement>) => (
                <span {...props}>{dict[id] ?? id}</span>
              ),
            }}
          />
        </NavigationProvider>
      )}
    </WithDictionary>
  );
}
