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
                    Solar System Travel
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Trips to Mars (currently 6-9 months) could take minutes to hours at high subluminal speeds. 
                    Reaching outer planets like Jupiter or Saturn (years away now) might occur in days, enabling 
                    routine mining of asteroids, colonization of moons like Europa, or rapid response to space 
                    events. This would make the solar system feel like a neighborhood, boosting scientific 
                    missions and human expansion.
                </Typography>
            </Box>
        </>
    )
}