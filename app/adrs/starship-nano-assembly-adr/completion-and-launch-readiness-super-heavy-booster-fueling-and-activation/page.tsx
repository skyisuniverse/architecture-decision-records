import { Box, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        <Box>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Completion and Launch Readiness (Super Heavy Booster): Fueling and Activation
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
                5. Completion and Launch Readiness
            </Typography>

            {/* <Typography sx={{ marginBottom: 2 }}>
                Assembly at atomic scales is energy-intensive.
            </Typography> */}

            <Typography sx={{ marginBottom: 2 }}>
                - Fueling and Activation: With the structure complete, bots could even produce 
                and load propellants—synthesizing methane from carbon and hydrogen, and liquefying 
                oxygen from the air—directly into the tanks.
            </Typography>
        </Box>
    )
}