import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        
    <Box>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Safe, Programmable, Exponential Self-Replication with Termination
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
            3. Safe, Programmable, Exponential Self-Replication with Termination
        </Typography>

        <Typography sx={{ marginBottom: 2 }}>
            - Breakthrough needed: Controlled exponential replication (doubling in minutes) using local feedstock, with built-in broadcast “stop” signals, non-replicating “mature” mode, and absolute prevention of uncontrolled mutation or escape.
        </Typography>

        <Typography sx={{ marginBottom: 2 }}>
            - Why required: A seed canister must scale to trillions–quadrillions of bots in {'<'}2 hours to saturate a launch-pad volume. Uncontrolled replication would be catastrophic (gray-goo risk).
        </Typography>

        <Typography sx={{ marginBottom: 2 }}>
            - Status (2026): DNA-based self-replicating nanostructures demonstrated in labs (limited, non-construction-capable); no mechanical nanorobot replication.
        </Typography>
    </Box>
    
    )
}