import { Box, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        <Box>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Use Efficient Nano-Energy Sources
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                <Link 
                    href="https://rd-center.vercel.app/nano-assembly/scientific-breakthroughs-for-nano-assembly"
                    color="inherit"
                    target="_blank"
                    sx={{ marginBottom: 2 }}
                    >
                    Scientific breakthroughs for Nano-Assembly
                </Link>
            </Typography>

            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                6. Energy and Sustainability Advances
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                Assembly at atomic scales is energy-intensive.
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                - Efficient Nano-Energy Sources: Power nanobots without bulky batteries. Breakthrough: Miniaturized energy
                harvesters (e.g., piezoelectric or photovoltaic at nanoscale) or chemical fuels converted with 99% efficiency,
                perhaps using ambient heat or light.
            </Typography>
        </Box>
    )
}