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
                        href="https://rd-center.vercel.app/xai/alternative-hardware-for-ai-training/neuromorphic-computing"
                        color="inherit"
                        target="_blank"
                        sx={{ marginBottom: 2 }}
                        >
                        Neuromorphic Computing
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
                </Typography> */}

                <Typography variant="body1" gutterBottom>
                    <b>Neuromorphic Computing</b>: Brain-inspired hardware, or neuromorphic chips, mimic 
                    neural structures with integrated memory and processing (in-memory computing). 
                    Recent advances include using memristor arrays for vector-matrix multiplications—a 
                    core operation in AI training—while leveraging device randomness for efficient 
                    random number generation in probabilistic algorithms. This reduces data movement, 
                    cutting latency and power use by factors like 10-100x compared to GPUs. For example, <b>3D 
                    neuromorphic architectures enable conditional computing in large models</b>, 
                    scaling to brain-like efficiency with sparse connectivity (e.g., modeling gray and 
                    white matter in the brain). Future breakthroughs here could allow AI models to train 
                    in real-time on edge devices, making the process faster and more accessible without 
                    massive data centers.
                </Typography>
            </Box>
        </>
    )
}