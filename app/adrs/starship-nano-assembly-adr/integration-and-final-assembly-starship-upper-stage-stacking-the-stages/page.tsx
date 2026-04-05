import { Box, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        <Box>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Integration and Final Assembly (Starship Upper Stage): Stacking the Stages
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
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
                4. Integration and Final Assembly
            </Typography>

            {/* <Typography sx={{ marginBottom: 2 }}>
                Assembly at atomic scales is energy-intensive.
            </Typography> */}

            <Typography sx={{ marginBottom: 2 }}>
                - Stacking the Stages: Once components are ready, larger "macro-bots" 
                (assembled from nanobot clusters) lift and mate the Starship onto the booster. 
                Molecular bonding ensures a seamless join, stronger than mechanical clamps.
            </Typography>
        </Box>
    )
}