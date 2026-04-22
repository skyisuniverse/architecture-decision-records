'use client';

import {
  Box,
  Typography,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Link from 'next/link';

const companies = [
  {
    title: 'SpaceX',
    href: '/companies/spacex',
    img: '/images/companies/Flight_3_Lift_Of.jpg',
  },
  {
    title: 'Tesla',
    href: '/companies/tesla',
    img: '/images/companies/14.jpg',
  },
  {
    title: 'xAI',
    href: '/companies/xai',
    img: '/images/companies/1.jpg',
  },
  {
    title: 'NeuraLink',
    href: '/companies/neuralink',
    img: '/images/companies/2.jpg',
  },
];

export default function CompaniesPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ py: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Companies
      </Typography>

      {/* ==================== VARIANT 1 (Recommended) ==================== */}
      {/* SpaceX full-width hero on top row + Tesla / xAI / NeuraLink in equal thirds below */}
      <ImageList
        sx={{ width: '100%', mb: .7 }}
        cols={1}
        rowHeight={isMobile ? 220 : 340}
      >
        <ImageListItem component={Link} href={companies[0].href}>
          <img
            src={companies[0].img}
            alt={companies[0].title}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
          <ImageListItemBar
            sx={{
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
            }}
            title={companies[0].title}
            position="bottom"
          />
        </ImageListItem>
      </ImageList>

      <ImageList
        sx={{ width: '100%' }}
        cols={isMobile ? 1 : 3}
        rowHeight={isMobile ? 180 : 220}
      >
        {companies.slice(1).map((item) => (
          <ImageListItem key={item.title} component={Link} href={item.href}>
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="bottom"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}