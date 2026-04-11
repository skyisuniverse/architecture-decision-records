import { ADRHeader } from '@/app/components/ADRHeader';
import { Box, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        <>
            <ADRHeader />
            <Box>
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

                <Typography sx={{ marginBottom: 2 }}>
                    - Stacking the Stages: Once components are ready, larger "macro-bots" 
                    (assembled from nanobot clusters) lift and mate the Starship onto the booster. 
                    Molecular bonding ensures a seamless join, stronger than mechanical clamps.
                </Typography>
            </Box>
        </>
    )
}