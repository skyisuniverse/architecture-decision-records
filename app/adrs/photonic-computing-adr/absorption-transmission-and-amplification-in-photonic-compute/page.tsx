import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        
    <Box>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Absorption, Transmission, and Amplification in photonic compute
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
            <Link 
                href="https://rd-center.vercel.app/xai/alternative-hardware-for-ai-training/photonic-computing"
                color="inherit"
                target="_blank"
                sx={{ marginBottom: 2 }}
                >
                Alternative hardware for AI training: Photonic Computing
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
            <b>Photonic (Light-Based) Computing</b>: A key breakthrough could involve chips that use light beams instead of 
            electricity to perform computations. For instance, engineers have developed programmable photonic chips 
            capable of training nonlinear neural networks directly with light. This works by using a semiconductor 
            material where a "pump" beam modulates a "signal" beam's behavior (<b>absorption, transmission, or amplification</b>), 
            enabling real-time reconfiguration and nonlinear functions essential for deep learning. Such chips have 
            demonstrated over 97% accuracy on classification tasks while using far less energy and fewer operations 
            than electronic equivalents—potentially reducing AI data center power consumption by orders of magnitude 
            and speeding up training through parallel optical processing. This could make training easier by eliminating 
            heat management issues and enabling scalable, low-power systems.
        </Typography>
    </Box>
    
    )
}