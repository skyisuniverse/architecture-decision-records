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
                        href="https://rd-center.vercel.app/spacex/mars/terraform-mars-in-10-years"
                        color="inherit"
                        target="_blank"
                        sx={{ marginBottom: 2 }}
                        >
                        Terraform Mars in 10 years
                    </Link>
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    Nanobots—programmable, self-replicating molecular machines—could exponentially speed up regolith 
                    (Martian soil) processing for oxygen, fuel, water, and building materials, far surpassing current 
                    systems like NASA's MOXIE (which produces ~10 grams of O2 per hour from CO2). By disassembling 
                    regolith at the atomic level (e.g., via mechanosynthesis or bio-hybrid methods), they enable rapid 
                    extraction of iron, silicon, aluminum, and hydrated minerals.
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Resource Production and Colony Support: Nanobots could convert regolith into O2 
                    (via electrolysis of extracted water) and methane fuel (from CO2 and hydrogen) at rates orders of 
                    magnitude faster than MOXIE, supporting propellant for return trips or local energy. Building materials 
                    like sintered bricks or 3D-printed metals (e.g., from microbially extracted iron) could create habitats, 
                    roads, and greenhouses, reducing Earth shipments by 90%+. This fosters self-sustaining colonies, 
                    where nanobots replicate to scale operations, turning Mars into a resource hub.
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Terraforming Synergies: Extracted water vapor could seed clouds for further warming, 
                    while O2 production contributes to breathable air over time. Combined with nanorods, this creates 
                    a virtuous cycle: Warmer conditions expose more regolith resources, accelerating ISRU. Long-term, 
                    nanobots could introduce bioengineered organisms to bind soil, prevent dust storms, or generate biomass 
                    for ecosystems.
                </Typography>
            </Box>
        </>
    )
}