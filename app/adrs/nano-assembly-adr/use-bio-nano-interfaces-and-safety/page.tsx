import { Box, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        // <Typography sx={{ marginBottom: 2 }}>
        //     Use Bio-Nano Interfaces and Safety
        // </Typography>

        <Box>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Use Bio-Nano Interfaces and Safety
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                <Link 
                    href="https://rd-center.vercel.app/nano-assembly/scientific-breakthroughs-for-nano-assembly"
                    color="inherit"
                    target="_blank"
                    sx={{ marginBottom: 2 }}
                    >
                    Scientific breakthroughs for Nano-Assembly
                </Link>
            </Typography>

            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                7. Bio-Nano Interfaces and Safety
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                While not core to Starship, these ensure viability.
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                - Integration with Biological Systems: For hybrid tech (e.g., bio-inspired assemblers).
                Breakthrough: Seamless bio-nano interfaces, like those in cells, for robust designs.
            </Typography>
        </Box>
    )
}