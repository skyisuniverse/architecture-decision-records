import { Box, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        <Box>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Use Materials Science Innovations
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
                3. Materials Science Innovations
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                MNT relies on "exotic" materials that don't exist yet for assemblers and products.
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                - Diamondoid and Stiff Nanostructures: Engineer ultra-rigid, low-friction materials (e.g., carbon-based diamondoids) for nanobot components to withstand thermal vibrations (Brownian motion). Breakthrough: Synthesis of large-scale diamondoid lattices via MNT itself, providing the stiffness needed for precise atomic placement without deformation.
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                - Self-Healing and Adaptive Materials: Develop nanomaterials that repair assembly errors autonomously. For Starship, this means heat shields or engines that self-correct defects. Breakthrough: Integration of smart polymers or nanocomposites that respond to stimuli (e.g., heat, light) for in-situ repairs, scaling from lab demos to industrial volumes.
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                - Novel Feedstock Processing: Efficiently extract and purify atoms from raw sources (e.g., air, soil) without energy waste. Breakthrough: Nanoscale refineries that disassemble molecules selectively, producing pure elemental streams for assembly.
            </Typography>
        </Box>
    )
}