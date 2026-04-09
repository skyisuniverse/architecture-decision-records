import { Box, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        <Box>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                AI-Augmented “Memory Expansion & Sensory Substitution” Modules
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                <Link 
                    href="https://rd-center.vercel.app/neuralink/neuralink-bci-overcoming-serial-attention-limitation"
                    color="inherit"
                    target="_blank"
                    sx={{ marginBottom: 2 }}
                    >
                    [NeuraLink] [BCI] Overcoming serial attention limitation
                </Link>
            </Typography>

            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                3. AI-Augmented “Memory Expansion & Sensory Substitution” Modules
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                The brain is treated as a biological computer whose every experience (sight, sound, 
                thought, emotion) is electrical signals. Neuralink's generalized I/O capability means:
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                - You could route multiple external data sources straight into visual/auditory/semantic 
                cortices in parallel via sensory substitution (the same mechanism planned for Blindsight 
                super-vision).
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                - AI handles the “training” workload — tokenizing, embedding, and cross-linking vast 
                datasets — then writes the compressed understanding directly into expanded 
                hippocampal/neocortical memory engrams.
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                - Subjectively, it feels like having 10-100 parallel minds that never sleep or lose 
                bandwidth. You wake up each day having already “lived” through terabytes of curated 
                information overnight.
            </Typography>
        </Box>
    )
}