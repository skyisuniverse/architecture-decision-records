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
                        href="https://rd-center.vercel.app/xai/simulation-tool/requirements"
                        color="inherit"
                        target="_blank"
                        sx={{ marginBottom: 2 }}
                        >
                        Engineering Simulation Tool: Requirements
                    </Link>
                </Typography>
            </Box>
        </>
    )
}