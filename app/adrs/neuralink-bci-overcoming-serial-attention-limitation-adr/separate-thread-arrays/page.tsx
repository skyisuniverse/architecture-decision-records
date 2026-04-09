import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        
    <Box>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Separate thread arrays
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
            2. Parallel Consciousness Threads via Multi-Region / Dual-Implant Architectures
        </Typography>

        <Typography sx={{ marginBottom: 2 }}>
            Separate thread arrays in prefrontal, parietal, temporal, and sensory 
            cortices run semi-independent “sub-consciousnesses.”
        </Typography>

        <Typography sx={{ marginBottom: 2 }}>
            One thread watches and deeply processes a physics lecture; another analyzes an X thread 
            on AI ethics; a third ingests a novel — all simultaneously and without interference.
        </Typography>
    </Box>
    
    )
}