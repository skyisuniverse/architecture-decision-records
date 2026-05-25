// // app/[lang]/adrs/llm-training-adr/decisions/use-cases/page.tsx

// import type { Locale } from "@/i18n-config";
// import { ADRHeader } from "@/app/[lang]/components/ADRHeader";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid"; // MUI v7 optimized import
// import Button from "@mui/material/Button";
// import Chip from "@mui/material/Chip";
// import Stack from "@mui/material/Stack";
// import Divider from "@mui/material/Divider";
// import LaunchIcon from "@mui/icons-material/Launch";

// interface UseCaseItem {
//   title: string;
//   description: string;
//   badges: string[];
//   link: string;
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
//     console.warn(`Could not load decision dictionary for use-cases`);
//   }

//   // Resolve localized headers
//   const sectionTitleUseCases = d["section_title_use_cases"] || "Use Cases";
//   const sectionTitleAgenticAi = d["section_title_agentic_ai"] || "Agentic AI";
//   const btnExample = d["btn_example"] || "Example";

//   // Map primary baseline solutions from localized dictionary parameters
//   const BASE_USE_CASES: UseCaseItem[] = [
//     {
//       title: d["code-generation_title"] || "Code Generation (Coding Agent)",
//       description: d["code-generation_desc"] || "",
//       badges: [
//         d["code-generation_badge_1"],
//         d["code-generation_badge_2"],
//       ].filter(Boolean),
//       link: "https://modular.com",
//     },
//     {
//       title: d["image-generation_title"] || "Image Generation",
//       description: d["image-generation_desc"] || "",
//       badges: [
//         d["image-generation_badge_1"],
//         d["image-generation_badge_2"],
//       ].filter(Boolean),
//       link: "https://modular.com",
//     },
//     {
//       title: d["video-generation_title"] || "Video Generation",
//       description: d["video-generation_desc"] || "",
//       badges: [
//         d["video-generation_badge_1"],
//         d["video-generation_badge_2"],
//       ].filter(Boolean),
//       link: "https://modular.com",
//     },
//     {
//       title: d["text-to-speech_title"] || "Text to Audio (Text-to-Speech)",
//       description: d["text-to-speech_desc"] || "",
//       badges: [d["text-to-speech_badge_1"], d["text-to-speech_badge_2"]].filter(
//         Boolean,
//       ),
//       link: "https://modular.com",
//     },
//     {
//       title: d["agentic-ai-core_title"] || "Agentic AI",
//       description: d["agentic-ai-core_desc"] || "",
//       badges: [
//         d["agentic-ai-core_badge_1"],
//         d["agentic-ai-core_badge_2"],
//       ].filter(Boolean),
//       link: "https://modular.com",
//     },
//     {
//       title: d["custom-models_title"] || "Custom Models",
//       description: d["custom-models_desc"] || "",
//       badges: [d["custom-models_badge_1"], d["custom-models_badge_2"]].filter(
//         Boolean,
//       ),
//       link: "https://modular.com",
//     },
//   ];

//   // Map auxiliary specialized agent workflows from localized dictionary parameters
//   const AGENTIC_AI_USE_CASES: UseCaseItem[] = [
//     {
//       title: d["workflow-automation_title"] || "Workflow Automation",
//       description: d["workflow-automation_desc"] || "",
//       badges: [
//         d["workflow-automation_badge_1"],
//         d["workflow-automation_badge_2"],
//       ].filter(Boolean),
//       link: "https://modular.com",
//     },
//     {
//       title: d["ai-coding-agents_title"] || "AI Coding Agents",
//       description: d["ai-coding-agents_desc"] || "",
//       badges: [
//         d["ai-coding-agents_badge_1"],
//         d["ai-coding-agents_badge_2"],
//       ].filter(Boolean),
//       link: "https://modular.com",
//     },
//     {
//       title: d["voice-to-action_title"] || "Voice to Action Agents",
//       description: d["voice-to-action_desc"] || "",
//       badges: [
//         d["voice-to-action_badge_1"],
//         d["voice-to-action_badge_2"],
//       ].filter(Boolean),
//       link: "https://modular.com",
//     },
//     {
//       title: d["on-device-agents_title"] || "On-device Agents",
//       description: d["on-device-agents_desc"] || "",
//       badges: [
//         d["on-device-agents_badge_1"],
//         d["on-device-agents_badge_2"],
//       ].filter(Boolean),
//       link: "https://modular.com",
//     },
//     {
//       title:
//         d["multi-agent-orchestration_title"] || "Multi-agent Orchestration",
//       description: d["multi-agent-orchestration_desc"] || "",
//       badges: [
//         d["multi-agent-orchestration_badge_1"],
//         d["multi-agent-orchestration_badge_2"],
//       ].filter(Boolean),
//       link: "https://modular.com",
//     },
//   ];

//   // Reusable sub-rendering block for uniform UI styles
//   const renderGridItems = (dataList: UseCaseItem[]) =>
//     dataList.map((item, index) => (
//       <Grid size={{ xs: 12, md: 6 }} key={index}>
//         <Paper
//           elevation={0}
//           variant="outlined"
//           sx={{
//             p: 4,
//             height: "100%",
//             borderRadius: 3,
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "space-between",
//             backgroundColor: "background.paper",
//             borderColor: "divider",
//             transition: "transform 0.2s, box-shadow 0.2s",
//             "&:hover": {
//               transform: "translateY(-4px)",
//               boxShadow: 3,
//             },
//           }}
//         >
//           <Box>
//             <Typography
//               component="h2"
//               variant="h5"
//               sx={{ fontWeight: 600, mb: 1.5, color: "text.primary" }}
//             >
//               {item.title}
//             </Typography>

//             <Stack
//               direction="row"
//               spacing={1}
//               flexWrap="wrap"
//               useFlexGap
//               sx={{ mb: 2.5 }}
//             >
//               {item.badges.map((badge, bIndex) => (
//                 <Chip
//                   key={bIndex}
//                   label={badge}
//                   size="small"
//                   color="primary"
//                   variant="outlined"
//                   sx={{ fontWeight: 500, borderRadius: 1 }}
//                 />
//               ))}
//             </Stack>

//             <Typography
//               variant="body2"
//               color="text.secondary"
//               sx={{ lineHeight: 1.7, mb: 3 }}
//             >
//               {item.description}
//             </Typography>
//           </Box>

//           <Box sx={{ mt: "auto", pt: 1 }}>
//             <Button
//               component="a"
//               href={item.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               variant="outlined"
//               color="secondary"
//               size="small"
//               endIcon={<LaunchIcon sx={{ fontSize: 16 }} />}
//               sx={{
//                 borderRadius: 2,
//                 textTransform: "none",
//                 fontWeight: 600,
//               }}
//             >
//               {btnExample}
//             </Button>
//           </Box>
//         </Paper>
//       </Grid>
//     ));

//   return (
//     <>
//       <ADRHeader />
//       <Box
//         component="main"
//         sx={{
//           p: 0,
//           m: 0,
//           backgroundColor: "background.default",
//           minHeight: "100vh",
//           py: 4,
//         }}
//       >
//         <Container
//           maxWidth="lg"
//           disableGutters
//           sx={{ m: 0, ml: 0, mr: 0, px: 0 }} // Cleared 40px padding offset values completely
//         >
//           {/* Primary Solutions Layout */}
//           <Grid container spacing={4} sx={{ mb: 6 }}>
//             {renderGridItems(BASE_USE_CASES)}
//           </Grid>

//           {/* Visual Structural Divider Breakdown */}
//           <Box sx={{ my: 6 }}>
//             <Divider sx={{ borderBottomWidth: 2 }} />
//           </Box>

//           {/* Sub-Section Headline */}
//           <Typography
//             component="h2"
//             variant="h4"
//             sx={{ fontWeight: 700, mb: 4, color: "text.primary" }}
//           >
//             {sectionTitleAgenticAi}
//           </Typography>

//           {/* Agentic Framework Layout */}
//           <Grid container spacing={4}>
//             {renderGridItems(AGENTIC_AI_USE_CASES)}
//           </Grid>
//         </Container>
//       </Box>
//     </>
//   );
// }

// app/[lang]/adrs/llm-training-adr/decisions/use-cases/page.tsx

import type { Locale } from "@/i18n-config";
import { ADRHeader } from "@/app/[lang]/components/ADRHeader";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid"; // MUI v7 optimized import
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import LaunchIcon from "@mui/icons-material/Launch";

interface UseCaseItem {
  title: string;
  description: string;
  badges: string[];
  link: string;
}

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
    console.warn(`Could not load decision dictionary for use-cases`);
  }

  // Resolve localized headers
  const sectionTitleUseCases = d["section_title_use_cases"] || "Use Cases";
  const sectionTitleAgenticAi = d["section_title_agentic_ai"] || "Agentic AI";
  const sectionTitleResources = d["section_title_resources"] || "Resources";
  const btnExample = d["btn_example"] || "Example";

  // Map primary baseline solutions from localized dictionary parameters
  const BASE_USE_CASES: UseCaseItem[] = [
    {
      title: d["code-generation_title"] || "Code Generation (Coding Agent)",
      description: d["code-generation_desc"] || "",
      badges: [
        d["code-generation_badge_1"],
        d["code-generation_badge_2"],
      ].filter(Boolean),
      link: "https://modular.com",
    },
    {
      title: d["image-generation_title"] || "Image Generation",
      description: d["image-generation_desc"] || "",
      badges: [
        d["image-generation_badge_1"],
        d["image-generation_badge_2"],
      ].filter(Boolean),
      link: "https://modular.com",
    },
    {
      title: d["video-generation_title"] || "Video Generation",
      description: d["video-generation_desc"] || "",
      badges: [
        d["video-generation_badge_1"],
        d["video-generation_badge_2"],
      ].filter(Boolean),
      link: "https://modular.com",
    },
    {
      title: d["text-to-speech_title"] || "Text to Audio (Text-to-Speech)",
      description: d["text-to-speech_desc"] || "",
      badges: [d["text-to-speech_badge_1"], d["text-to-speech_badge_2"]].filter(
        Boolean,
      ),
      link: "https://modular.com",
    },
    {
      title: d["agentic-ai-core_title"] || "Agentic AI",
      description: d["agentic-ai-core_desc"] || "",
      badges: [
        d["agentic-ai-core_badge_1"],
        d["agentic-ai-core_badge_2"],
      ].filter(Boolean),
      link: "https://modular.com",
    },
    {
      title: d["custom-models_title"] || "Custom Models",
      description: d["custom-models_desc"] || "",
      badges: [d["custom-models_badge_1"], d["custom-models_badge_2"]].filter(
        Boolean,
      ),
      link: "https://modular.com",
    },
  ];

  // Map auxiliary specialized agent workflows from localized dictionary parameters
  const AGENTIC_AI_USE_CASES: UseCaseItem[] = [
    {
      title: d["workflow-automation_title"] || "Workflow Automation",
      description: d["workflow-automation_desc"] || "",
      badges: [
        d["workflow-automation_badge_1"],
        d["workflow-automation_badge_2"],
      ].filter(Boolean),
      link: "https://modular.com",
    },
    {
      title: d["ai-coding-agents_title"] || "AI Coding Agents",
      description: d["ai-coding-agents_desc"] || "",
      badges: [
        d["ai-coding-agents_badge_1"],
        d["ai-coding-agents_badge_2"],
      ].filter(Boolean),
      link: "https://modular.com",
    },
    {
      title: d["voice-to-action_title"] || "Voice to Action Agents",
      description: d["voice-to-action_desc"] || "",
      badges: [
        d["voice-to-action_badge_1"],
        d["voice-to-action_badge_2"],
      ].filter(Boolean),
      link: "https://modular.com",
    },
    {
      title: d["on-device-agents_title"] || "On-device Agents",
      description: d["on-device-agents_desc"] || "",
      badges: [
        d["on-device-agents_badge_1"],
        d["on-device-agents_badge_2"],
      ].filter(Boolean),
      link: "https://modular.com",
    },
    {
      title:
        d["multi-agent-orchestration_title"] || "Multi-agent Orchestration",
      description: d["multi-agent-orchestration_desc"] || "",
      badges: [
        d["multi-agent-orchestration_badge_1"],
        d["multi-agent-orchestration_badge_2"],
      ].filter(Boolean),
      link: "https://modular.com",
    },
  ];

  // Map resources section content
  const RESOURCE_USE_CASES: UseCaseItem[] = [
    {
      title: d["model-library_title"] || "Model Library",
      description: d["model-library_desc"] || "",
      badges: [d["model-library_badge_1"], d["model-library_badge_2"]].filter(
        Boolean,
      ),
      link: "https://www.modular.com/models",
    },
  ];

  // Reusable sub-rendering block for uniform UI styles
  const renderGridItems = (dataList: UseCaseItem[]) =>
    dataList.map((item, index) => (
      <Grid size={{ xs: 12, md: 6 }} key={index}>
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
              component="h2"
              variant="h5"
              sx={{ fontWeight: 400, mb: 1.5, color: "text.primary" }}
            >
              {item.title}
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              flexWrap="wrap"
              useFlexGap
              sx={{ mb: 2.5 }}
            >
              {item.badges.map((badge, bIndex) => (
                <Chip
                  key={bIndex}
                  label={badge}
                  size="small"
                  color="primary"
                  variant="outlined"
                  sx={{ fontWeight: 100, borderRadius: 1 }}
                />
              ))}
            </Stack>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.7, mb: 3 }}
            >
              {item.description}
            </Typography>
          </Box>

          <Box sx={{ mt: "auto", pt: 1 }}>
            <Button
              component="a"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              color="secondary"
              size="small"
              endIcon={<LaunchIcon sx={{ fontSize: 16 }} />}
              sx={{
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 100,
              }}
            >
              {btnExample}
            </Button>
          </Box>
        </Paper>
      </Grid>
    ));

  return (
    <>
      <ADRHeader />
      <Box
        component="main"
        sx={{
          p: 0,
          m: 0,
          backgroundColor: "background.default",
          minHeight: "100vh",
          py: 4,
        }}
      >
        <Container
          maxWidth="lg"
          disableGutters
          sx={{ m: 0, ml: 0, mr: 0, px: 0 }}
        >
          {/* Main Section Headline */}
          <Typography
            component="h1"
            variant="h4"
            sx={{ fontWeight: 400, mb: 4, color: "text.primary" }}
          >
            {sectionTitleUseCases}
          </Typography>

          {/* Primary Solutions Layout */}
          <Grid container spacing={4} sx={{ mb: 6 }}>
            {renderGridItems(BASE_USE_CASES)}
          </Grid>

          {/* Divider 1 */}
          <Box sx={{ my: 6 }}>
            <Divider sx={{ borderBottomWidth: 2 }} />
          </Box>

          {/* Agentic AI Section */}
          <Typography
            component="h2"
            variant="h4"
            sx={{ fontWeight: 400, mb: 4, color: "text.primary" }}
          >
            {sectionTitleAgenticAi}
          </Typography>

          <Grid container spacing={4} sx={{ mb: 6 }}>
            {renderGridItems(AGENTIC_AI_USE_CASES)}
          </Grid>

          {/* Divider 2 */}
          <Box sx={{ my: 6 }}>
            <Divider sx={{ borderBottomWidth: 2 }} />
          </Box>

          {/* Resources Section */}
          <Typography
            component="h2"
            variant="h4"
            sx={{ fontWeight: 400, mb: 4, color: "text.primary" }}
          >
            {sectionTitleResources}
          </Typography>

          <Grid container spacing={4}>
            {renderGridItems(RESOURCE_USE_CASES)}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
