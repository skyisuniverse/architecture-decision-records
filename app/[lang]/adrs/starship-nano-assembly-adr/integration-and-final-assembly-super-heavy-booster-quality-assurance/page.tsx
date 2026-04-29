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
                    4. Integration and Final Assembly
                </Typography>

                {/* <Typography sx={{ marginBottom: 2 }}>
                    Assembly at atomic scales is energy-intensive.
                </Typography> */}

                <Typography sx={{ marginBottom: 2 }}>
                    - Quality Assurance: A diagnostic swarm scans the entire vehicle, atom by atom, 
                    for defects. Any flaws are disassembled and rebuilt instantly. AI simulations run 
                    virtual stress tests, incorporating real-time material data.
                </Typography>
            </Box>
        </>
    )
}