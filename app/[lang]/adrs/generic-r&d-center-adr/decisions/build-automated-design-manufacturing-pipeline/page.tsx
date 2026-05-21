// app/[lang]/adrs/generic-r&d-center-adr/decisions/build-automated-design-manufacturing-pipeline/page.tsx

"use client";
import { ADRHeader } from "@/app/[lang]/components/ADRHeader";
import { Divider, Grid } from "@mui/material";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import {
  DesignToManufacturingPipeline,
  DesignToManufacturingProducts,
} from "./design-manufacturing-pipeline";
import { useNavigation } from "@/app/[lang]/contexts/navigation-context";

export default function Page() {
  const { localize, decisionDict: dict } = useNavigation();

  return (
    <>
      <ADRHeader />
      <Box>
        <Typography variant="body1" gutterBottom>
          {dict["build-automated-design-manufacturing-pipeline.intro1"]}
        </Typography>

        <Grid container spacing={3}>
          {DesignToManufacturingPipeline.map((item) => (
            <Grid key={item.href} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  height: "100%",
                  transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 8,
                  },
                }}
              >
                <CardActionArea
                  component={Link}
                  href={localize(item.href)}
                  sx={{ height: "100%" }}
                >
                  <CardContent
                    sx={{
                      p: 3,
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        fontWeight: 500,
                        color: "text.primary",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="body1" gutterBottom marginTop={5}>
          {dict["build-automated-design-manufacturing-pipeline.intro2"]}
        </Typography>

        <Grid container spacing={3}>
          {DesignToManufacturingProducts.map((item) => (
            <Grid key={item.href} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  height: "100%",
                  transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 8,
                  },
                }}
              >
                <CardActionArea
                  component={Link}
                  href={localize(item.href)}
                  sx={{ height: "100%" }}
                >
                  <CardContent
                    sx={{
                      p: 3,
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        fontWeight: 500,
                        color: "text.primary",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="body1" gutterBottom marginTop={5}>
          {dict["build-automated-design-manufacturing-pipeline.etc"]}
        </Typography>

        <Divider />

        <Typography variant="h6" gutterBottom marginTop={5}>
          {dict["build-automated-design-manufacturing-pipeline.manual-flow"]}
        </Typography>

        <Typography variant="h6" gutterBottom marginTop={5}>
          {dict["build-automated-design-manufacturing-pipeline.agentic-flow"]}
        </Typography>

        <Divider />

        <Typography variant="h6" gutterBottom marginTop={5}>
          {dict["build-automated-design-manufacturing-pipeline.manual-flow"]}
        </Typography>

        <Typography variant="body1" gutterBottom marginTop={5}>
          {
            dict[
              "build-automated-design-manufacturing-pipeline.manual-grok-cad"
            ]
          }
        </Typography>

        <Typography variant="body1" gutterBottom marginTop={5}>
          {
            dict[
              "build-automated-design-manufacturing-pipeline.manual-starship"
            ]
          }
        </Typography>

        <Typography variant="body1" gutterBottom marginTop={5}>
          {dict["build-automated-design-manufacturing-pipeline.manual-chip"]}
        </Typography>

        <Typography variant="body1" gutterBottom marginTop={5}>
          {
            dict[
              "build-automated-design-manufacturing-pipeline.manual-simulation"
            ]
          }
        </Typography>

        <Typography variant="body1" gutterBottom marginTop={5}>
          {
            dict[
              "build-automated-design-manufacturing-pipeline.manual-manufacturing"
            ]
          }
        </Typography>

        <Typography variant="body1" gutterBottom marginTop={5}>
          {
            dict[
              "build-automated-design-manufacturing-pipeline.manual-assemble"
            ]
          }
        </Typography>

        <Divider />

        <Typography variant="h6" gutterBottom marginTop={5}>
          {dict["build-automated-design-manufacturing-pipeline.agentic-flow"]}
        </Typography>

        <Typography variant="body1" gutterBottom marginTop={5}>
          {dict["build-automated-design-manufacturing-pipeline.agentic-prompt"]}
        </Typography>

        <Typography variant="body1" gutterBottom marginTop={5}>
          {dict["build-automated-design-manufacturing-pipeline.agentic-watch"]}
        </Typography>

        <Typography variant="body1" gutterBottom marginTop={5}>
          {dict["build-automated-design-manufacturing-pipeline.agentic-get"]}
        </Typography>
      </Box>
    </>
  );
}
