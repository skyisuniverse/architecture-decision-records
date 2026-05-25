// // app/[lang]/adrs/llm-training-adr/decisions/software-selection/page.tsx

// import type { Locale } from "@/i18n-config";
// import { getDictionary } from "@/app/[lang]/components/WithDictionary";
// import { ADRHeader } from "@/app/[lang]/components/ADRHeader";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid"; // MUI v7 optimized import

// const DECISION_KEY = "software-selection";

// export default async function Page({
//   params,
// }: {
//   params: Promise<{ lang: Locale }>;
// }) {
//   const { lang } = await params;

//   // Load colocated decision-specific dictionary
//   let decisionDict: Record<string, string> = {};
//   try {
//     const decisionModule = await import(
//       `../../decisions-dictionaries/${lang}.json`
//     );
//     decisionDict = decisionModule.default || decisionModule;
//   } catch (err) {
//     console.warn(`Could not load decision dictionary for ${DECISION_KEY}`);
//   }

//   // Extract needed translation values with fallbacks
//   const labelWhat = decisionDict["label_what"] || "What";
//   const labelWhy = decisionDict["label_why"] || "Why";
//   const whatText = decisionDict[`${DECISION_KEY}_what`] || "";
//   const whyText = decisionDict[`${DECISION_KEY}_why`] || "";

//   return (
//     <>
//       <ADRHeader />
//       <Box
//         component="main"
//         sx={{
//           p: 0,
//           m: 0,
//           backgroundColor: "background.default",
//         }}
//       >
//         <Container
//           maxWidth="lg"
//           disableGutters // Strips the default @media responsive padding
//           sx={{
//             ml: 0, // Removes margin-left: auto
//             mr: 0, // Removes margin-right: auto if necessary
//             p: 0, // Forces padding: 0 overrides
//             m: 0, // Forces margin: 0 overrides
//           }}
//         >
//           {/* Details Grid */}
//           <Grid container spacing={4}>
//             {/* What section */}
//             {whatText && (
//               <Grid size={{ xs: 12, md: 6 }}>
//                 <Paper
//                   elevation={1}
//                   sx={{ p: 4, height: "100%", borderRadius: 2 }}
//                 >
//                   <Typography
//                     component="h2"
//                     variant="h5"
//                     color="primary"
//                     gutterBottom
//                     sx={{ fontWeight: 600 }}
//                   >
//                     {labelWhat}
//                   </Typography>
//                   <Typography
//                     variant="body1"
//                     color="text.secondary"
//                     sx={{ lineHeight: 1.7 }}
//                   >
//                     {whatText}
//                   </Typography>
//                 </Paper>
//               </Grid>
//             )}

//             {/* Why section */}
//             {whyText && (
//               <Grid size={{ xs: 12, md: 6 }}>
//                 <Paper
//                   elevation={1}
//                   sx={{ p: 4, height: "100%", borderRadius: 2 }}
//                 >
//                   <Typography
//                     component="h2"
//                     variant="h5"
//                     color="secondary"
//                     gutterBottom
//                     sx={{ fontWeight: 600 }}
//                   >
//                     {labelWhy}
//                   </Typography>
//                   <Typography
//                     variant="body1"
//                     color="text.secondary"
//                     sx={{ lineHeight: 1.7 }}
//                   >
//                     {whyText}
//                   </Typography>
//                 </Paper>
//               </Grid>
//             )}
//           </Grid>
//         </Container>
//       </Box>
//     </>
//   );
// }

// // app/[lang]/adrs/llm-training-adr/decisions/software-selection/page.tsx

// import type { Locale } from "@/i18n-config";
// import { getDictionary } from "@/app/[lang]/components/WithDictionary";
// import { ADRHeader } from "@/app/[lang]/components/ADRHeader";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid"; // MUI v7 optimized import
// import Divider from "@mui/material/Divider";
// import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";
// import LaunchIcon from "@mui/icons-material/Launch";

// const DECISION_KEY = "software-selection";

// interface SoftwareItem {
//   title: string;
//   description: string;
//   links: { label: string; url: string }[];
// }

// export default async function Page({
//   params,
// }: {
//   params: Promise<{ lang: Locale }>;
// }) {
//   const { lang } = await params;

//   // Load colocated decision-specific dictionary
//   let d: Record<string, string> = {};
//   try {
//     const decisionModule = await import(
//       `../../decisions-dictionaries/${lang}.json`
//     );
//     d = decisionModule.default || decisionModule;
//   } catch (err) {
//     console.warn(`Could not load decision dictionary for ${DECISION_KEY}`);
//   }

//   // Extract core framework translation headers with fallbacks
//   const labelWhat = d["label_what"] || "What";
//   const labelWhy = d["label_why"] || "Why";
//   const whatText = d[`${DECISION_KEY}_what`] || "";
//   const whyText = d[`${DECISION_KEY}_why`] || "";

//   // Localized section titles
//   const textSoftware = d["section_title_software"] || "Software";
//   const textModularStack =
//     d["section_title_modular_stack"] || "Infrastructure & Runtime Stack";

//   // Map primary baseline frameworks dynamically from dictionary inputs
//   const SOFTWARE_FRAMEWORKS: SoftwareItem[] = [
//     {
//       title: d["tensorflow_title"] || "TensorFlow",
//       description: d["tensorflow_desc"] || "",
//       links: [
//         {
//           label: d["tensorflow_link_github"] || "GitHub",
//           url: "https://github.com",
//         },
//         {
//           label: d["tensorflow_link_doc"] || "Documentation",
//           url: "https://tensorflow.org",
//         },
//       ].filter((l) => l.label),
//     },
//     {
//       title: d["jax_title"] || "JAX",
//       description: d["jax_desc"] || "",
//       links: [
//         { label: d["jax_link_doc"] || "Documentation", url: "https://jax.dev" },
//       ].filter((l) => l.label),
//     },
//     {
//       title: d["flax_title"] || "Flax",
//       description: d["flax_desc"] || "",
//       links: [
//         { label: d["flax_link_github"] || "GitHub", url: "https://github.com" },
//         {
//           label: d["flax_link_doc"] || "Documentation",
//           url: "https://readthedocs.io",
//         },
//       ].filter((l) => l.label),
//     },
//   ];

//   // Map unified self-hosted infrastructure elements dynamically from dictionary inputs
//   const INFRASTRUCTURE_SOFTWARE: SoftwareItem[] = [
//     {
//       title: d["modular-infra_title"] || "Modular Infrastructure Ecosystem",
//       description: d["modular-infra_desc"] || "",
//       links: [
//         {
//           label: d["modular-infra_link_home"] || "Home",
//           url: "https://modular.com",
//         },
//       ].filter((l) => l.label),
//     },
//     {
//       title: d["serving-engine_title"] || "High-Performance Serving Engine",
//       description: d["serving-engine_desc"] || "",
//       links: [],
//     },
//     {
//       title:
//         d["modeling-layer_title"] || "Model Adaptability & Translation Layers",
//       description: d["modeling-layer_desc"] || "",
//       links: [],
//     },
//     {
//       title:
//         d["gpu-kernels_title"] || "Custom GPU Compilations & Execution Kernels",
//       description: d["gpu-kernels_desc"] || "",
//       links: [],
//     },
//     {
//       title:
//         d["hardware-compatibility_title"] ||
//         "Heterogeneous Hardware Interoperability",
//       description: d["hardware-compatibility_desc"] || "",
//       links: [],
//     },
//     {
//       title: d["mojo_title"] || "Systems Language Compilation (Mojo)",
//       description: d["mojo_desc"] || "",
//       links: [
//         {
//           label: d["mojo_link_site"] || "Website",
//           url: "https://mojolang.org",
//         },
//       ].filter((l) => l.label),
//     },
//     {
//       title: d["max_title"] || "Inference Engine Architecture (MAX)",
//       description: d["max_desc"] || "",
//       links: [
//         {
//           label: d["max_link_oss"] || "Open Source",
//           url: "https://modular.comopen-source/max",
//         },
//       ].filter((l) => l.label),
//     },
//     {
//       title: d["self-hosted_title"] || "Self-Hosted Platform Deployment Engine",
//       description: d["self-hosted_desc"] || "",
//       links: [
//         {
//           label: d["self-hosted_link_guide"] || "Guide",
//           url: "https://modular.comopen-source/self-hosted",
//         },
//       ].filter((l) => l.label),
//     },
//   ];

//   // Reusable component generation function for matching layouts
//   const renderSoftwareGrid = (items: SoftwareItem[]) => (
//     <Grid container spacing={4}>
//       {items.map((item, idx) => (
//         <Grid size={{ xs: 12, md: 6 }} key={idx}>
//           <Paper
//             elevation={0}
//             variant="outlined"
//             sx={{
//               p: 4,
//               height: "100%",
//               borderRadius: 3,
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "space-between",
//               backgroundColor: "background.paper",
//               borderColor: "divider",
//               transition: "transform 0.2s, box-shadow 0.2s",
//               "&:hover": {
//                 transform: "translateY(-4px)",
//                 boxShadow: 3,
//               },
//             }}
//           >
//             <Box>
//               <Typography
//                 component="h3"
//                 variant="h6"
//                 sx={{ fontWeight: 600, mb: 1.5, color: "text.primary" }}
//               >
//                 {item.title}
//               </Typography>
//               <Typography
//                 variant="body2"
//                 color="text.secondary"
//                 sx={{ lineHeight: 1.7, mb: 2 }}
//               >
//                 {item.description}
//               </Typography>
//             </Box>

//             {item.links.length > 0 && (
//               <Stack
//                 direction="row"
//                 spacing={1.5}
//                 flexWrap="wrap"
//                 sx={{ mt: "auto", pt: 1 }}
//               >
//                 {item.links.map((lnk, lIdx) => (
//                   <Button
//                     key={lIdx}
//                     component="a"
//                     href={lnk.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     variant="text"
//                     color="primary"
//                     size="small"
//                     endIcon={<LaunchIcon sx={{ fontSize: 14 }} />}
//                     sx={{
//                       textTransform: "none",
//                       fontWeight: 600,
//                       p: 0,
//                       minWidth: 0,
//                       mr: 1.5,
//                     }}
//                   >
//                     {lnk.label}
//                   </Button>
//                 ))}
//               </Stack>
//             )}
//           </Paper>
//         </Grid>
//       ))}
//     </Grid>
//   );

//   return (
//     <>
//       <ADRHeader />
//       <Box
//         component="main"
//         sx={{
//           p: 0,
//           m: 0,
//           backgroundColor: "background.default",
//           py: 4,
//         }}
//       >
//         <Container
//           maxWidth="lg"
//           disableGutters
//           sx={{ m: 0, ml: 0, mr: 0, px: 0 }}
//         >
//           {/* Baseline Core What & Why Details Grid */}
//           <Grid container spacing={4} sx={{ mb: 6 }}>
//             {whatText && (
//               <Grid size={{ xs: 12, md: 6 }}>
//                 <Paper
//                   elevation={1}
//                   sx={{ p: 4, height: "100%", borderRadius: 2 }}
//                 >
//                   <Typography
//                     component="h2"
//                     variant="h5"
//                     color="primary"
//                     gutterBottom
//                     sx={{ fontWeight: 600 }}
//                   >
//                     {labelWhat}
//                   </Typography>
//                   <Typography
//                     variant="body1"
//                     color="text.secondary"
//                     sx={{ lineHeight: 1.7 }}
//                   >
//                     {whatText}
//                   </Typography>
//                 </Paper>
//               </Grid>
//             )}

//             {whyText && (
//               <Grid size={{ xs: 12, md: 6 }}>
//                 <Paper
//                   elevation={1}
//                   sx={{ p: 4, height: "100%", borderRadius: 2 }}
//                 >
//                   <Typography
//                     component="h2"
//                     variant="h5"
//                     color="secondary"
//                     gutterBottom
//                     sx={{ fontWeight: 600 }}
//                   >
//                     {labelWhy}
//                   </Typography>
//                   <Typography
//                     variant="body1"
//                     color="text.secondary"
//                     sx={{ lineHeight: 1.7 }}
//                   >
//                     {whyText}
//                   </Typography>
//                 </Paper>
//               </Grid>
//             )}
//           </Grid>

//           {/* Section 1 Divider */}
//           <Box sx={{ my: 6 }}>
//             <Divider sx={{ borderBottomWidth: 2 }} />
//           </Box>

//           {/* Software Section Headline */}
//           <Typography
//             component="h2"
//             variant="h4"
//             sx={{ fontWeight: 700, mb: 4, color: "text.primary" }}
//           >
//             {textSoftware}
//           </Typography>

//           {/* Render Frameworks Grid */}
//           {renderSoftwareGrid(SOFTWARE_FRAMEWORKS)}

//           {/* Section 2 Divider */}
//           <Box sx={{ my: 6 }}>
//             <Divider sx={{ borderBottomWidth: 2 }} />
//           </Box>

//           {/* Unified Stack Headline */}
//           <Typography
//             component="h2"
//             variant="h4"
//             sx={{ fontWeight: 700, mb: 4, color: "text.primary" }}
//           >
//             {textModularStack}
//           </Typography>

//           {/* Render Infrastructure Cards Grid */}
//           {renderSoftwareGrid(INFRASTRUCTURE_SOFTWARE)}
//         </Container>
//       </Box>
//     </>
//   );
// }

// app/[lang]/adrs/llm-training-adr/decisions/software-selection/page.tsx

import type { Locale } from "@/i18n-config";
import { getDictionary } from "@/app/[lang]/components/WithDictionary";
import { ADRHeader } from "@/app/[lang]/components/ADRHeader";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid"; // MUI v7 optimized import
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import LaunchIcon from "@mui/icons-material/Launch";

// Import clean data layers from co-located file configuration
import {
  SoftwareItem,
  getSoftwareFrameworks,
  getModularRawItems,
  getInfrastructureSoftware,
  GPU_TESTED_ROWS,
  GPU_COMPATIBLE_ROWS,
  GPU_AMD_TESTED_ROWS, // Added missing import
  GPU_AMD_COMPATIBLE_ROWS, // Added missing import
} from "./data";

const DECISION_KEY = "software-selection";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;

  // Load colocated decision-specific dictionary
  let d: Record<string, string> = {};
  try {
    const decisionModule = await import(
      `../../decisions-dictionaries/${lang}.json`
    );
    d = decisionModule.default || decisionModule;
  } catch (err) {
    console.warn(`Could not load decision dictionary for ${DECISION_KEY}`);
  }

  // Extract translation headers with fallbacks
  const labelWhat = d["label_what"] || "What";
  const labelWhy = d["label_why"] || "Why";
  const whatText = d[`${DECISION_KEY}_what`] || "";
  const whyText = d[`${DECISION_KEY}_why`] || "";

  // Localized section titles
  const textSoftware = d["section_title_software"] || "Software";
  const textInfrastructureStack =
    d["section_title_modular_stack"] || "Infrastructure & Runtime Stack";

  // Hydrate data items dynamically based on dictionary configurations
  const SOFTWARE_FRAMEWORKS = getSoftwareFrameworks(d);
  const MODULAR_RAW_ITEMS = getModularRawItems(d);
  const INFRASTRUCTURE_SOFTWARE = getInfrastructureSoftware(d);

  // Reusable card grid rendering function with responsive mobile links layout
  const renderSoftwareGrid = (items: SoftwareItem[]) => (
    <Grid container spacing={4}>
      {items.map((item, idx) => (
        <Grid size={{ xs: 12, md: 6 }} key={idx}>
          <Paper
            elevation={0}
            variant="outlined"
            sx={{
              p: 4,
              height: "100%",
              borderRadius: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backgroundColor: "background.paper",
              borderColor: "divider",
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: 3,
              },
            }}
          >
            <Box>
              <Typography
                component="h3"
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 1.5,
                  color: "text.primary",
                  whiteSpace: "pre-wrap",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ lineHeight: 1.7, mb: 2, whiteSpace: "pre-wrap" }}
              >
                {item.description}
              </Typography>
            </Box>

            {item.links.length > 0 && (
              /* Replaced Stack with a Grid layout to control structural breaks per breakpoint */
              <Grid container spacing={1.5} sx={{ mt: "auto", pt: 1 }}>
                {item.links.map((lnk, lIdx) => (
                  <Grid
                    key={lIdx}
                    size={{ xs: 12, sm: "auto" }} // xs: 12 forces one link per row on mobile, sm: auto enables multiple inline on desktop
                  >
                    <Button
                      component="a"
                      href={lnk.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="text"
                      color="primary"
                      size="small"
                      endIcon={<LaunchIcon sx={{ fontSize: 14 }} />}
                      sx={{
                        textTransform: "none",
                        fontWeight: 600,
                        p: 0,
                        minWidth: 0,
                        justifyContent: "flex-start", // Ensures text aligns nicely when stretched full-width on mobile
                        width: { xs: "100%", sm: "auto" },
                      }}
                    >
                      {lnk.label}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            )}
          </Paper>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <>
      <ADRHeader />
      <Box
        component="main"
        sx={{
          p: 0,
          m: 0,
          backgroundColor: "background.default",
          py: 4,
        }}
      >
        <Container
          maxWidth="lg"
          disableGutters
          sx={{ m: 0, ml: 0, mr: 0, px: 0 }}
        >
          {/* Baseline Core What & Why Details Grid */}
          <Grid container spacing={4} sx={{ mb: 6 }}>
            {whatText && (
              <Grid size={{ xs: 12, md: 6 }}>
                <Paper
                  elevation={1}
                  sx={{ p: 4, height: "100%", borderRadius: 2 }}
                >
                  <Typography
                    component="h2"
                    variant="h5"
                    color="primary"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {labelWhat}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ lineHeight: 1.7 }}
                  >
                    {whatText}
                  </Typography>
                </Paper>
              </Grid>
            )}

            {whyText && (
              <Grid size={{ xs: 12, md: 6 }}>
                <Paper
                  elevation={1}
                  sx={{ p: 4, height: "100%", borderRadius: 2 }}
                >
                  <Typography
                    component="h2"
                    variant="h5"
                    color="secondary"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {labelWhy}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ lineHeight: 1.7 }}
                  >
                    {whyText}
                  </Typography>
                </Paper>
              </Grid>
            )}
          </Grid>

          {/* Section 1 Divider */}
          <Box sx={{ my: 6 }}>
            <Divider sx={{ borderBottomWidth: 2 }} />
          </Box>

          {/* Software Section Headline (TensorFlow, JAX, Flax) */}
          <Typography
            component="h2"
            variant="h4"
            sx={{ fontWeight: 700, mb: 4, color: "text.primary" }}
          >
            {textSoftware}
          </Typography>

          {/* Render Frameworks Grid */}
          {renderSoftwareGrid(SOFTWARE_FRAMEWORKS)}

          {/* Section 2 Divider */}
          <Box sx={{ my: 6 }}>
            <Divider sx={{ borderBottomWidth: 2 }} />
          </Box>

          {/* Raw Unmodified Marketing Section Headline */}
          <Typography
            component="h2"
            variant="h4"
            sx={{ fontWeight: 700, mb: 4, color: "text.primary" }}
          >
            Modular
          </Typography>

          {/* Render Unmodified Modular Raw Cards Grid */}
          {renderSoftwareGrid(MODULAR_RAW_ITEMS)}

          {/* Section 3 Divider */}
          <Box sx={{ my: 6 }}>
            <Divider sx={{ borderBottomWidth: 2 }} />
          </Box>

          {/* Neutralized Infrastructure & Runtime Stack Headline */}
          <Typography
            component="h2"
            variant="h4"
            sx={{ fontWeight: 700, mb: 4, color: "text.primary" }}
          >
            {textInfrastructureStack}
          </Typography>

          {/* Render Neutralized Infrastructure Cards Grid */}
          {renderSoftwareGrid(INFRASTRUCTURE_SOFTWARE)}

          {/* Section 4 Divider */}
          <Box sx={{ my: 6 }}>
            <Divider sx={{ borderBottomWidth: 2 }} />
          </Box>

          {/* GPU Compatibility Header and Anchor Actions Links Block */}
          <Box sx={{ mb: 4 }}>
            <Typography
              component="h2"
              variant="h4"
              sx={{ fontWeight: 700, mb: 2, color: "text.primary" }}
            >
              {d["section_title_gpu_compatibility"] ||
                "Modular MAX GPU Compatibility"}
            </Typography>
            <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap>
              <Button
                component="a"
                href="https://modular.com"
                target="_blank"
                rel="noopener noreferrer"
                variant="text"
                color="primary"
                size="small"
                endIcon={<LaunchIcon sx={{ fontSize: 14 }} />}
                sx={{ textTransform: "none", fontWeight: 600, p: 0 }}
              >
                {d["link_label_gpu_packages"] || "GPU Compatibility"}
              </Button>
              <Button
                component="a"
                href="https://modular.com"
                target="_blank"
                rel="noopener noreferrer"
                variant="text"
                color="primary"
                size="small"
                endIcon={<LaunchIcon sx={{ fontSize: 14 }} />}
                sx={{ textTransform: "none", fontWeight: 600, p: 0 }}
              >
                {d["link_label_nvidia_gpus"] || "NVIDIA GPUs"}
              </Button>
              <Button
                component="a"
                href="https://modular.com"
                target="_blank"
                rel="noopener noreferrer"
                variant="text"
                color="primary"
                size="small"
                endIcon={<LaunchIcon sx={{ fontSize: 14 }} />}
                sx={{ textTransform: "none", fontWeight: 600, p: 0 }}
              >
                {d["link_label_amd_gpus"] || "AMD GPUs"}
              </Button>
            </Stack>
          </Box>

          {/* Responsive Side-by-Side Table Matrix */}
          <Grid container spacing={4} sx={{ mb: 4 }}>
            {/* COLUMN 1: NVIDIA Hardware Configurations */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 700, mb: 2, color: "text.primary" }}
              >
                {d["link_label_nvidia_gpus"] || "NVIDIA GPUs"}
              </Typography>
              <Paper
                variant="outlined"
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  borderColor: "divider",
                  backgroundColor: "background.paper",
                  mb: 2,
                }}
              >
                <Box
                  component="table"
                  sx={{
                    width: "100%",
                    borderCollapse: "collapse",
                    textAlign: "left",
                  }}
                >
                  <Box
                    component="thead"
                    sx={{
                      backgroundColor: "action.hover",
                      borderBottom: "1px solid",
                      borderColor: "divider",
                    }}
                  >
                    <tr>
                      <Box
                        component="th"
                        sx={{
                          p: 2,
                          fontWeight: 600,
                          fontSize: "0.875rem",
                          color: "text.primary",
                          width: "50%",
                        }}
                      >
                        {d["gpu_table_label_gpu"] || "GPU"}
                      </Box>
                      <Box
                        component="th"
                        sx={{
                          p: 2,
                          fontWeight: 600,
                          fontSize: "0.875rem",
                          color: "text.primary",
                          width: "50%",
                        }}
                      >
                        {d["gpu_table_label_architecture"] || "Architecture"}
                      </Box>
                    </tr>
                  </Box>
                  <Box component="tbody">
                    <tr
                      style={{
                        backgroundColor:
                          "var(--mui-palette-action-selected, rgba(0,0,0,0.04))",
                      }}
                    >
                      <Box
                        component="td"
                        colSpan={2}
                        sx={{
                          p: 2,
                          fontWeight: 700,
                          fontSize: "0.875rem",
                          color: "primary.main",
                          borderBottom: "1px solid",
                          borderColor: "divider",
                        }}
                      >
                        {d["gpu_table_group_tested"] || "Tested for serving"}
                      </Box>
                    </tr>
                    {GPU_TESTED_ROWS.map((row, idx) => (
                      <Box
                        component="tr"
                        key={`nv-test-${idx}`}
                        sx={{
                          borderBottom: "1px solid",
                          borderColor: "divider",
                          "&:hover": { backgroundColor: "action.hover" },
                        }}
                      >
                        <Box
                          component="td"
                          sx={{
                            p: 2,
                            fontSize: "0.875rem",
                            color: "text.primary",
                          }}
                        >
                          {row.gpu}
                        </Box>
                        <Box
                          component="td"
                          sx={{
                            p: 2,
                            fontSize: "0.875rem",
                            color: "text.secondary",
                          }}
                        >
                          {row.arch}
                        </Box>
                      </Box>
                    ))}
                    <tr
                      style={{
                        backgroundColor:
                          "var(--mui-palette-action-selected, rgba(0,0,0,0.04))",
                      }}
                    >
                      <Box
                        component="td"
                        colSpan={2}
                        sx={{
                          p: 2,
                          fontWeight: 700,
                          fontSize: "0.875rem",
                          color: "secondary.main",
                          borderBottom: "1px solid",
                          borderColor: "divider",
                          pt: 3,
                        }}
                      >
                        {d["gpu_table_group_compatible"] ||
                          "Known compatible for development"}
                      </Box>
                    </tr>
                    {GPU_COMPATIBLE_ROWS.map((row, idx) => (
                      <Box
                        component="tr"
                        key={`nv-comp-${idx}`}
                        sx={{
                          borderBottom:
                            idx === GPU_COMPATIBLE_ROWS.length - 1
                              ? "none"
                              : "1px solid",
                          borderColor: "divider",
                          "&:hover": { backgroundColor: "action.hover" },
                        }}
                      >
                        <Box
                          component="td"
                          sx={{
                            p: 2,
                            fontSize: "0.875rem",
                            color: "text.primary",
                          }}
                        >
                          {row.gpu}
                        </Box>
                        <Box
                          component="td"
                          sx={{
                            p: 2,
                            fontSize: "0.875rem",
                            color: "text.secondary",
                          }}
                        >
                          {row.arch}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Paper>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: "block", lineHeight: 1.5, mt: 1 }}
              >
                {d["gpu_nvidia_driver_note"] || ""}
              </Typography>
            </Grid>

            {/* COLUMN 2: AMD Hardware Configurations */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 700, mb: 2, color: "text.primary" }}
              >
                {d["link_label_amd_gpus"] || "AMD GPUs"}
              </Typography>
              <Paper
                variant="outlined"
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  borderColor: "divider",
                  backgroundColor: "background.paper",
                  mb: 2,
                }}
              >
                <Box
                  component="table"
                  sx={{
                    width: "100%",
                    borderCollapse: "collapse",
                    textAlign: "left",
                  }}
                >
                  <Box
                    component="thead"
                    sx={{
                      backgroundColor: "action.hover",
                      borderBottom: "1px solid",
                      borderColor: "divider",
                    }}
                  >
                    <tr>
                      <Box
                        component="th"
                        sx={{
                          p: 2,
                          fontWeight: 600,
                          fontSize: "0.875rem",
                          color: "text.primary",
                          width: "50%",
                        }}
                      >
                        {d["gpu_table_label_gpu"] || "GPU"}
                      </Box>
                      <Box
                        component="th"
                        sx={{
                          p: 2,
                          fontWeight: 600,
                          fontSize: "0.875rem",
                          color: "text.primary",
                          width: "50%",
                        }}
                      >
                        {d["gpu_table_label_architecture"] || "Architecture"}
                      </Box>
                    </tr>
                  </Box>
                  <Box component="tbody">
                    <tr
                      style={{
                        backgroundColor:
                          "var(--mui-palette-action-selected, rgba(0,0,0,0.04))",
                      }}
                    >
                      <Box
                        component="td"
                        colSpan={2}
                        sx={{
                          p: 2,
                          fontWeight: 700,
                          fontSize: "0.875rem",
                          color: "primary.main",
                          borderBottom: "1px solid",
                          borderColor: "divider",
                        }}
                      >
                        {d["gpu_table_group_tested"] || "Tested for serving"}
                      </Box>
                    </tr>
                    {GPU_AMD_TESTED_ROWS.map((row, idx) => (
                      <Box
                        component="tr"
                        key={`amd-test-${idx}`}
                        sx={{
                          borderBottom: "1px solid",
                          borderColor: "divider",
                          "&:hover": { backgroundColor: "action.hover" },
                        }}
                      >
                        <Box
                          component="td"
                          sx={{
                            p: 2,
                            fontSize: "0.875rem",
                            color: "text.primary",
                          }}
                        >
                          {row.gpu}
                        </Box>
                        <Box
                          component="td"
                          sx={{
                            p: 2,
                            fontSize: "0.875rem",
                            color: "text.secondary",
                          }}
                        >
                          {row.arch}
                        </Box>
                      </Box>
                    ))}
                    <tr
                      style={{
                        backgroundColor:
                          "var(--mui-palette-action-selected, rgba(0,0,0,0.04))",
                      }}
                    >
                      <Box
                        component="td"
                        colSpan={2}
                        sx={{
                          p: 2,
                          fontWeight: 700,
                          fontSize: "0.875rem",
                          color: "secondary.main",
                          borderBottom: "1px solid",
                          borderColor: "divider",
                          pt: 3,
                        }}
                      >
                        {d["gpu_table_group_compatible"] ||
                          "Known compatible for development"}
                      </Box>
                    </tr>
                    {GPU_AMD_COMPATIBLE_ROWS.map((row, idx) => (
                      <Box
                        component="tr"
                        key={`amd-comp-${idx}`}
                        sx={{
                          borderBottom:
                            idx === GPU_AMD_COMPATIBLE_ROWS.length - 1
                              ? "none"
                              : "1px solid",
                          borderColor: "divider",
                          "&:hover": { backgroundColor: "action.hover" },
                        }}
                      >
                        <Box
                          component="td"
                          sx={{
                            p: 2,
                            fontSize: "0.875rem",
                            color: "text.primary",
                          }}
                        >
                          {row.gpu}
                        </Box>
                        <Box
                          component="td"
                          sx={{
                            p: 2,
                            fontSize: "0.875rem",
                            color: "text.secondary",
                          }}
                        >
                          {row.arch}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Paper>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: "block", lineHeight: 1.5, mt: 1 }}
              >
                {d["gpu_amd_driver_note"] || ""}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
