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
                        href="https://rd-center.vercel.app/neuralink/neuralink-bci-overcoming-serial-attention-limitation"
                        color="inherit"
                        target="_blank"
                        sx={{ marginBottom: 2 }}
                        >
                        [NeuraLink] [BCI] Overcoming serial attention limitation
                    </Link>
                </Typography>

                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    4. Full “Consciousness Forking” or Collective Super-Consciousness (Ultimate Horizon)
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    Your core self spawns AI-mediated parallel instances that explore different 
                    information universes independently.
                </Typography>
            </Box>
        </>
    )
}