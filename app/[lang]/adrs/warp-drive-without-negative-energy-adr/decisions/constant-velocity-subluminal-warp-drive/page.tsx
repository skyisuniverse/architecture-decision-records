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
                        href="https://rd-center.vercel.app/theoretical-physics/warp-drive/warp-drive-without-negative-energy"
                        color="inherit"
                        target="_blank"
                        sx={{ marginBottom: 2 }}
                        >
                        Warp Drive Without Negative Energy
                    </Link>
                </Typography>

                <Typography variant="h6" gutterBottom marginTop={5}>
                    Constant-Velocity Subluminal Warp Drive (Applied Physics Lab, 2021 onward)
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Developed by researchers at the Advanced Propulsion Laboratory (APL), this model uses a stable shell 
                    of ordinary matter to create an Alcubierre-like "shift vector" in spacetime. Instead of negative energy, 
                    it relies on positive ADM mass (a measure of total energy in spacetime) and floating "bubbles" of 
                    spacetime geometry. The bubble envelops the ship, warping space around it without the ship experiencing 
                    acceleration. This version is subluminal (below light speed) but could achieve high fractions 
                    of c (speed of light), like 0.99c, making travel feel instantaneous from the ship's perspective due 
                    to time dilation. It's the first peer-reviewed model fully satisfying all energy conditions in general 
                    relativity. A 2025 update refines it for constant velocity, reducing previous negative energy requirements 
                    by factors of 100 or more in related designs.
                </Typography>
            </Box>
        </>
    )
}