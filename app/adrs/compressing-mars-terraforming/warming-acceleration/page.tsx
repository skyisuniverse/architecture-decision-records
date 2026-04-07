import { Box, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        <Box>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Warming Acceleration
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                <Link 
                    href="https://rd-center.vercel.app/spacex/mars/compressing-mars-terraforming-from-100000-to-10-years"
                    color="inherit"
                    target="_blank"
                    sx={{ marginBottom: 2 }}
                    >
                    Compressing Mars Terraforming from 100,000+ to 10 years
                </Link>
            </Typography>

            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Phase 1: Deployment and Rapid Warming (Years 1-3)
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                - Warming Acceleration (Years 1-2): Nanorods raise temperatures by 30-50 Kelvin (54-90°F) 
                within the first year, melting polar caps and subsurface permafrost to release ~10-20% of Mars' 
                frozen CO2 and water reserves. Breakthroughs like adaptive nanorods (self-adjusting shapes via 
                embedded quantum dots) amplify this to 100K+ via positive feedback: Released water vapor and CO2 create 
                natural greenhouse amplification, thickening the atmosphere from 6 millibars to 100-200 millibars 
                (enough for liquid water in lowlands). Orbital mirrors (nano-assembled reflective sails, kilometers wide) 
                focus sunlight on poles for targeted melting. Orbital mirrors (nano-assembled reflective sails, 
                kilometers wide) focus sunlight on poles for targeted melting.
            </Typography>
        </Box>
    )
}