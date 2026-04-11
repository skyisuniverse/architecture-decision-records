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
                    You could route multiple external data sources straight into visual/auditory/semantic 
                    cortices in parallel via sensory substitution (the same mechanism planned for Blindsight 
                    super-vision).
                </Typography>
            </Box>
        </>
    )
}