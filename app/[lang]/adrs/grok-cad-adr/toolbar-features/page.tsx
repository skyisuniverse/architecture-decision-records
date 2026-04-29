import { ADRHeader } from '@/app/[lang]/components/ADRHeader';
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
                    Toolbar →
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Select
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Line
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Rectangle
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Circle
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Extrude
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Revolve
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Fillet
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    etc.
                </Typography>

                <Typography variant="h6" gutterBottom marginTop={5}>
                    Modes →
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Sketch
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Model
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Assembly
                </Typography>
            </Box>
        </>
    )
}