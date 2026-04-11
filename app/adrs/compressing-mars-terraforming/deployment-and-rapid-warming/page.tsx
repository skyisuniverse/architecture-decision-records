import { ADRHeader } from '@/app/components/ADRHeader';
import { Link } from '@mui/material';
import Box from '@mui/material/Box';
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
                    The foundation relies on engineered nanorods—tiny, 9-micrometer-long particles made from Martian iron or 
                    aluminum dust, designed to trap heat 5,000 times more efficiently than CO2 by scattering sunlight downward 
                    while blocking infrared escape.
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Initial Setup (Year 1): Launch 100+ Starships carrying seed nanobots and compact fusion reactors.
                    Upon landing at equatorial sites (e.g., Hellas Planitia for low elevation and water ice access), 
                    nanobots replicate exponentially, converting regolith into nanorods and dispersal drones. AI oversees 
                    global distribution via low-orbit satellites, achieving uniform atmospheric coverage in months.
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Warming Acceleration (Years 1-2): Nanorods raise temperatures by 30-50 Kelvin (54-90°F) 
                    within the first year, melting polar caps and subsurface permafrost to release ~10-20% of Mars' 
                    frozen CO2 and water reserves. Breakthroughs like adaptive nanorods (self-adjusting shapes via 
                    embedded quantum dots) amplify this to 100K+ via positive feedback: Released water vapor and CO2 create 
                    natural greenhouse amplification, thickening the atmosphere from 6 millibars to 100-200 millibars 
                    (enough for liquid water in lowlands). Orbital mirrors (nano-assembled reflective sails, kilometers wide) 
                    focus sunlight on poles for targeted melting. Orbital mirrors (nano-assembled reflective sails, 
                    kilometers wide) focus sunlight on poles for targeted melting.
                </Typography>
            </Box>
        </>
    )
}