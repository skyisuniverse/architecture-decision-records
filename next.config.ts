// // next.config.ts
// import type { NextConfig } from "next";
// import rehypePrettyCode from "rehype-pretty-code";
// import moonlightTheme from "./public/assets/moonlight-ii.json" with { type: "json" };

// /** @type {import('rehype-pretty-code').Options} */
// const rehypePrettyCodeOptions = {
//   keepBackground: false,
//   theme: {
//     light: "github-light",
//     dark: "github-dark-dimmed",
//   },
//   grid: true,
// };

// /** @type {import('next').NextConfig} */
// const nextConfig: NextConfig = {
//   // Configure `pageExtensions` to include markdown and MDX files
//   pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
//   // Optionally, add any other Next.js config below
// };

// const withMDX = createMDX({
//   // Add markdown plugins here, as desired
//   extension: /\.(md|mdx)$/,
//   options: {
//     remarkPlugins: [],
//     rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
//   },
// });

// // Merge MDX config with Next.js config
// export default withMDX(nextConfig);

// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  // Add any other Next.js config you already have here

  // FIX error:
  // ⨯ Error: Cannot find module '/Users/cybyrynth/Research-and-Development-Center/architecture-decision-records/.next/dev/server/package.json'
  // type: 'Error',
  //   code: 'MODULE_NOT_FOUND',
  //   requireStack: [
  //     '/.next/dev/server/chunks/ssr/node_modules_mathjax-full_js_0m4il~j._.js',
  //     '/.next/dev/server/chunks/ssr/[turbopack]_runtime.js',
  //     '/.next/dev/server/app/[lang]/mdx-page/page.js',
  //     '/node_modules/next/dist/server/require.js',
  //     '/node_modules/next/dist/server/load-components.js',
  //     '/node_modules/next/dist/server/dev/static-paths-worker.js',
  //     '/node_modules/next/dist/compiled/jest-worker/processChild.js'
  //   ],
  //   page: '/en/mdx-page'

  // The reason this error continues to loop is because Next.js 16's stable
  // Turbopack bundle compilation ignores custom code aliases for deeply nested
  // sub-dependencies like mathjax-full. When mathjax-full runs on the server
  // inside an isolated MDX stream component, it tries to read its internal
  // package.json configurations using classic require(), breaking because
  // Turbopack creates a sandboxed virtual runtime memory space instead.
  serverExternalPackages: ["mathjax-full"],
};

export default nextConfig;
