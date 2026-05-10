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
};

export default nextConfig;
