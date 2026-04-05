import { Box, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        // <Typography sx={{ marginBottom: 2 }}>
        //     Use AI-Driven System Design
        // </Typography>

        <Box>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Use AI-Driven System Design
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                <Link 
                    href="https://rd-center.vercel.app/nano-assembly/scientific-breakthroughs-for-nano-assembly"
                    color="inherit"
                    target="_blank"
                    sx={{ marginBottom: 2 }}
                    >
                    Scientific breakthroughs for Nano-Assembly
                </Link>
            </Typography>

            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                4. Computing and AI Breakthroughs
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                Designing and controlling MNT requires immense computational power.
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                - AI-Driven System Design: Automate the blueprinting of nanobot behaviors and assembly sequences.
                Breakthrough: Advanced AI (e.g., integrating machine learning with genetic algorithms) that designs
                self-replicating systems, optimizes for efficiency, and incorporates error correction codes,
                drawing from structural biology.
            </Typography>
        </Box>
    )
}