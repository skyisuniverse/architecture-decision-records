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
                    4. Computing and AI Breakthroughs
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    Designing and controlling MNT requires immense computational power.
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Quantum Computing for Simulations: Simulate molecular interactions for entire Starship designs at atomic fidelity. Current supercomputers can't handle the complexity. Breakthrough: Fault-tolerant quantum computers with millions of qubits, running algorithms to model mechanosynthesis pathways and predict emergent properties.
                </Typography>
            </Box>
        </>
    )
}