import { Box, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        <Box>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                ISRU Scaling and Atmosphere Building
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

            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Phase 2: ISRU Scaling and Atmosphere Building (Years 3-6)
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                Nanobots disassemble regolith at atomic scales, exponentially outperforming MOXIE 
                (e.g., producing tons of O2/hour vs. grams). Breakthroughs in bio-nano interfaces allow 
                hybrid systems: Nanobots fused with engineered microbes that photosynthesize under low light, 
                converting CO2 to O2 at rates 1,000x faster than Earth's cyanobacteria.
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                - Resource Explosion (Years 3-4): Swarms of trillions of nanobots mine regolith for water
                (from hydrated minerals), oxygen (via electrolysis), and methane fuel (Sabatier reaction 
                enhanced by nano-catalysts). Self-replication turns a single lander into planetary-scale 
                factories, producing habitats, solar farms, and propellant depots. Quantum AI simulates and 
                optimizes extraction, yielding 99% efficiency with zero waste.
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                - Atmospheric Engineering (Years 4-6): Introduce super-greenhouse gases 
                (e.g., nano-synthesized perfluorocarbons) for sustained warming, pushing 
                pressure to 300-500 millibars. Bio-nano microbes, deployed in billions, begin 
                oxygenation: Breakthrough genetic editing creates strains that thrive in the 
                warming environment, generating O2 layers and ozone for UV protection. Nanobots 
                seed artificial magnetospheres (via superconducting rings at Lagrange points) to 
                shield against solar wind, retaining the new atmosphere.
            </Typography>
        </Box>
    )
}