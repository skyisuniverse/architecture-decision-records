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
                    6. Probability-Based Training Methods (Enhanced with Uncertainty Targeting)
                </Typography>

                <Typography variant="body1" gutterBottom>
                    Software dev; costs $20-500K for custom algorithms, timelines 2-12 months.
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Investments Needed</b>: $15-40M dev (Bayesian tools, data selection); $5-10M infrastructure. Total: $20-50M, aligned with prior.
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Timeline (0 to Hero)</b>: Months 0-3: Adaptation/optimization. Months 3-4: Training (12-24 hours). Hero: 4 months. Unchanged.
                </Typography>
            </Box>
        </>
    )
}