import { Box, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        <Box>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Completion and Launch Readiness (Super Heavy Booster): Scalability
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

            <Typography sx={{ marginBottom: 2 }}>
                - Scalability: This tech could enable mass production: replicate the process for 
                fleets of Starships, or even assemble them in space using asteroid-derived materials.
            </Typography>
        </Box>
    )
}