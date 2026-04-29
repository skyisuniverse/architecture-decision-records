import { ADRHeader } from '@/app/[lang]/components/ADRHeader';
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
                        href="https://rd-center.vercel.app/xai/alternative-hardware-for-ai-training"
                        color="inherit"
                        target="_blank"
                        sx={{ marginBottom: 2 }}
                        >
                        Alternative hardware for AI training
                    </Link>
                </Typography>

                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    Resources with Neuromorphic Computing
                </Typography>

                <Typography variant="body1" gutterBottom>
                    Neuromorphic hardware mimics brain neurons (e.g., IBM NorthPole, Intel Loihi 2), offering 100-1000x energy efficiency and 5-10x speedups via in-memory computing and spiking networks. For Grok 5, training leverages sparse connectivity and adaptive thresholds, achieving 312x energy gains over GPUs and 847 GOp/s/W.
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Time:</b> ~12-24 days (10x speedup from reduced latency/data movement).
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Energy:</b> ~1.5-15 GWh (100-1000x savings, e.g., 67% reduction in low-activity phases).
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Hardware:</b> ~20,000 neuromorphic chips (e.g., 3D stacked with memristors), optimized for edge but scaled to clusters.
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Cost:</b> ~$100-200M (cheaper per chip, but integration costs; 89x savings over CPU baselines).
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Other:</b> 2.3 ms inference latency post-training; hybrid with GPUs for non-spiking parts.
                </Typography>
            </Box>
        </>
    )
}