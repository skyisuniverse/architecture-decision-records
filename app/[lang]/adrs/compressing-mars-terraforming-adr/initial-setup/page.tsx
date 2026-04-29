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
                        href="https://rd-center.vercel.app/spacex/mars/compressing-mars-terraforming-from-100000-to-10-years"
                        color="inherit"
                        target="_blank"
                        sx={{ marginBottom: 2 }}
                        >
                        Compressing Mars Terraforming from 100,000+ to 10 years
                    </Link>
                </Typography>

                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    Phase 1: Deployment and Rapid Warming (Years 1-3)
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Initial Setup (Year 1): Launch 100+ Starships carrying seed nanobots and compact fusion reactors.
                    Upon landing at equatorial sites (e.g., Hellas Planitia for low elevation and water ice access), 
                    nanobots replicate exponentially, converting regolith into nanorods and dispersal drones. AI oversees 
                    global distribution via low-orbit satellites, achieving uniform atmospheric coverage in months.
                </Typography>
            </Box>
        </>
    )
}