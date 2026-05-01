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
                    - Novel Feedstock Processing: Efficiently extract and purify atoms from raw sources (e.g., air, soil) without energy waste. Breakthrough: Nanoscale refineries that disassemble molecules selectively, producing pure elemental streams for assembly.
                </Typography>
            </Box>
        </>
    )
}