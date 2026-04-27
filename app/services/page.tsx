"use client";
import Image from "next/image";
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
import { itemData } from "./services-list";

export default function ServicesPage() {
  const theme = useTheme();

  const isXl = useMediaQuery(theme.breakpoints.up("xl"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const cols = isXl ? 6 : isLg ? 5 : isMd ? 4 : 3;

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 6, md: 8 },
      }}
    >
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            mb: 1,
          }}
        >
          Services
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ textAlign: "center", maxWidth: 600, mx: "auto" }}
        >
          Explore our services
        </Typography>
      </Box>

      <ImageList
        variant="masonry"
        cols={cols}
        gap={16}
        sx={{
          width: "100%",
          "& .MuiImageListItem-root": {
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          },
        }}
      >
        {itemData.map((item, index) => {
          const imageSrc = `/images/services/${item.slug}.jpg`;

          return (
            <ImageListItem
              key={item.slug}
              sx={{
                "& img": {
                  transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                },
                "&:hover img": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Link
                href={`/services/${item.slug}`}
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Image
                  src={imageSrc}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 280px"
                  priority={index < 3}
                  loading={index < 3 ? "eager" : "lazy"}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                  // Placeholder logic (exactly like Products page)
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/adr-placeholder.png";
                  }}
                  unoptimized
                />
              </Link>
            </ImageListItem>
          );
        })}
      </ImageList>
    </Container>
  );
}