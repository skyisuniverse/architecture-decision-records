import { Box, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        <Box>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Use Zero-Waste Recycling
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                <Link 
                    href="https://rd-center.vercel.app/spacex/nano-assembly-starship/starship-nano-assembly"
                    color="inherit"
                    target="_blank"
                    sx={{ marginBottom: 2 }}
                    >
                    Starship Nano-Assembly
                </Link>
            </Typography>

            {/* <Typography variant="h6" sx={{ marginBottom: 2 }}>
                6. Energy and Sustainability Advances
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                Assembly at atomic scales is energy-intensive.
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                - Zero-Waste Recycling: Disassemble and reuse materials at atomic level. Breakthrough: Reversible mechanosynthesis for deconstruction, enabling closed-loop manufacturing.
            </Typography> */}
        </Box>
    )
}