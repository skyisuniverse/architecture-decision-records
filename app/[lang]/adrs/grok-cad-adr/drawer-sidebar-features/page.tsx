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
                    Drawer (left & right sidebars)
                </Typography>

                <Typography variant="h6" gutterBottom marginTop={5}>
                    Permanent or Persistent Drawer on the left
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Feature tree
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Browser
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Layers
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Use MUI X TreeView (with TreeItem) for the parametric feature history (very common in CAD).
                </Typography>

                <Typography variant="h6" gutterBottom marginTop={5}>
                    Right drawer: Properties panel →
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Dimensions
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Constraints
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Material
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Appearance
                </Typography>
            </Box>
        </>
    )
}