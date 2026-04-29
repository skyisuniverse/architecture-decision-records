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
                    5. Completion and Launch Readiness
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Post-Assembly: The nanobot swarm deactivates or disassembles itself, recycling 
                    into storage for future use. The finished Starship stands ready, potentially in a 
                    fraction of the time and cost of today's methods (e.g., weeks instead of months, with 
                    no supply chain dependencies).
                </Typography>
            </Box>
        </>
    )
}