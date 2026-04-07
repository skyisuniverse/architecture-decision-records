import { Box, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        <Box>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Resource Explosion
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                <Link 
                    href="https://rd-center.vercel.app/spacex/mars/compressing-mars-terraforming-from-100000-to-10-years"
                    color="inherit"
                    target="_blank"
                    sx={{ marginBottom: 2 }}
                    >
                    Compressing Mars Terraforming from 100,000+ to 10 years
                </Link>
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                - Resource Explosion (Years 3-4): Swarms of trillions of nanobots mine regolith for water 
                (from hydrated minerals), oxygen (via electrolysis), and methane fuel (Sabatier reaction 
                enhanced by nano-catalysts). Self-replication turns a single lander into planetary-scale 
                factories, producing habitats, solar farms, and propellant depots. Quantum AI simulates and 
                optimizes extraction, yielding 99% efficiency with zero waste.
            </Typography>
        </Box>
    )
}