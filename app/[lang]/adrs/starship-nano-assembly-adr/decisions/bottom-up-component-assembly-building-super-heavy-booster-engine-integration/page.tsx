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
                    3. Bottom-Up Component Assembly
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Engine Integration: Simultaneously, specialized bot teams construct the 33 Raptor 
                    engines. For each, they assemble turbopumps from high-strength alloys, combustion chambers 
                    from heat-resistant rhenium or ceramics, and nozzles with embedded cooling channels. Atoms 
                    are placed with picometer precision to optimize thrust and efficiency. Wiring and plumbing 
                    (e.g., methane/oxygen lines) are woven in as molecular conduits.
                </Typography>
            </Box>
        </>
    )
}