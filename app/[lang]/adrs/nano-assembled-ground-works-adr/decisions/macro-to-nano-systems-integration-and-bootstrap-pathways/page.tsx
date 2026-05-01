import { ADRHeader } from '@/app/[lang]/components/ADRHeader';
import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        <>
            <ADRHeader />
            <Box>
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    <Link 
                        href="https://rd-center.vercel.app/spacex/nanoassembled-ground-works/scientific-breakthroughs-for-ground-works-with-nanobots-at-starbase"
                        color="inherit"
                        target="_blank"
                        sx={{ marginBottom: 2 }}
                        >
                        Scientific breakthroughs for ground works w/ Nanobots Swarms @ Starbase
                    </Link>
                </Typography>

                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    9. Macro-to-Nano Systems Integration and Bootstrap Pathways
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Breakthrough needed: Reliable seed fabrication (initial bots or nanofactories built via today’s tech) plus scaling pathways from lab prototypes to hectare-scale deployment.
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Why required: Starbase cannot start with existing macro equipment.
                </Typography>

                {/* <Typography sx={{ marginBottom: 2 }}>
                    
                </Typography> */}
            </Box>
        </>
    )
}