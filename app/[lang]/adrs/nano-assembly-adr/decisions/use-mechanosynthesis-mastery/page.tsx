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
                    1. Fundamental Understanding of Nanoscale Physics and Chemistry
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    To build reliably at the atomic level, we need a deeper grasp of how matter behaves in the "mesoscopic" regime—bridging quantum weirdness and classical mechanics.
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Mechanosynthesis Mastery: Achieve controlled, positional chemical synthesis where tools mechanically guide atomic bonds, avoiding random collisions in solution chemistry. Today's chemistry relies on probabilistic reactions; MNT needs deterministic ones. Breakthrough: Demonstrating repeatable mechanosynthesis for complex molecules (e.g., diamondoid structures) using stiff, non-reactive tools to place atoms with sub-angstrom precision, solving issues like "sticky fingers" where atoms adhere uncontrollably.
                </Typography>
            </Box>
        </>
    )
}