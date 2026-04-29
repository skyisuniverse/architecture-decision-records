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
                        href="https://rd-center.vercel.app/theoretical-physics/warp-drive/warp-drive-without-negative-energy"
                        color="inherit"
                        target="_blank"
                        sx={{ marginBottom: 2 }}
                        >
                        Warp Drive Without Negative Energy
                    </Link>
                </Typography>

                <Typography variant="h6" gutterBottom marginTop={5}>
                    Physical Warp Drives (Bobrick & Martire, 2021)
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    This framework expands warp drives into a "design space" where geometries can 
                    be tailored using ordinary materials and positive energy for subluminal speeds. 
                    It identifies regimes where no negative energy is needed, focusing on reshaping 
                    the bubble (e.g., with a narrow "neck" for compression) to minimize issues. 
                    A 2025 paper by former NASA scientist Harold "Sonny" White adapts this for 
                    starship-like designs, shifting energy to cylindrical "nacelles" for stability 
                    during hypothetical FTL journeys.
                </Typography>
            </Box>
        </>
    )
}