import { ADRHeader } from '@/app/[lang]/components/ADRHeader';
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

                <Typography sx={{ marginBottom: 2 }}>
                    - Seed Nanobot Deployment: Introduce a small batch of "seed" 
                    assemblers—perhaps a few million nanobots, each about 100 nanometers in 
                    size, equipped with manipulator arms, sensors, and replication modules. 
                    These could be produced in a lab-scale nanofactory and transported to the 
                    assembly site (e.g., a launch pad or orbital platform).
                </Typography>
            </Box>
        </>
    )
}