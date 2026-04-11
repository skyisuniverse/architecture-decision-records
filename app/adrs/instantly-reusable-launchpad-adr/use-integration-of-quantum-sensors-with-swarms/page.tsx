import { ADRHeader } from '@/app/components/ADRHeader';
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
                        href="https://rd-center.vercel.app/spacex/instantly-reusable-launchpad/scientific-breakthroughs-for-nano-assembled-launch-pad-for-starships"
                        color="inherit"
                        target="_blank"
                        sx={{ marginBottom: 2 }}
                        >
                        Scientific breakthroughs for Instantly Reusable Launchpad
                    </Link>
                </Typography>

                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    6. Quantum Sensors for Nanoscale Monitoring and Feedback
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    Embedded sensors ensure real-time damage detection and adaptation.
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - High-Resolution, Ambient Quantum Sensors: NV centers in diamond detect fields at nm scales; breakthroughs must enable nanosecond resolution in chips, monitoring stress/magnetic fields during launches. Trapped-ion sensors for forces.
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Integration with Swarms: Sensors must feedback to AI for preemptive repairs, requiring entanglement for correlated measurements.
                </Typography>
            </Box>
        </>
    )
}