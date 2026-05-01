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
                    Resources with Probability-Based Training Methods
                </Typography>

                <Typography variant="body1" gutterBottom>
                    This shifts from iterative gradients to probabilistic targeting of critical data points, achieving 100x 
                    speedups and comparable accuracy (e.g., TUM method focuses on rapid-change locations).
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Time:</b> ~1.2 days (100x faster iterations).
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Energy:</b> ~15 GWh (100x reduction in computations).
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Hardware:</b> Same as baseline but underutilized (~2,000 GPUs effective).
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Cost:</b> ~$100M (fewer resources needed overall).
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Other:</b> Minimal data requirements; hybrid with baselines for stability.
                </Typography>

                <Typography variant="body1" gutterBottom>
                    These estimates combine reported breakthroughs with scaling assumptions. Real-world integration may require 
                    hybrids, and challenges like hardware maturity could adjust figures upward. Breakthroughs could compound 
                    (e.g., photonic + analog ~1000x total), potentially enabling desktop-scale training for smaller models.
                </Typography>
            </Box>
        </>
    )
}