import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        
    <Box>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Writing compressed understanding into memory engrams
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
            <Link 
                href="https://rd-center.vercel.app/neuralink/neuralink-bci-overcoming-serial-attention-limitation"
                color="inherit"
                target="_blank"
                sx={{ marginBottom: 2 }}
                >
                [NeuraLink] [BCI] Overcoming serial attention limitation
            </Link>
        </Typography>

        <Typography variant="h6" sx={{ marginBottom: 2 }}>
            3. AI-Augmented “Memory Expansion & Sensory Substitution” Modules
        </Typography>

        <Typography sx={{ marginBottom: 2 }}>
            AI handles the “training” workload — tokenizing, embedding, and cross-linking vast 
            datasets — then writes the compressed understanding directly into expanded 
            hippocampal/neocortical memory engrams.
        </Typography>

        {/* <Typography sx={{ marginBottom: 2 }}>
            - High-Throughput Nanomanipulation: Create parallel, automated systems for manipulating trillions of atoms simultaneously. Breakthrough: Scalable arrays of nanoscale probes (e.g., enhanced STM or AFM tips) that operate in 3D environments, not just 2D, with feedback loops for real-time correction. This would allow building volumetric structures like rocket tanks.
        </Typography>

        <Typography sx={{ marginBottom: 2 }}>
            - Atomic-Resolution Imaging in Dynamic Environments: Improve imaging to visualize and control reactions in real-time under ambient conditions (not just vacuum or cryo). Breakthrough: Next-gen scanning tunneling microscopy (STM) or electron microscopy with femtosecond resolution, integrated with AI for interpreting noisy data, enabling oversight of nanobot swarms during assembly.
        </Typography> */}
    </Box>
    
    )
}