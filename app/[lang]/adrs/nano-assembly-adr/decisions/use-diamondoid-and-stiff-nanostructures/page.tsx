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
                    3. Materials Science Innovations
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    MNT relies on "exotic" materials that don't exist yet for assemblers and products.
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - **Diamondoid and Stiff Nanostructures**: Engineer ultra-rigid, low-friction materials
                    (e.g., carbon-based diamondoids) for nanobot components to withstand thermal vibrations
                    (Brownian motion). Breakthrough: Synthesis of large-scale diamondoid lattices via MNT itself,
                    providing the stiffness needed for precise atomic placement without deformation.
                </Typography>
            </Box>
        </>
    )
}