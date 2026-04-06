import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        
    <Box>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Perfect Error Correction, Reversibility, and Self-Repair
        </Typography>
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
            6. Perfect Error Correction, Reversibility, and Self-Repair
        </Typography>

        <Typography sx={{ marginBottom: 2 }}>
            - Breakthrough needed: Atomic-scale error detection/correction (including radiation damage or thermal noise) with fully reversible operations and self-repair nanites embedded in every bot and final structure.
        </Typography>

        <Typography sx={{ marginBottom: 2 }}>
            - Why required: Zero-defect foundations, flame trenches, and deluge systems are mandatory for Starship safety; any error in soft coastal soil must be instantly fixed without downtime.
        </Typography>

        <Typography sx={{ marginBottom: 2 }}>
            - Status (2026): Theoretical only; current systems have high error rates.
        </Typography>
    </Box>
    
    )
}