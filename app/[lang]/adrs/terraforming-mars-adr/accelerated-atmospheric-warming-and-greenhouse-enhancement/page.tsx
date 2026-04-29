import { ADRHeader } from '@/app/[lang]/components/ADRHeader';
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
                        href="https://rd-center.vercel.app/spacex/mars/terraform-mars-in-10-years"
                        color="inherit"
                        target="_blank"
                        sx={{ marginBottom: 2 }}
                        >
                        Terraform Mars in 10 years
                    </Link>
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    Engineered nanorods—tiny, rod-shaped particles (~9 micrometers long, with a 60:1 aspect ratio) made from 
                    abundant Martian materials like iron or aluminum—could act as artificial aerosols to trap heat far more 
                    efficiently than natural greenhouse gases. These particles would forward-scatter incoming sunlight toward 
                    the surface while blocking outgoing thermal infrared radiation, mimicking but outperforming Mars' natural 
                    dust storms (which cool the planet due to their composition and size). Models suggest they could be over 
                    5,000 times more effective than super-greenhouse gases like chlorofluorocarbons, as they settle 10 times 
                    slower than native dust, allowing longer atmospheric lifetimes (up to 10 years).
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Temperature and Pressure Increases: Releasing nanorods at a rate of ~30 liters per second 
                    (manufactured on-site from Martian dust) could raise global temperatures by more than 30 Kelvin 
                    (about 54°F) within months to years. This warming would melt polar ice caps and subsurface permafrost, 
                    releasing trapped CO2 and water vapor, thickening the atmosphere from its current ~6 millibars 
                    (0.6% of Earth's) toward levels supportive of liquid water (requiring ~6-10 millibars minimum pressure). 
                    Liquid water stability could emerge in low-lying regions like Hellas Planitia, enabling primitive ecosystems 
                    or agriculture in domed habitats.
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Kickstarting a Habitable Cycle: The initial warming feedback loop could transition Mars from a 
                    frozen desert to a "wet" phase, where surface water flows, erosion reshapes landscapes, and hydrological 
                    cycles begin. This might allow introduction of extremophile microbes (e.g., cyanobacteria) to start oxygen 
                    production, though full oxygenation could still take centuries. Compared to traditional methods 
                    (e.g., orbital mirrors or importing gases), nanorods are resource-efficient, using in-situ materials and 
                    avoiding massive imports from Earth.
                </Typography>
            </Box>
        </>
    )
}