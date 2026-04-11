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
                    - Temperature and Pressure Increases: Releasing nanorods at a rate of ~30 liters per second 
                    (manufactured on-site from Martian dust) could raise global temperatures by more than 30 Kelvin 
                    (about 54°F) within months to years. This warming would melt polar ice caps and subsurface 
                    permafrost, releasing trapped CO2 and water vapor, thickening the atmosphere from its current 
                    ~6 millibars (0.6% of Earth's) toward levels supportive of liquid water (requiring ~6-10 millibars 
                    minimum pressure). Liquid water stability could emerge in low-lying regions like Hellas Planitia, 
                    enabling primitive ecosystems or agriculture in domed habitats.
                </Typography>
            </Box>
        </>
    )
}