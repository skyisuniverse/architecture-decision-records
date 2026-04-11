import { ADRHeader } from '@/app/components/ADRHeader';
import { Box, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        <>
            <ADRHeader />
            <Box>
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    <Link 
                        href="https://rd-center.vercel.app/xai/alternative-hardware-for-ai-training/neuromorphic-computing"
                        color="inherit"
                        target="_blank"
                        sx={{ marginBottom: 2 }}
                        >
                        Neuromorphic Computing
                    </Link>
                </Typography>

                {/* <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    4. Computing and AI Breakthroughs
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    Designing and controlling MNT requires immense computational power.
                </Typography> */}

                <Typography variant="body1" gutterBottom>
                    <b>Neuromorphic Computing</b>: Brain-inspired hardware, or neuromorphic chips, mimic 
                    neural structures with integrated memory and processing (in-memory computing). Recent 
                    advances include using <b>memristor arrays for vector-matrix multiplications</b>—a core 
                    operation in AI training—while leveraging device randomness for efficient random 
                    number generation in probabilistic algorithms. This reduces data movement, cutting 
                    latency and power use by factors like 10-100x compared to GPUs. For example, 
                    3D neuromorphic architectures enable conditional computing in large models, scaling 
                    to brain-like efficiency with sparse connectivity (e.g., modeling gray and white 
                    matter in the brain). Future breakthroughs here could allow AI models to train in 
                    real-time on edge devices, making the process faster and more accessible without 
                    massive data centers.
                </Typography>
            </Box>
        </>
    )
}