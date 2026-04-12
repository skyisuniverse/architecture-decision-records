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
                    Enhancing Neuromorphic Computing
                </Typography>

                <Typography variant="body1" gutterBottom>
                    Neuromorphic systems could advance with molecular devices that dynamically switch between memory, 
                    logic, and learning roles, enabling adaptive, real-time training within the hardware itself. 
                    Chips like Intel's Loihi 3 (8M neurons on 4nm) and BrainChip's Akida 2.0 (1.2M neurons at 500mW) 
                    offer 25-500x energy savings for edge AI, scalable to brain-like systems. IBM's NorthPole and 
                    NeuRRAM provide in-memory computation for ultra-low power, while Darwin3 integrates 2.35M neurons 
                    with on-chip learning. These allow neuromorphic hardware to mimic brain plasticity, improving 
                    sparse training for Grok 5. 
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Updated Time</b>: ~6-12 days (on-chip learning + 1000x real-time acceleration).
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Updated Energy</b>: ~500 MWh-5 GWh (500x savings from Akida/Loihi).
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Updated Hardware</b>: ~5,000-10,000 advanced neuromorphic chips (e.g., Loihi 3 clusters).
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Updated Cost</b>: ~$50-100M (commercial scalability reduces per-unit costs).
                </Typography>
            </Box>
        </>
    )
}