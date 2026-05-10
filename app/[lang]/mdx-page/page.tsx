// app/[lang]/mdx-page/page.tsx
import fs from "fs/promises";
import path from "path";

import { Box } from "@mui/material";
import WithDictionary from "@/app/[lang]/components/WithDictionary";
import type { Locale } from "@/i18n-config";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import CodeBlock from "@/app/[lang]/components/CodeBlock"; // ← direct import
import { NavigationProvider } from "@/app/[lang]/contexts/navigation-context";

import moonlightTheme from "@/public/assets/moonlight-ii.json" with { type: "json" };

const rehypePrettyCodeOptions = {
  keepBackground: false,
  theme: moonlightTheme,
  grid: false,
};

export default async function MdxPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;

  // Load real .mdx file
  const mdxFilePath = path.join(
    process.cwd(),
    "app",
    "[lang]",
    "mdx-page",
    "index.mdx",
  );
  const mdxSource = await fs.readFile(mdxFilePath, "utf-8");

  return (
    <WithDictionary params={params}>
      {(dict) => (
        <NavigationProvider dict={dict}>
          <Box
            sx={{
              width: "100% !important",
              maxWidth: "100% !important",
              px: { xs: 2, sm: 3, md: 4 },
              boxSizing: "border-box",
              overflowX: "hidden",
            }}
          >
            <MDXRemote
              source={mdxSource}
              options={{
                mdxOptions: {
                  rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
                },
              }}
              components={{
                // Your reusable MUI CodeBlock
                pre: (props: any) => <CodeBlock {...props} />,

                // Your dictionary component (T)
                T: ({
                  id,
                  ...props
                }: { id: string } & React.HTMLAttributes<HTMLSpanElement>) => (
                  <span {...props}>{dict[id] ?? id}</span>
                ),
              }}
            />
          </Box>
        </NavigationProvider>
      )}
    </WithDictionary>
  );
}
