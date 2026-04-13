'use client';
import { ADRHeader } from '@/app/components/ADRHeader';
import { Divider, Grid, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import { DesignToManufacturingPipeline, DesignToManufacturingProducts } from './design-manufacturing-pipeline';

export default function Page() {
    
    return(
        <>
            <ADRHeader />
            <Box>
                <Typography variant="body1" gutterBottom>
                    Automated pipeline from design to manufacturing could possibly include:
                </Typography>

                <Grid container spacing={3}>
                    {DesignToManufacturingPipeline.map((item) => (
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
                    ))}
                </Grid>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    and possibly enable automated production of products:
                </Typography>

                <Grid container spacing={3}>
                    {DesignToManufacturingProducts.map((item) => (
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
                    ))}
                </Grid>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    etc.
                </Typography>

                <Divider />

                <Typography variant="h6" gutterBottom marginTop={5}>
                    1. Manual flow
                </Typography>

                <Typography variant="h6" gutterBottom marginTop={5}>
                    2. Agentic flow
                </Typography>

                <Divider />

                <Typography variant="h6" gutterBottom marginTop={5}>
                    1. Manual flow
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Design 3D-Model of an object in Grok CAD {`>>`}
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Design 3D-Model of a Starship in Starship Forge-AI {`>>`}
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Design 3D-Model / Circuits / Die of a chip in Chip Design Tool  {`>>`}
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Define manufacturing process for Nano-Assembly / 3D-Printing {`>>`}
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Assemble physical object with Nano-Assembler / printed with  3D-Printer
                </Typography>

                <Divider />

                <Typography variant="h6" gutterBottom marginTop={5}>
                    2. Agentic flow
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Write a text-prompt {`>>`}
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Watch design of a 3D-Model of an object done in Grok CAD, 
                    Design 3D-Model / Circuits / Die of a chip in Chip Design Tool,
                    Definition (selection?) of manufacturing process for Nano-Assembly / 3D-Printing 
                    done in *** tool with AI-Agents, {`>>`}
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Get physical object assembled with Nano-Assembler / printed with 3D-Printer
                </Typography>
            </Box>
        </>
    )
}