import { Box, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        // <Typography sx={{ marginBottom: 2 }}>
        //     Use AI-Driven System Design
        // </Typography>

        <Box>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Fabrication of Stiff Diamondoid Molecular Machinery
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
                2. Fabrication of Stiff, Low-Friction Diamondoid (or Superior) Molecular Machinery
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                - Breakthrough needed: Reliable synthesis and assembly of rigid, vacuum-tight, low-friction diamondoid (or carbyne/graphene-hybrid) structures at the nanoscale, including molecular motors, bearings, gears, tooltips, and sensor arrays that function reliably in liquid or soil.
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                - Why required: Nanobots must withstand mechanical forces during excavation/transport while embedding active elements (phononic bandgaps, molecular pumps, vibration actuators) into the final Starbase structures. Soft DNA/protein machines (current state) would fail under load or in soil.
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                - Status (2026): Conceptual designs and small molecular machines exist; no diamondoid components.
            </Typography>
        </Box>
    )
}