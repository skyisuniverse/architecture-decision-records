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
                    Baseline for Grok 5 Training
                </Typography>

                <Typography variant="body1" gutterBottom>
                    Grok 5 is a hypothetical next-generation model from xAI, projected to have around 6 trillion parameters with multimodal capabilities, based on industry trends for 2026 frontier models. For a baseline without breakthroughs, we estimate resources using data from similar models like Grok 4 (1.7T params, 310 GWh energy, $490M cost) and scaling up proportionally (assuming ~3.5x param increase leads to ~4-5x compute due to MoE efficiency and scaling laws). Training compute is estimated at ~1e27 FLOPs (6 * params * 20 * params for Chinchilla-optimal tokens, adjusted for MoE active params ~500B).
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Time</b>: ~120 days (based on Grok 4's scale-up and typical frontier training runs).
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Energy</b>: ~1.5 TWh (scaled from Grok 4's 310 GWh, accounting for larger scale and 1 GW clusters).
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Hardware</b>: ~200,000 H100-equivalent GPUs (or next-gen like Blackwell), clustered in a supercomputer setup.
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Cost</b>: ~$1B (hardware rental/depreciation ~$600M, energy ~$200M at $0.15/kWh, ops ~$200M).
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - Other: Water usage ~3B liters; CO2 emissions equivalent to ~250k US households annually.
                </Typography>

                <Typography variant="body1" gutterBottom>
                    These are conservative estimates; actuals could vary with optimizations like sparse MoE.
                </Typography>
            </Box>
        </>
    )
}