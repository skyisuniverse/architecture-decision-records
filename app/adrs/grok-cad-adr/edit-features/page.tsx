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
                        href="https://rd-center.vercel.app/xai/grok-cad"
                        color="inherit"
                        target="_blank"
                        sx={{ marginBottom: 2 }}
                        >
                        Grok CAD (knowledge base)
                    </Link>
                </Typography>

                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    <Link 
                        href="https://rd-cad.vercel.app"
                        color="inherit"
                        target="_blank"
                        sx={{ marginBottom: 2 }}
                        >
                        Grok CAD (RD CAD) (web-app)
                    </Link>
                </Typography>

                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    <Link 
                        href="https://x.com/i/grok/share/5566571cea454c29b5546c566b506528"
                        color="inherit"
                        target="_blank"
                        sx={{ marginBottom: 2 }}
                        >
                        Conversation with Grok: Web-based CAD Tool
                    </Link>
                </Typography>

                <Typography variant="h6" gutterBottom marginTop={5}>
                    Edit menu →
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Undo
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Redo
                </Typography>
            </Box>
        </>
    )
}