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
                        href="https://rd-center.vercel.app/nano-assembly/scientific-breakthroughs-for-nano-assembly"
                        color="inherit"
                        target="_blank"
                        sx={{ marginBottom: 2 }}
                        >
                        Scientific breakthroughs for Nano-Assembly
                    </Link>
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    Nano-Assembler Decision 1
                </Typography>
            </Box>
        </>
    )
}