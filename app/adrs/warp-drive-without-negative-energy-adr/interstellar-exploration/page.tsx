import { ADRHeader } from '@/app/components/ADRHeader';
import { Box, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        <>
            <ADRHeader />
            <Box>
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    <Link 
                        href="https://rd-center.vercel.app//theoretical-physics/warp-drive/warp-drive-without-negative-energy"
                        color="inherit"
                        target="_blank"
                        sx={{ marginBottom: 2 }}
                        >
                        Warp Drive Without Negative Energy
                    </Link>
                </Typography>

                <Typography variant="h6" gutterBottom marginTop={5}>
                    Interstellar Exploration
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    For exoplanets, superluminal-effective models could cut journeys to nearby stars 
                    like Alpha Centauri (4.3 light-years away, over 20,000 years with current tech) 
                    to weeks or months from Earth's perspective, or even shorter onboard due to relativity. 
                    This opens doors to studying habitable worlds in systems like Proxima Centauri, 
                    potentially within a human lifetime. Further out, to the galactic center (26,000 light-years) 
                    or other galaxies, travel could become conceivable, enabling probes to distant black holes, 
                    nebulae, or even SETI searches for alien life.
                </Typography>
            </Box>
        </>
    )
}