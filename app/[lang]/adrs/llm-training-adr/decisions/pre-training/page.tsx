// app/[lang]/adrs/llm-training-adr/decisions/pre-training/page.tsx

import type { Locale } from "@/i18n-config";
import { getDictionary } from "@/app/[lang]/components/WithDictionary";
import { ADRHeader } from "@/app/[lang]/components/ADRHeader";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid"; // MUI v7 optimized import

const DECISION_KEY = "pre-training";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;

  // Load colocated decision-specific dictionary
  let decisionDict: Record<string, string> = {};
  try {
    const decisionModule = await import(
      `../../decisions-dictionaries/${lang}.json`
    );
    decisionDict = decisionModule.default || decisionModule;
  } catch (err) {
    console.warn(`Could not load decision dictionary for ${DECISION_KEY}`);
  }

  // Extract needed translation values with fallbacks
  const labelWhat = decisionDict["label_what"] || "What";
  const labelWhy = decisionDict["label_why"] || "Why";
  const whatText = decisionDict[`${DECISION_KEY}_what`] || "";
  const whyText = decisionDict[`${DECISION_KEY}_why`] || "";

  return (
    <>
      <ADRHeader />
      <Box
        component="main"
        sx={{
          p: 0,
          m: 0,
          backgroundColor: "background.default",
        }}
      >
        <Container
          maxWidth="lg"
          disableGutters // Strips the default @media responsive padding
          sx={{
            m: 0,
            ml: 0,
            mr: 0,
            px: 0, // Aligns perfectly with the TopBar 40px layout
          }}
        >
          {/* Details Grid */}
          <Grid container spacing={4}>
            {/* What section */}
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

            {/* Why section */}
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
        </Container>
      </Box>
    </>
  );
}
