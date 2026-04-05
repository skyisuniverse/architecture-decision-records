import { Box, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        <Box>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Building the Starship Upper Stage: Structural Skeleton
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                <Link 
                    href="https://rd-center.vercel.app/spacex/nano-assembly-starship/starship-nano-assembly"
                    color="inherit"
                    target="_blank"
                    sx={{ marginBottom: 2 }}
                    >
                    Starship Nano-Assembly
                </Link>
            </Typography>

            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                3. Bottom-Up Component Assembly
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                - Structural Skeleton: Nanobots start at the base, assembling the cylindrical 
                body from stainless steel alloys atom by atom. They form molecular chains of iron, 
                carbon, and chromium, cross-linking them into sheets that self-curve into the 
                9-meter-diameter tank sections. This bottom-up approach ensures flawless welds—no seams 
                or weak points, as the material is grown continuously.
            </Typography>
        </Box>
    )
}