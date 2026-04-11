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
                    1. Preparation and Feedstock Acquisition
                </Typography>

                {/* <Typography sx={{ marginBottom: 2 }}>
                    Assembly at atomic scales is energy-intensive.
                </Typography> */}

                <Typography sx={{ marginBottom: 2 }}>
                    - Design Input: Upload a digital blueprint of the Starship into an AI 
                    overseer. This model includes every detail: the booster's 33 Raptor engines, 
                    the ship's heat shield tiles (made from advanced ceramics), cryogenic tanks 
                    for liquid methane and oxygen, avionics, and structural reinforcements. The 
                    AI optimizes for MNT, breaking the design into modular atomic "recipes."
                </Typography>
            </Box>
        </>
    )
}