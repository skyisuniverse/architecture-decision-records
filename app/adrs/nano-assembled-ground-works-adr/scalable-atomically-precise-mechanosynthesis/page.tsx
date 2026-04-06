import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        
    <Box>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Scalable Atomically Precise Mechanosynthesis
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
            <Link 
                href="https://rd-center.vercel.app/spacex/nanoassembled-ground-works/scientific-breakthroughs-for-ground-works-with-nanobots-at-starbase"
                color="inherit"
                target="_blank"
                sx={{ marginBottom: 2 }}
                >
                Scientific breakthroughs for ground works w/ Nanobots Swarms @ Starbase
            </Link>
        </Typography>

        <Typography variant="h6" sx={{ marginBottom: 2 }}>
            1. Scalable Atomically Precise Mechanosynthesis (APM) in Ambient Conditions
        </Typography>

        <Typography sx={{ marginBottom: 2 }}>
            - Breakthrough needed: Positional control of individual atoms/molecules (0.1 nm precision) at room temperature, in air, water, or soil, using multiple mechanosynthetic tooltips (e.g., carbon, silicon, hydrogen, oxygen) to form and break covalent bonds on demand — without relying on ultra-high vacuum or cryogenic temperatures.
        </Typography>

        <Typography sx={{ marginBottom: 2 }}>
            - Why required: Current STM/AFM demos manipulate single atoms on clean metal surfaces only. Starbase swarms must disassemble Si–O bonds in silt, sort atoms, and reassemble them into diamondoid lattices while operating in wet, contaminated, dynamic environments.
        </Typography>

        <Typography sx={{ marginBottom: 2 }}>
            - Status (2026): Theoretical (Drexler-style proposals); no scalable implementation.
        </Typography>
    </Box>
    
    )
}