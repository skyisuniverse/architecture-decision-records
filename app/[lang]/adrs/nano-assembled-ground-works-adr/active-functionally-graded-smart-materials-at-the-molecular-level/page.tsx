import { ADRHeader } from '@/app/[lang]/components/ADRHeader';
import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        <>
            <ADRHeader />
            <Box>
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
                    8. Active, Functionally Graded Smart Materials at the Molecular Level
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Breakthrough needed: Atom-by-atom assembly of gradient structures (e.g., refractory inner surfaces + phonon-optimized cooling channels + outer load-bearing lattices with embedded sensors/actuators) that are self-healing and reconfigurable.
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Why required: The final Starbase structures (pads, berms, tank bases) must be “living” lattices far superior to concrete/steel.
                </Typography>
            </Box>
        </>
    )
}