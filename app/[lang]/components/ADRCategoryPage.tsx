'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

/** Reusable ADR Card (kept internal for now, exported if you need it elsewhere) */
const ADRCard = ({
  title,
  description,
  date,
  status,
  link,
}: {
  title: string;
  description: string;
  date: string;
  status: string;
  link: string;
}) => (
  <Link
    href={link}
    style={{ textDecoration: 'none', display: 'block', height: '100%' }}
  >
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: 8,
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="div">{title}</Typography>
        <Typography variant="body2" color="text.secondary">{description}</Typography>
      </CardContent>

      <Box
        sx={{
          px: 3,
          py: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid',
          borderColor: 'divider',
          bgcolor: 'background.paper',
        }}
      >
        <Typography variant="caption" sx={{ fontWeight: 500, color: 'text.secondary' }}>
          {date}
        </Typography>

        <Chip
          label={status}
          size="small"
          sx={{
            fontWeight: 600,
            textTransform: 'uppercase',
            fontSize: '0.7rem',
            ...(status === 'Draft' && {
              bgcolor: 'grey.300',
              color: 'grey.800',
            }),
          }}
        />
      </Box>
    </Card>
  </Link>
);

/**
 * Reusable ADR Category Page Component
 * All reusable logic moved here (app/components/)
 */
export function ADRCategoryPage({
  title,
  publishedDate,
  description,
  imageSrc,
  adrsList,
  children, // ← NEW: any optional markup between description and ADR list
}: {
  title: string;
  publishedDate: string;
  description: ReactNode;
  imageSrc?: string | StaticImport; // Next.js static import
  adrsList: any; // your SimulationToolAdrsList type
  children?: ReactNode;
}) {

  // Default placeholder image (place this file in your public folder)
  const defaultImageSrc = imageSrc || '/images/adr-placeholder.png';

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: { xs: 4, md: 5 },
        px: { xs: 2, md: 4 },
        pb: { xs: 12, md: 5 }, // prevents bottom nav overlap
      }}
    >
      {/* HERO SPLIT SECTION – Image left + Content right (top-aligned on desktop) */}
      <Grid
        container
        spacing={{ xs: 6, md: 5 }}
        alignItems="flex-start"
        sx={{ mb: { xs: 4, md: 5 } }}
      >
        {/* Image column */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              aspectRatio: { xs: '16 / 9', md: '4 / 3' },
              borderRadius: 3,
              overflow: 'hidden',
              boxShadow: 6,
            }}
          >
            <Image
              src={defaultImageSrc}
              alt={`${title} - Architecture Decision Records`}
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Grid>

        {/* Content column – always left-aligned */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Box sx={{ textAlign: 'left' }}>
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2.25rem', md: '2.75rem' },
                mb: 1,
              }}
            >
              {title}
            </Typography>

            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{
                mb: { xs: 2, md: 3 },
                fontWeight: 500,
              }}
            >
              {publishedDate}
            </Typography>

            {description}

          </Box>
        </Grid>
      </Grid>

      {/* OPTIONAL CUSTOM MARKUP SLOT – placed exactly between description and ADR list */}
      {children}

      {/* ADR LIST SECTION */}
      <Typography
        variant="h4"
        component="h2"
        sx={{
          mb: 4,
          fontWeight: 700,
          textAlign: 'left',
        }}
      >
        Architecture Decision Records
      </Typography>

      <Grid container spacing={{ xs: 3, md: 4 }}>
        {adrsList.map((adr: any) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            key={adr.link}
          >
            <ADRCard
              title={adr.title}
              description={adr.description}
              date={adr.date}
              status={adr.status}
              link={adr.link}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}