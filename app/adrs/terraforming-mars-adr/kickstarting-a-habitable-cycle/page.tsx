import { Box, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        <Box>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Kickstarting a Habitable Cycle
            </Typography>
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
                - Kickstarting a Habitable Cycle: The initial warming feedback loop could transition Mars from a 
                frozen desert to a "wet" phase, where surface water flows, erosion reshapes landscapes, and 
                hydrological cycles begin. This might allow introduction of extremophile microbes (e.g., cyanobacteria) 
                to start oxygen production, though full oxygenation could still take centuries. Compared to traditional 
                methods (e.g., orbital mirrors or importing gases), nanorods are resource-efficient, using in-situ materials 
                and avoiding massive imports from Earth.
            </Typography>
        </Box>
    )
}