import { ADRHeader } from '@/app/components/ADRHeader';
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
                    5. Self-Replication and Scaling Mechanisms
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    To build something as large as Starship, nanobots must multiply exponentially.
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Hierarchical Assembly Protocols: Transition from nano to macro scales seamlessly. Breakthrough: Multi-level systems where nanobots build micro-bots, which build macro-components, with interfaces for energy and data transfer.
                </Typography>
            </Box>
        </>
    )
}