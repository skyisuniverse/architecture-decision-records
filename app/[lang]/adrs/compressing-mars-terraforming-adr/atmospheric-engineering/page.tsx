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
                    Phase 2: ISRU Scaling and Atmosphere Building (Years 3-6)
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Atmospheric Engineering (Years 4-6): Introduce super-greenhouse gases 
                    (e.g., nano-synthesized perfluorocarbons) for sustained warming, pushing 
                    pressure to 300-500 millibars. Bio-nano microbes, deployed in billions, begin 
                    oxygenation: Breakthrough genetic editing creates strains that thrive in the 
                    warming environment, generating O2 layers and ozone for UV protection. Nanobots 
                    seed artificial magnetospheres (via superconducting rings at Lagrange points) to 
                    shield against solar wind, retaining the new atmosphere.
                </Typography>
            </Box>
        </>
    )
}