import { Box, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        <Box>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Energy Abundance
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
                Assumptions and Breakthroughs Required:
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                This 10-year feat assumes:

                - MNT Mastery: Nanobots replicate without errors, scaling from grams to exatons in weeks.
                - Energy Abundance: Portable fusion or beamed solar power unlimited operations.
                - AI Supremacy: Quantum AGI predicts climate dynamics with 100% accuracy, avoiding tipping points.
                - Logistics: Fleets of 1,000+ Starships deliver initial seeds; in-space manufacturing handles the rest.
            </Typography>
        </Box>
    )
}