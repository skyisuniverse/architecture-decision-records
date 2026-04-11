import { ADRHeader } from '@/app/components/ADRHeader';
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
                    10. Hardcoded Safety, Governance, and Kill-Switch Mechanisms
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Breakthrough needed: Inviolable broadcast kill-switches, environmental containment protocols, and global governance frameworks to prevent misuse or accidents.
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Why required: Any deployment at a launch site (or planetary scale) demands absolute reliability.
                </Typography>

                {/* <Typography sx={{ marginBottom: 2 }}>
                    
                </Typography> */}
            </Box>
        </>
    )
}