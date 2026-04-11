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
                    - Terraforming Synergies: Extracted water vapor could seed clouds for further warming, 
                    while O2 production contributes to breathable air over time. Combined with nanorods, 
                    this creates a virtuous cycle: Warmer conditions expose more regolith resources, accelerating ISRU. 
                    Long-term, nanobots could introduce bioengineered organisms to bind soil, prevent dust storms, or 
                    generate biomass for ecosystems.
                </Typography>
            </Box>
        </>
    )
}