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
                        href="https://rd-center.vercel.app/xai/alternative-hardware-for-ai-training"
                        color="inherit"
                        target="_blank"
                        sx={{ marginBottom: 2 }}
                        >
                        Alternative hardware for AI training
                    </Link>
                </Typography>

                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    Enhancing Photonic Computing
                </Typography>

                <Typography variant="body1" gutterBottom>
                    Photonic computing could be further improved by integrating parallel optical matrix-matrix 
                    multiplication (POMMM), which allows a single light source to handle multiple tensor operations 
                    simultaneously, offering exponential speedups in parallel processing for AI workloads. Combining 
                    this with all-optical chips like LightGen, capable of running generative AI models with over two 
                    orders of magnitude better speed and energy efficiency than electronic counterparts, would enable 
                    direct optical training of multimodal models. Additionally, 3D photonic-electronic platforms boost 
                    bandwidth density and efficiency, reducing interconnect bottlenecks in large-scale training. 
                    The Optical Feature Extraction Engine (OFE2) at 12.5 GHz could preprocess data optically, 
                    slashing latency.
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Updated Time</b>: ~6-12 hours (exponential parallel ops + GHz speeds).
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Updated Energy</b>: ~1-5 GWh (combined efficiencies from POMMM and LightGen).
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Updated Hardware</b>: ~500-1,000 integrated photonic chips (3D stacking reduces count).
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Updated Cost</b>: ~$50M (efficiency gains offset custom integration).
                </Typography>
            </Box>
        </>
    )
}