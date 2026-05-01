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
                    Resources with Photonic Computing
                </Typography>

                <Typography variant="body1" gutterBottom>
                    Photonic chips use light for computations, enabling parallel processing with 100x speedups and 100x energy savings over GPUs for AI tasks (e.g., 12.5 GHz ops at picosecond latencies, 100x faster than Nvidia GPUs for generation). Training would shift to specialized photonic accelerators (e.g., Lightmatter or Tsinghua OFE2 chips), reducing data movement bottlenecks. Assuming integration replaces 80% of GPU compute.
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Time:</b> ~1.2 days (100x speedup on core matrix ops and training loops).
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Energy:</b> ~15 GWh (100x reduction via optical efficiency, minimal heat).
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Hardware:</b> ~2,000 photonic chips (e.g., integrated 3D optics with 50B transistors/chip), far fewer than GPUs due to parallelism.
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Cost:</b> ~$100M (lower hardware scale, but custom fab ~$50M premium; energy savings offset).
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Other:</b> Enables edge training; challenges in precision scaling to 6T params.
                </Typography>
            </Box>
        </>
    )
}