import { ADRHeader } from '@/app/components/ADRHeader';
import { Box, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        <>
            <ADRHeader />
            <Box>
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    <Link 
                        href="https://rd-center.vercel.app//theoretical-physics/warp-drive/warp-drive-without-negative-energy"
                        color="inherit"
                        target="_blank"
                        sx={{ marginBottom: 2 }}
                        >
                        Warp Drive Without Negative Energy
                    </Link>
                </Typography>

                <Typography variant="h6" gutterBottom marginTop={5}>
                    Broader Implications
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Beyond travel, it could facilitate resource gathering from outer space 
                    (e.g., helium-3 from gas giants for fusion), real-time communication relays 
                    across vast distances (via warp-transported satellites), or escaping existential 
                    threats like asteroids by relocating populations. 
                </Typography>
            </Box>
        </>
    )
}