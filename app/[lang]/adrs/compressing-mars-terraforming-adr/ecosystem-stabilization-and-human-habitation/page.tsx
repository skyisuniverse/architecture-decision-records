import { ADRHeader } from '@/app/[lang]/components/ADRHeader';
import { Box, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        <>
            <ADRHeader />
            <Box>
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
                    Phase 3: Ecosystem Stabilization and Human Habitation (Years 6-10)
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Biosphere Introduction (Years 6-8): Release engineered ecosystems: Nano-seeded algae and lichens form soil, 
                    while bio-nano insects pollinate. AI-directed nanobots terraform terrain—eroding canyons into fertile plains 
                    and creating rivers. Fusion-powered orbital lasers vaporize comets for water imports if needed, accelerating 
                    hydrological cycles.
                </Typography>
                
                <Typography sx={{ marginBottom: 2 }}>
                    - Full Integration (Years 8-10): Human settlements expand without suits in pressurized zones. 
                    Nanobots monitor and adjust: Repairing atmospheric leaks, balancing gases, and evolving species via 
                    directed evolution. By year 10, Mars achieves "minimal habitability"—global temperatures above freezing, 
                    oceans covering 10-20% of surface, and O2 levels at 5-10% (supplemental breathing gear needed outdoors, 
                    but viable for plants and hardy animals).
                </Typography>
            </Box>
        </>
    )
}