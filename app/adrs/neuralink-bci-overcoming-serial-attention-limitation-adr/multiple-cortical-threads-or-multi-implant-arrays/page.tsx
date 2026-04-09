import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(  
        <Box>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Multiple cortical threads or multi-implant arrays
            </Typography>
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
                Multiple cortical threads (or future multi-implant arrays) simultaneously ingest raw 
                data streams from any source — live YouTube channels, X feeds, books, papers, podcasts.
            </Typography>
        </Box>
    )
}