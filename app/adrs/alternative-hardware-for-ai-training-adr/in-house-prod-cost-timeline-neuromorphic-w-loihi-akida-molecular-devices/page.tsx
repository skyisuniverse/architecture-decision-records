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
                    2. Neuromorphic Computing (Enhanced with Loihi 3, Akida 2.0, Molecular Devices)
                </Typography>

                <Typography variant="body1" gutterBottom>
                    In-house requires custom memristor/PCM integration, with high R&D costs ($100-500M) and 
                    complex processes hindering scale. Chips like Hala Point (1.15B neurons) took years; 
                    market growth to $14.9B by 2032, but in-house fab/yield optimization adds time.
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Investments Needed</b>: $300-600M R&D (neuron/synapse density, on-chip learning); 
                    $2-5B fab (4nm nodes, BEOL integration); $100-200M talent/infrastructure. 
                    Total: $2.4-5.8B, 20-40x procurement due to yield/validation.
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Timeline (0 to Hero)</b>: Months 0-24: R&D/prototyping (analog cores, 1-2M neurons/chip). 
                    Months 24-48: Fab build/scaling (5,000-10,000 chips). Months 48-54: Hybrid integration. 
                    Months 54-55: Training (6-12 days). Hero: 55 months. Challenges: Manufacturing optimization 
                    for low-power.
                </Typography>
            </Box>
        </>
    )
}