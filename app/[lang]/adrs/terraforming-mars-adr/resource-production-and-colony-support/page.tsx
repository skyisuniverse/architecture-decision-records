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
                        href="https://rd-center.vercel.app/spacex/mars/terraform-mars-in-10-years"
                        color="inherit"
                        target="_blank"
                        sx={{ marginBottom: 2 }}
                        >
                        Terraform Mars in 10 years
                    </Link>
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Resource Production and Colony Support: Nanobots could convert regolith into O2 
                    (via electrolysis of extracted water) and methane fuel (from CO2 and hydrogen) at rates orders 
                    of magnitude faster than MOXIE, supporting propellant for return trips or local energy. Building 
                    materials like sintered bricks or 3D-printed metals (e.g., from microbially extracted iron) could 
                    create habitats, roads, and greenhouses, reducing Earth shipments by 90%+. This fosters self-sustaining 
                    colonies, where nanobots replicate to scale operations, turning Mars into a resource hub.
                </Typography>
            </Box>
        </>
    )
}