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
                    5. Near-100% Efficient Ambient Energy Harvesting and Storage
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Breakthrough needed: Molecular-scale solar photovoltaic arrays, chemical fuel cells, or thermoelectric engines that convert sunlight, soil organics, water gradients, or air molecules into mechanical/chemical work at thermodynamic near-perfection (90–99+% efficiency), with on-board storage (e.g., H₂/O₂ micro-reservoirs).
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Why required: Swarms must operate indefinitely underground or submerged without external power, powering mechanosynthesis during replication and construction.
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Status (2026): Lab-scale nanoscale energy harvesters (piezo/tribo/solar) exist but at {'<<'}1% efficiency for useful work.
                </Typography>
            </Box>
        </>
    )
}