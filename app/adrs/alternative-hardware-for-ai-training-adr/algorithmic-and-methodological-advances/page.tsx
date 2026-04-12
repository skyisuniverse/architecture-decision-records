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
                    Algorithmic and Methodological Advances
                </Typography>

                <Typography variant="body1" gutterBottom>
                    Breakthroughs in software and training paradigms could complement hardware, optimizing how models 
                    learn without requiring proportional increases in compute.
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - Probability-Based Training Methods: A novel approach inspired by natural dynamic systems 
                    (e.g., climate or financial models) uses probabilistic targeting of high-impact data points 
                    instead of iterative parameter adjustments. This determines model parameters with minimal computations, 
                    achieving comparable accuracy to traditional methods but 100x faster and with drastically lower energy use. 
                    It focuses on "critical locations" where changes are rapid, reducing redundant iterations. Such methods could 
                    simplify training pipelines, making them more accessible for smaller teams or resource-constrained environments.
                </Typography>
            </Box>
        </>
    )
}