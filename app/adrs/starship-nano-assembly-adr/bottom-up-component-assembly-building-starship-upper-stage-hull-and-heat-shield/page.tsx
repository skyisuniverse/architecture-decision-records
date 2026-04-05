import { Box, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        <Box>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Building the Starship Upper Stage: Hull and Heat Shield
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
                - Hull and Heat Shield: Similar to the booster, but with added reentry features. 
                Nanobots assemble the stainless steel body, then apply heat shield tiles—each a custom 
                ceramic composite (e.g., silicon carbide with boron additives) precisely shaped and bonded. 
                Tiles could self-heal via embedded repair bots.
            </Typography>
        </Box>
    )
}