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
                        href="https://rd-center.vercel.app/spacex/nano-assembly-starship/starship-nano-assembly"
                        color="inherit"
                        target="_blank"
                        sx={{ marginBottom: 2 }}
                        >
                        Starship Nano-Assembly
                    </Link>
                </Typography>

                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    1. Preparation and Feedstock Acquisition
                </Typography>

                {/* <Typography sx={{ marginBottom: 2 }}>
                    Assembly at atomic scales is energy-intensive.
                </Typography> */}

                <Typography sx={{ marginBottom: 2 }}>
                    - Raw Material Gathering: Start with a "feedstock reservoir"—a vat or 
                    environmental extractor containing abundant elements like carbon (from CO2 
                    in the air or graphite), iron (from ore or recycled steel), chromium and 
                    nickel (for stainless steel alloys), and trace elements for specialized 
                    components like engine nozzles. Nanobots could disassemble nearby scrap 
                    metal, soil, or even atmospheric gases to harvest atoms, using energy from 
                    solar panels or fusion reactors to break bonds.
                </Typography>
            </Box>
        </>
    )
}