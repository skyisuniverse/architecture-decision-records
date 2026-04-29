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
                        href="https://rd-center.vercel.app/xai/alternative-hardware-for-ai-training/quantum-computing"
                        color="inherit"
                        target="_blank"
                        sx={{ marginBottom: 2 }}
                        >
                        Alternative hardware for AI training: Quantum Computing
                    </Link>
                </Typography>

                {/* <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    2. Advanced Manipulation and Imaging Tools
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    Current tools like atomic force microscopes (AFM) can move single atoms, but they're slow 
                    and limited to surfaces.
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - High-Throughput Nanomanipulation: Create parallel, automated systems for manipulating trillions of atoms simultaneously. Breakthrough: Scalable arrays of nanoscale probes (e.g., enhanced STM or AFM tips) that operate in 3D environments, not just 2D, with feedback loops for real-time correction. This would allow building volumetric structures like rocket tanks.
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Atomic-Resolution Imaging in Dynamic Environments: Improve imaging to visualize and control reactions in real-time under ambient conditions (not just vacuum or cryo). Breakthrough: Next-gen scanning tunneling microscopy (STM) or electron microscopy with femtosecond resolution, integrated with AI for interpreting noisy data, enabling oversight of nanobot swarms during assembly.
                </Typography> */}

                <Typography variant="body1" gutterBottom>
                    <b>Quantum Computing</b>: Quantum systems could accelerate <b>AI training</b> through parallel processing 
                    of complex optimizations, such as matrix operations in deep learning. Algorithms like Quantum 
                    Approximate Optimization (QAOA) or Variational Quantum Eigensolvers (VQE) might fine-tune models 
                    faster than classical methods, potentially handling exponentially larger datasets. Hybrid quantum-AI 
                    approaches, where quantum processors pre-process data for classical ML, have shown promise in reducing 
                    training data needs and speeding up convergence. While current noisy intermediate-scale quantum (NISQ) 
                    devices limit scale, fault-tolerant <b>quantum computers</b> could provide exponential speedups for tasks like 
                    gradient descent, making <b>training easier for problems intractable on classical hardware</b>.
                </Typography>
            </Box>
        </>
    )
}