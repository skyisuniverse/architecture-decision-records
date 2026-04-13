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
                        href="https://rd-center.vercel.app/theoretical-physics/warp-drive/superluminal-effective-warp-drive"
                        color="inherit"
                        target="_blank"
                        sx={{ marginBottom: 2 }}
                        >
                        Superluminal-Effective Warp Drive
                    </Link>
                </Typography>

                <Typography variant="h6" gutterBottom marginTop={5}>
                    
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    
                </Typography>
            </Box>
        </>
    )
}