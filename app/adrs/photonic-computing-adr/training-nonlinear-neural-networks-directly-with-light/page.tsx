import { Box, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        <Box>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Training nonlinear neural networks directly with light
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
                <b>Photonic (Light-Based) Computing</b>: A key breakthrough could involve chips that use light beams instead of 
                electricity to perform computations. For instance, engineers have developed programmable photonic chips 
                capable of <b>training nonlinear neural networks directly with light</b>. This works by using a semiconductor 
                material where a "pump" beam modulates a "signal" beam's behavior (absorption, transmission, or amplification), 
                enabling real-time reconfiguration and nonlinear functions essential for deep learning. Such chips have 
                demonstrated over 97% accuracy on classification tasks while using far less energy and fewer operations 
                than electronic equivalents—potentially reducing AI data center power consumption by orders of magnitude 
                and speeding up training through parallel optical processing. This could make training easier by eliminating 
                heat management issues and enabling scalable, low-power systems.
            </Typography>
        </Box>
    )
}