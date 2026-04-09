import { Box, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        <Box>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Exponential speedups for tasks like gradient descent
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                <Link 
                    href="https://rd-center.vercel.app/xai/alternative-hardware-for-ai-training/quantum-computing"
                    color="inherit"
                    target="_blank"
                    sx={{ marginBottom: 2 }}
                    >
                    Alternative hardware for AI training: Quantum Computing
                </Link>
            </Typography>

            {/* <Typography variant="h6" sx={{ marginBottom: 2 }}>
                4. Computing and AI Breakthroughs
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                Designing and controlling MNT requires immense computational power.
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                - AI-Driven System Design: Automate the blueprinting of nanobot behaviors and assembly sequences.
                Breakthrough: Advanced AI (e.g., integrating machine learning with genetic algorithms) that designs
                self-replicating systems, optimizes for efficiency, and incorporates error correction codes,
                drawing from structural biology.
            </Typography> */}

            <Typography variant="body1" gutterBottom>
                <b>Quantum Computing</b>: Quantum systems could accelerate AI training through parallel processing 
                of complex optimizations, such as matrix operations in deep learning. Algorithms like Quantum 
                Approximate Optimization (QAOA) or Variational Quantum Eigensolvers (VQE) might fine-tune models 
                faster than classical methods, potentially handling exponentially larger datasets. Hybrid quantum-AI 
                approaches, where quantum processors pre-process data for classical ML, have shown promise in reducing 
                training data needs and speeding up convergence. While current noisy intermediate-scale quantum (NISQ) 
                devices limit scale, fault-tolerant quantum computers could provide <b>exponential speedups for tasks like 
                gradient descent</b>, making training easier for problems intractable on classical hardware.
            </Typography>
        </Box>
    )
}