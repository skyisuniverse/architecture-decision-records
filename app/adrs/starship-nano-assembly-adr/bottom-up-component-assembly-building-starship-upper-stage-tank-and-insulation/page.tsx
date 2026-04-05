import { Box, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        <Box>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Building the Starship Upper Stage: Tank and Insulation
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
                - Tank and Insulation: The massive fuel tanks are built with layered walls: inner 
                liners for cryogenic containment, insulation foams grown from polymer precursors, and 
                outer skins reinforced with carbon nanotubes for strength. Bots could embed sensors 
                directly into the material for real-time structural health monitoring.
            </Typography>
        </Box>
    )
}