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
                        href="https://rd-center.vercel.app/xai/alternative-hardware-for-ai-training"
                        color="inherit"
                        target="_blank"
                        sx={{ marginBottom: 2 }}
                        >
                        Alternative hardware for AI training
                    </Link>
                </Typography>

                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    Enhancing Probability-Based Training Methods
                </Typography>

                <Typography variant="body1" gutterBottom>
                    Probability-based methods could incorporate AI as a scientific collaborator for probabilistic discovery, focusing on uncertainty-driven data selection to minimize computations. Bayesian-inspired active learning in models like Pangu-Weather accelerates targeting high-impact points, reducing data needs by 10-100x. Post-training refinements with probabilistic constraints enhance convergence, while AI breakthroughs in 2026 enable autonomous hyperparameter optimization.
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Updated Time</b>: ~12-24 hours (100x faster with uncertainty targeting).
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Updated Energy</b>: ~5-10 GWh (data-efficient methods).
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Updated Hardware</b>: ~1,000 GPUs (underutilized but optimized).
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Updated Cost</b>: ~$50M (reduced compute scale).
                </Typography>
            </Box>
        </>
    )
}