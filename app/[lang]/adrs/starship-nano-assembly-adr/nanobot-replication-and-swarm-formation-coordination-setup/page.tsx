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
                    - Coordination Setup: The swarm organizes into specialized teams via wireless 
                    quantum entanglement or chemical signaling. An AI "conductor" oversees the process, 
                    assigning tasks and monitoring for errors (e.g., using built-in quantum error 
                    correction to counter thermal vibrations).
                </Typography>
            </Box>
        </>
    )
}