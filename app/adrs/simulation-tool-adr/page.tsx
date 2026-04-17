import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        
    <Box>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Simulation tool ADR
        </Typography>

        <Typography variant="h6" sx={{ marginBottom: 2 }}>
            <Link 
                href="https://rd-center.vercel.app/xai/simulation-tool"
                color="inherit"
                target="_blank"
                sx={{ marginBottom: 2 }}
                >
                Simulation Tool
            </Link>
        </Typography>

        <Typography variant="body1" gutterBottom marginTop={5}>
            Develop a simulation tool with realistic physics, for simulations
            of a 3D-object across multiple domains (physics, chemistry, etc).
        </Typography>

        <Typography variant="body1" gutterBottom marginTop={5}>
            What do we want the tool to be able to simulate?
        </Typography>

        <Typography variant="body1" gutterBottom marginTop={5}>
            How do we implement it?
        </Typography>
    </Box>
    
    )
}