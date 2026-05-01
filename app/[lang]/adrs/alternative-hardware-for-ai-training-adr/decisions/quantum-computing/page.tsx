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
                    Quantum Computing
                </Typography>

                <Typography variant="body1" gutterBottom>
                    Quantum systems could accelerate AI training through parallel processing of complex optimizations, 
                    such as matrix operations in deep learning. Algorithms like Quantum Approximate Optimization (QAOA) 
                    or Variational Quantum Eigensolvers (VQE) might fine-tune models faster than classical methods, 
                    potentially handling exponentially larger datasets. Hybrid quantum-AI approaches, where quantum 
                    processors pre-process data for classical ML, have shown promise in reducing training data needs 
                    and speeding up convergence. While current noisy intermediate-scale quantum (NISQ) devices limit 
                    scale, fault-tolerant quantum computers could provide exponential speedups for tasks like gradient 
                    descent, making training easier for problems intractable on classical hardware.
                </Typography>
            </Box>
        </>
    )
}