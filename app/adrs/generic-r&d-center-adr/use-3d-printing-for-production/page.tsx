'use client';
import { ADRHeader } from '@/app/components/ADRHeader';
import { Grid, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';

export default function Page() {
    // const NanoAssemblableDomains = [
    //     {
    //         title: 'Instantly Reusable Launchpad',
    //         href: '/adrs/instantly-reusable-launchpad-adr',
    //     },
    //     {
    //         title: 'Starship Nano-Assembly',
    //         href: '/adrs/starship-nano-assembly-adr',
    //     },
    //     {
    //         title: 'Nano-Assembled Mechazilla',
    //         href: '/adrs/nano-assembled-mechazilla-adr',
    //     },
    //     {
    //         title: 'Photonic chips',
    //         href: '/adrs/photonic-computing-adr',
    //     },
    //     {
    //         title: 'Neuromorphic chips',
    //         href: '/adrs/neuromorphic-computing-adr',
    //     },
    //     {
    //         title: 'Quantum chips',
    //         href: '/adrs/quantum-computing-adr',
    //     },
    // ];
    return(
        <>
            <ADRHeader />
            <Box>
                <Typography variant="body1" gutterBottom>
                    Use 3D-Printing for production
                </Typography>

                <Grid container spacing={3}>
                    {/* {NanoAssemblableDomains.map((item) => (
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
                                    href={item.href}
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
                    ))} */}
                </Grid>                
            </Box>
        </>
    )
}