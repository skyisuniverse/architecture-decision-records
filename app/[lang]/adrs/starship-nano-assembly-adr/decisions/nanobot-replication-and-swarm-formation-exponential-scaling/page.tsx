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
                    2. Nanobot Replication and Swarm Formation
                </Typography>

                {/* <Typography sx={{ marginBottom: 2 }}>
                    Assembly at atomic scales is energy-intensive.
                </Typography> */}

                <Typography sx={{ marginBottom: 2 }}>
                    - Exponential Scaling: The seed nanobots begin self-replicating using the 
                    feedstock. Each bot assembles copies of itself by precisely placing atoms to form 
                    stiff diamondoid structures (carbon-based lattices stronger than steel). This phase 
                    is exponential: starting with millions, the swarm could grow to trillions in hours, 
                    limited only by energy and material supply.
                </Typography>
            </Box>
        </>
    )
}