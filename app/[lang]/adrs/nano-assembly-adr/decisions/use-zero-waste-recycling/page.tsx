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
                    6. Energy and Sustainability Advances
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    Assembly at atomic scales is energy-intensive.
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Zero-Waste Recycling: Disassemble and reuse materials at atomic level. Breakthrough: Reversible mechanosynthesis for deconstruction, enabling closed-loop manufacturing.
                </Typography>
            </Box>
        </>
    )
}