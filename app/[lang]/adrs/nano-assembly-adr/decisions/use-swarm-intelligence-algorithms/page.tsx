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
                    - Swarm Intelligence Algorithms: Coordinate trillions of nanobots without central failure points. Breakthrough: Decentralized control systems using bio-inspired algorithms (e.g., ant colonies) or quantum entanglement for communication, ensuring synchronized assembly over large areas.
                </Typography>
            </Box>
        </>
    )
}