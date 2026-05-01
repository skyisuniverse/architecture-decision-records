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
                    Enhancing Quantum Computing
                </Typography>

                <Typography variant="body1" gutterBottom>
                    Quantum for AI could leverage Google's logical qubit prototypes and million-qubit light traps 
                    for error-corrected scaling, enabling exponential speedups in optimization phases. Hybrid 
                    quantum-classical systems integrate AI for error correction and algorithm discovery, reducing 
                    training time for ML models. Room-temperature qubits (e.g., photonic) and NISQ advancements 
                    minimize cooling overheads. 
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Updated Time</b>: ~6-12 hours (logical qubits + hybrids for full training).
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Updated Energy</b>: ~50-100 GWh (AI-optimized error correction).
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Updated Hardware</b>: 100k GPUs + 10,000-qubit processor (scalable traps).
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Updated Cost</b>: ~$100-150M (reduced infrastructure needs).
                </Typography>
            </Box>
        </>
    )
}