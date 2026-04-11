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
                        href="https://rd-center.vercel.app/nano-assembly/scientific-breakthroughs-for-nano-assembly"
                        color="inherit"
                        target="_blank"
                        sx={{ marginBottom: 2 }}
                        >
                        Scientific breakthroughs for Nano-Assembly
                    </Link>
                </Typography>

                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    7. Bio-Nano Interfaces and Safety
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    While not core to Starship, these ensure viability.
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Safety Protocols: Prevent "gray goo" scenarios. Breakthrough: Intrinsic kill switches and containment fields in nanobots.
                </Typography>
            </Box>
        </>
    )
}