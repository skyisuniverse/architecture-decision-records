import { Box, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        <Box>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Parallel Consciousness Threads
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
                Building on early patient data showing cognitive compartmentalization (e.g., 
                one implant user already multitasking pre-calc while controlling devices), 
                future Neuralink designs could deliberately create divided attention streams:                
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                Separate thread arrays in prefrontal, parietal, temporal, and sensory cortices 
                run semi-independent “sub-consciousnesses.”
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                One thread watches and deeply processes a physics lecture; another analyzes 
                an X thread on AI ethics; a third ingests a novel — all simultaneously and 
                without interference.
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                An overarching AI “conductor” layer stitches the parallel outputs into a 
                unified meta-awareness when you want to reflect. Musk has already signaled 
                the path: the first upgrade/dual-implant patient could appear as early as 
                2026, and he expects Neuralink recipients to eventually surpass all 
                unaugmented humans in reaction speed and cognitive throughput. Scaling this 
                to full parallel streams is a direct extension.
            </Typography>
        </Box>
    )
}