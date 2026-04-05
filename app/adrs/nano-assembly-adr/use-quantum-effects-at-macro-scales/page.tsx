import { Box, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        <Box>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Use Quantum Effects at Macro Scales
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
                1. Fundamental Understanding of Nanoscale Physics and Chemistry
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                To build reliably at the atomic level, we need a deeper grasp of how matter behaves in the "mesoscopic" regime—bridging quantum weirdness and classical mechanics.
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                - Quantum Effects at Macro Scales: Harness and control quantum phenomena (e.g., superposition, entanglement) in larger systems without decoherence. For Starship's materials, this means creating macroscopic quantum materials for ultra-strong alloys or sensors. Breakthrough: Room-temperature quantum coherence in nanomaterials, extending quantum dots or nanowires to bulk scales, perhaps via topological insulators.
            </Typography>
        </Box>
    )
}