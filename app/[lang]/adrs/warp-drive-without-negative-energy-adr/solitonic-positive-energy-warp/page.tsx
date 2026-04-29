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
                        href="https://rd-center.vercel.app/theoretical-physics/warp-drive/warp-drive-without-negative-energy"
                        color="inherit"
                        target="_blank"
                        sx={{ marginBottom: 2 }}
                        >
                        Warp Drive Without Negative Energy
                    </Link>
                </Typography>

                <Typography variant="h6" gutterBottom marginTop={5}>
                    Solitonic Positive-Energy Warp (Erik Lentz, 2021)
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    This approach uses soliton-like structures—self-sustaining waves in spacetime—sourced 
                    entirely by positive energy densities. Solitons are stable, localized energy configurations 
                    that propagate without dispersing, allowing the warp bubble to form and move without exotic 
                    matter. Unlike subluminal models, this could enable hyper-fast (superluminal effective) 
                    travel in principle, as the bubble's motion isn't limited by local causality. Parallel work 
                    by researchers like Fell and Heisenberg explores similar positive-energy families.
                </Typography>
            </Box>
        </>
    )
}