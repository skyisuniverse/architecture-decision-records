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
                    5. Self-Replication and Scaling Mechanisms
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    To build something as large as Starship, nanobots must multiply exponentially.
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Reliable Self-Replication: Create nanobots that copy themselves with near-zero error rates. Biology does this via DNA; MNT needs synthetic equivalents. Breakthrough: Programmable replicators with built-in fidelity checks, using mechanosynthesis to assemble copies from feedstock, scaling from micrograms to tons without mutations.
                </Typography>
            </Box>
        </>
    )
}