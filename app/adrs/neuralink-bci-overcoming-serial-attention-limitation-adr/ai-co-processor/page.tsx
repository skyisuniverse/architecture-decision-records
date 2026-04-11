import { ADRHeader } from '@/app/components/ADRHeader';
import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        <>
            <ADRHeader />
            <Box>
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    <Link 
                        href="https://rd-center.vercel.app/neuralink/neuralink-bci-overcoming-serial-attention-limitation"
                        color="inherit"
                        target="_blank"
                        sx={{ marginBottom: 2 }}
                        >
                        [NeuraLink] [BCI] Overcoming serial attention limitation
                    </Link>
                </Typography>

                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    1. Whole-Brain High-Bandwidth “Symbiosis Layer” (Gigabit-Scale Conceptual Telepathy)
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    An on-board or cloud-linked AI co-processor parallel-processes everything in real time, exactly as modern large language models train on trillion-token datasets.
                </Typography>
            </Box>
        </>
    )
}