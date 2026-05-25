// app/[lang]/adrs/llm-training-adr/decisions/software-selection/data.ts

export interface SoftwareItem {
  title: string;
  description: string;
  links: { label: string; url: string }[];
}

export interface GpuRow {
  gpu: string;
  arch: string;
}

// Function to dynamically build localized frameworks with their fallback rules
export const getSoftwareFrameworks = (
  d: Record<string, string>,
): SoftwareItem[] => [
  {
    title: d["tensorflow_title"] || "TensorFlow",
    description: d["tensorflow_desc"] || "",
    links: [
      {
        label: d["tensorflow_link_github"] || "GitHub",
        url: "https://github.com",
      },
      {
        label: d["tensorflow_link_doc"] || "Documentation",
        url: "https://tensorflow.org",
      },
    ].filter((l) => l.label),
  },
  {
    title: d["jax_title"] || "JAX",
    description: d["jax_desc"] || "",
    links: [
      { label: "GitHub", url: "https://github.com" },
      { label: d["jax_link_doc"] || "Documentation", url: "https://jax.dev" },
    ].filter((l) => l.label),
  },
  {
    title: d["flax_title"] || "Flax",
    description: d["flax_desc"] || "",
    links: [
      { label: d["flax_link_github"] || "GitHub", url: "https://github.com" },
      {
        label: d["flax_link_doc"] || "Documentation",
        url: "https://readthedocs.io",
      },
    ].filter((l) => l.label),
  },
];

// Function to dynamically map unmodified camelCase strings
export const getModularRawItems = (
  d: Record<string, string>,
): SoftwareItem[] => [
  {
    title: d["modularTitle"] || "Modular",
    description: d["modularDesc"] || "",
    links: [
      { label: d["modularLinkHome"] || "Modular", url: "https://modular.com" },
    ].filter((l) => l.label),
  },
  {
    title: d["servingTitle"] || "Serving",
    description: d["servingDesc"] || "",
    links: [],
  },
  {
    title: d["modelingTitle"] || "Modeling",
    description: d["modelingDesc"] || "",
    links: [],
  },
  {
    title: d["gpuKernelsTitle"] || "GPU Kernels",
    description: d["gpuKernelsDesc"] || "",
    links: [],
  },
  {
    title: d["hardwareCompatibilityTitle"] || "Hardware Compatibility",
    description: d["hardwareCompatibilityDesc"] || "",
    links: [],
  },
  {
    title: d["mojoTitle"] || "Mojo",
    description: d["mojoDesc"] || "",
    links: [
      { label: d["mojoLinkSite"] || "Mojo", url: "https://mojolang.org" },
    ].filter((l) => l.label),
  },
  {
    title: d["maxTitle"] || "MAX",
    description: d["maxDesc"] || "",
    links: [
      { label: d["maxLinkOss"] || "MAX", url: "https://modular.com" },
    ].filter((l) => l.label),
  },
  {
    title: d["selfHostedTitle"] || "Self-Hosted MAX + Mojo",
    description: d["selfHostedDesc"] || "",
    links: [
      {
        label: d["selfHostedLinkGuide"] || "Self-Hosted MAX + Mojo",
        url: "https://modular.com",
      },
    ].filter((l) => l.label),
  },
];

// Function to dynamically build localized kebab-case infrastructures
export const getInfrastructureSoftware = (
  d: Record<string, string>,
): SoftwareItem[] => [
  {
    title: d["modular-infra_title"] || "Modular Infrastructure Ecosystem",
    description: d["modular-infra_desc"] || "",
    links: [
      {
        label: d["modular-infra_link_home"] || "Modular Home",
        url: "https://modular.com",
      },
    ].filter((l) => l.label),
  },
  {
    title: d["serving-engine_title"] || "High-Performance Serving Engine",
    description: d["serving-engine_desc"] || "",
    links: [],
  },
  {
    title:
      d["modeling-layer_title"] || "Model Adaptability & Translation Layers",
    description: d["modeling-layer_desc"] || "",
    links: [],
  },
  {
    title:
      d["gpu-kernels_title"] || "Custom GPU Compilations & Execution Kernels",
    description: d["gpu-kernels_desc"] || "",
    links: [],
  },
  {
    title:
      d["hardware-compatibility_title"] ||
      "Heterogeneous Hardware Interoperability",
    description: d["hardware-compatibility_desc"] || "",
    links: [],
  },
  {
    title: d["mojo_title"] || "Systems Language Compilation (Mojo)",
    description: d["mojo_desc"] || "",
    links: [
      {
        label: d["mojo_link_site"] || "Mojo Lang Site",
        url: "https://mojolang.org",
      },
    ].filter((l) => l.label),
  },
  {
    title: d["max_title"] || "Inference Engine Architecture (MAX)",
    description: d["max_desc"] || "",
    links: [
      {
        label: d["max_link_oss"] || "MAX Open Source",
        url: "https://modular.com",
      },
    ].filter((l) => l.label),
  },
  {
    title: d["self-hosted_title"] || "Self-Hosted Platform Deployment Engine",
    description: d["self-hosted_desc"] || "",
    links: [
      {
        label: d["self-hosted_link_guide"] || "Self-Hosted Guide",
        url: "https://modular.com",
      },
    ].filter((l) => l.label),
  },
];

// Static hardware tables mapping profiles
export const GPU_TESTED_ROWS: GpuRow[] = [
  { gpu: "B200", arch: "Blackwell" },
  { gpu: "H100", arch: "Hopper" },
  { gpu: "H200", arch: "Hopper" },
];

export const GPU_COMPATIBLE_ROWS: GpuRow[] = [
  { gpu: "B300", arch: "Blackwell" },
  { gpu: "B100", arch: "Blackwell" },
  { gpu: "L4", arch: "Ada Lovelace" },
  { gpu: "L40", arch: "Ada Lovelace" },
  { gpu: "A100", arch: "Ampere" },
  { gpu: "A10", arch: "Ampere" },
  { gpu: "RTX 50XX series", arch: "Blackwell" },
  { gpu: "RTX 40XX series", arch: "Ada Lovelace" },
  { gpu: "RTX 30XX series", arch: "Ampere" },
  { gpu: "Jetson Orin / Orin Nano", arch: "Ampere" },
];

export const GPU_AMD_TESTED_ROWS: GpuRow[] = [
  { gpu: "MI355X", arch: "CDNA4" },
  { gpu: "MI300X", arch: "CDNA3" },
  { gpu: "MI325X", arch: "CDNA3" },
];

export const GPU_AMD_COMPATIBLE_ROWS: GpuRow[] = [
  { gpu: "MI250X", arch: "CDNA2" },
  { gpu: "Radeon RX 9070", arch: "RDNA4" },
  { gpu: "Radeon RX 9060", arch: "RDNA4" },
  { gpu: "Radeon 880M", arch: "RDNA3.5" },
  { gpu: "Radeon 860M", arch: "RDNA3.5" },
  { gpu: "Radeon 8060S", arch: "RDNA3.5" },
  { gpu: "Radeon RX 7900", arch: "RDNA3" },
  { gpu: "Radeon RX 7800 / 7700", arch: "RDNA3" },
  { gpu: "Radeon RX 7600", arch: "RDNA3" },
];
