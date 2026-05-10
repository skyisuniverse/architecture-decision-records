// app/[lang]/components/MDXContent.tsx
"use client";

import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";

import moonlightTheme from "@/public/assets/moonlight-ii.json" with { type: "json" };
import CodeBlock from "./CodeBlock";

const rehypePrettyCodeOptions = {
  keepBackground: false,
  theme: moonlightTheme,
  grid: false,
};

type Props = {
  source: string;
  dict?: Record<string, string>;
};

export default function MDXContent({ source, dict = {} }: Props) {
  return (
    <MDXRemote
      source={source}
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
  );
}
