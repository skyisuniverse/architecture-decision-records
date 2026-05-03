import { ADRHeader } from '@/app/[lang]/components/ADRHeader';
import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';

import { NanoAssemblableDomains, NanoAssemblablyTools } from './nano-assembly-for-production';

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const localize = (href: string): string => {
    if (href === '/') return `/${lang}`;
    if (!href.startsWith('/')) href = '/' + href;
    if (href.startsWith(`/${lang}/`)) return href;
    return `/${lang}${href}`;
  };

  return (
    <>
      <ADRHeader />
      <Box>
        <Typography variant="body1" gutterBottom>
          Use nano-assembly for production of:
        </Typography>

        <Grid container spacing={3}>
          {NanoAssemblableDomains.map((item) => (
            <Grid key={item.href} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  height: '100%',
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 8,
                  },
                }}
              >
                <CardActionArea
                  component={Link}
                  href={localize(item.href)}
                  sx={{ height: '100%' }}
                >
                  <CardContent sx={{ p: 3, height: '100%', display: 'flex', alignItems: 'center' }}>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        fontWeight: 500,
                        color: 'text.primary',
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
          with devices / tools:
        </Typography>

        <Grid container spacing={3}>
          {NanoAssemblablyTools.map((item) => (
            <Grid key={item.href} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  height: '100%',
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 8,
                  },
                }}
              >
                <CardActionArea
                  component={Link}
                  href={localize(item.href)}
                  sx={{ height: '100%' }}
                >
                  <CardContent sx={{ p: 3, height: '100%', display: 'flex', alignItems: 'center' }}>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        fontWeight: 500,
                        color: 'text.primary',
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
      </Box>
    </>
  );
}