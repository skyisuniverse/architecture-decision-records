import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        
    <Box>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Use Nanoscale Energy Harvesting for Swarm Power
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
            <Link 
                href="https://rd-center.vercel.app/spacex/instantly-reusable-launchpad/scientific-breakthroughs-for-nano-assembled-launch-pad-for-starships"
                color="inherit"
                target="_blank"
                sx={{ marginBottom: 2 }}
                >
                Scientific breakthroughs for Instantly Reusable Launchpad
            </Link>
        </Typography>

        <Typography variant="h6" sx={{ marginBottom: 2 }}>
            5. Nanoscale Energy Harvesting for Swarm Power
        </Typography>

        <Typography sx={{ marginBottom: 2 }}>
            Swarms need ambient power without batteries.
        </Typography>

        <Typography sx={{ marginBottom: 2 }}>
            - High-Efficiency, Multi-Modal Harvesters: Current piezoelectric/triboelectric nanogenerators harvest vibrations; breakthroughs must achieve mW/cm³ from thrust vibrations, heat, or solar, using CNT-based systems. Integration with swarms for self-sustaining replication is key.
        </Typography>

        <Typography sx={{ marginBottom: 2 }}>
            - Quantum-Enhanced Harvesting: Advances in subwavelength conversion (e.g., 2D materials) for nuclear/chemical sources.
        </Typography>
    </Box>
    
    )
}