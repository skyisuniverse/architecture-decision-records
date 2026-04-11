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
                    2. Advanced Manipulation and Imaging Tools
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    Current tools like atomic force microscopes (AFM) can move single atoms, but they're slow and limited to surfaces.
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Atomic-Resolution Imaging in Dynamic Environments: Improve imaging to visualize
                    and control reactions in real-time under ambient conditions (not just vacuum or cryo).
                    Breakthrough: Next-gen scanning tunneling microscopy (STM) or electron microscopy with
                    femtosecond resolution, integrated with AI for interpreting noisy data, enabling
                    oversight of nanobot swarms during assembly.
                </Typography>
            </Box>
        </>
    )
}