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
                    Resources with Quantum Computing
                </Typography>

                <Typography variant="body1" gutterBottom>
                    Quantum systems accelerate optimizations (e.g., QAOA for gradients), offering exponential speedups for intractable parts but limited by NISQ noise. Hybrid quantum-classical training could yield 10-100x gains for RL/post-training, but full quantum training awaits fault-tolerant systems (e.g., 63% faster learning in demos).
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Time:</b> ~12 days (10x overall speedup, exponential for optimization phases).
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Energy:</b> ~150 GWh (proportional to time, plus quantum cooling ~10% overhead).
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Hardware:</b> Hybrid: 200k GPUs + 1,000-qubit quantum processor (e.g., Quantinuum Helios or IBM, ~1M qubits needed for full scale).
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Cost:</b> ~$200M (quantum access premium ~$100M, but offsets via faster convergence).
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Other:</b> Potential for fewer data needs; current NISQ limits to ~10% quantum portion.
                </Typography>
            </Box>
        </>
    )
}