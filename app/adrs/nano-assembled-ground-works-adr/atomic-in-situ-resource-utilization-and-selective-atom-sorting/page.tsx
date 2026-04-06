import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        
    <Box>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Atomic In-Situ Resource Utilization (ISRU) and Selective Atom Sorting
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
            7. Atomic In-Situ Resource Utilization (ISRU) and Selective Atom Sorting
        </Typography>

        <Typography sx={{ marginBottom: 2 }}>
            - Breakthrough needed: Programmable molecular receptors and conveyor systems that selectively bind, transport, and sort every atom (Si, O, C, H, metals) from heterogeneous coastal regolith/water/air while discarding or repurposing contaminants.
        </Typography>

        <Typography sx={{ marginBottom: 2 }}>
            - Why required: Local sand becomes the entire diamondoid infrastructure — no imported materials.
        </Typography>
    </Box>
    
    )
}