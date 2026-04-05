import { Box, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        <Box>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Building the Super Heavy Booster: Engines and Systems
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

            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                3. Bottom-Up Component Assembly
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                - Engines and Systems: Six Raptor engines (three sea-level, three vacuum-optimized) are 
                built in parallel. Avionics bays get populated with quantum chips and wiring harnesses grown 
                from conductive nanomaterials. Solar panels and batteries are assembled from photovoltaic 
                molecules and lithium-ion lattices.
            </Typography>
        </Box>
    )
}