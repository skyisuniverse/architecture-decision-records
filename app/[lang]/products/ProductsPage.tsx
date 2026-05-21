"use client";
import {
  Box,
  Container,
  ImageList,
  ImageListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { useParams } from "next/navigation";
import { itemData } from "./products-list";
import { AdrImage } from "../components/ADRImage";

type Dictionary = Record<string, string>;

export default function ProductsPage({ dict }: { dict: Dictionary }) {
  const theme = useTheme();
  const { lang } = useParams() as { lang: string };
  const isXl = useMediaQuery(theme.breakpoints.up("xl"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const cols = isXl ? 6 : isLg ? 5 : isMd ? 4 : 3;

  const itemCount = itemData.length;
  const isLowDensity = itemCount >= 1 && itemCount <= 3;

  const getLocalizedHref = (href: string): string => {
    if (!href.startsWith("/")) href = "/" + href;
    if (href.startsWith(`/${lang}/`)) return href;
    return `/${lang}${href}`;
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        // px: { xs: 2, sm: 4, md: 0 },
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          mb: 4,
          flexShrink: 0,
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 100,
            textAlign: "center",
            mb: 1,
          }}
        >
          {dict.products}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ textAlign: "center", maxWidth: 600, mx: "auto" }}
        >
          {dict["products.subtitle"]}
        </Typography>
      </Box>

      {/* Dynamic Presenter Canvas Axis */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: isLowDensity ? "center" : "flex-start",
          justifyContent: "center",
          width: "100%",
          pb: isLowDensity ? { xs: 6, md: 8 } : 0,
        }}
      >
        {isLowDensity ? (
          /* ========================================================================= */
          /* 1. MATERIAL FEATURE HERO BLOCK (1 - 3 Items State)                        */
          /* ========================================================================= */
          <Box
            sx={{
              display: "flex",
              gap: 4,
              width: "100%",
              // Hard fixed-width ceilings to prevent cards from expanding horizontally
              maxWidth: itemCount === 1 ? 480 : itemCount === 2 ? 960 : 1280,
              mx: "auto",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              alignItems: "stretch",
              boxSizing: "border-box",
            }}
          >
            {itemData.map((item) => {
              const imageSrc = `/images/products/${item.slug}.jpg`;
              const localizedHref = getLocalizedHref(`/products/${item.slug}`);

              return (
                <Box
                  key={item.slug}
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      borderRadius: 3,
                      border: "1px solid",
                      borderColor: "divider",
                      backgroundColor: "background.paper",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                      overflow: "hidden", // Keeps the overall container box locked
                      transition:
                        "box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      "& img": {
                        transition:
                          "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      },
                      "&:hover": {
                        boxShadow: "0 12px 24px rgba(0,0,0,0.16)",
                        "& img": {
                          transform: "scale(1.05)", // Zooms the asset inside its framing
                        },
                      },
                    }}
                  >
                    <Link
                      href={localizedHref}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none",
                        color: "inherit",
                        width: "100%",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          p: { xs: 2, md: 4 }, // Structural card container cushioning padding
                          boxSizing: "border-box",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {/*
                          CRITICAL HOVER PROTECTION WRAPPER:
                          Isolates image zoom scale transformations from forcing card geometry expansions.
                        */}
                        <Box
                          sx={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden", // Locks dimensions cleanly so zoom bounds don't blow outward
                            borderRadius: 1.5,
                            "& img": {
                              maxWidth: "100%",
                              maxHeight: "45vh", // Limits vertical dimensions inside desktop frames
                              width: "auto", // Maintains natural aspect width
                              height: "auto", // Maintains natural aspect height
                              display: "block",
                              objectFit: "contain", // Rules out image magnification distortion or edge cropping
                            },
                          }}
                        >
                          <AdrImage
                            src={imageSrc}
                            alt={item.title}
                            width={item.width}
                            height={item.height}
                          />
                        </Box>
                      </Box>
                    </Link>
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mt: 2,
                      fontWeight: 500,
                      letterSpacing: "0.02em",
                      textAlign: "center",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        ) : (
          /* ========================================================================= */
          /* 2. EXISTING ORIGINAL IMAGE LIST (4+ Items State)                          */
          /* ========================================================================= */
          <ImageList
            variant="masonry"
            cols={cols}
            gap={16}
            sx={{
              width: "100%",
              margin: 0, // Eliminates displacement layout offsets
              "& .MuiImageListItem-root": {
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                transition: "box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  boxShadow: "0 12px 24px rgba(0,0,0,0.16)",
                },
              },
            }}
          >
            {itemData.map((item) => {
              const imageSrc = `/images/products/${item.slug}.jpg`;
              const localizedHref = getLocalizedHref(`/products/${item.slug}`);

              return (
                <ImageListItem
                  key={item.slug}
                  sx={{
                    "& img": {
                      transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    },
                    "&:hover img": {
                      transform: "scale(1.05)", // Original micro-zoom effect preserved natively
                    },
                  }}
                >
                  <Link
                    href={localizedHref}
                    style={{
                      display: "block",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <AdrImage
                      src={imageSrc}
                      alt={item.title}
                      width={item.width}
                      height={item.height}
                    />
                  </Link>
                </ImageListItem>
              );
            })}
          </ImageList>
        )}
      </Box>
    </Container>
  );
}
