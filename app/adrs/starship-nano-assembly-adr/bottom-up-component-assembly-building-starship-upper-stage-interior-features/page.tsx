import { Box, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        <Box>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Building the Starship Upper Stage: Interior Features
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
                - Interior Features: For crewed variants, bots could furnish habitats: assembling bunks, 
                life support systems (e.g., oxygen recyclers from catalytic membranes), and even food 
                printers from molecular extruders.
            </Typography>
        </Box>
    )
}