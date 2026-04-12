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
                    4. Quantum Computing (Enhanced with Logical Qubits, Hybrids)
                </Typography>

                <Typography variant="body1" gutterBottom>
                    In-house quantum hardware is extremely costly ($20-100M per chip, tens of millions for systems, 
                    billions for full-scale); timelines 8-10 years for fault-tolerant systems. 
                    Market to $4.375B by 2028; cryogenic/facility adds $10-50M.
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Investments Needed</b>: Investments Needed: $500M-1B R&D (qubit stability, error correction); 
                    $5-10B fab/lab (cryogenics, 10K-qubit processors); $200-500M hybrid integration. 
                    Total: $5.7-11.5B, 30-50x procurement from NISQ limitations.
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Timeline (0 to Hero)</b>: Timeline (0 to Hero): Months 0-36: R&D/prototypes (logical qubits). 
                    Months 36-96: Fab/scaling (full systems). Months 96-102: Integration. Months 102-103: 
                    Training (6-12 hours). Hero: 103 months (8.5+ years). Longest due to maturity.
                </Typography>
            </Box>
        </>
    )
}