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
                        href="https://rd-center.vercel.app/spacex/instantly-reusable-launchpad/scientific-breakthroughs-for-nano-assembled-launch-pad-for-starships"
                        color="inherit"
                        target="_blank"
                        sx={{ marginBottom: 2 }}
                        >
                        Scientific breakthroughs for Instantly Reusable Launchpad
                    </Link>
                </Typography>

                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    2. Self-Replicating Nanobot Swarms
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    The design relies on exponential scaling of swarms from a small seed to trillions of bots for rapid construction and repairs.
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Controlled Self-Replication Mechanisms: Today's self-replicating systems are conceptual or biological (e.g., DNA-based "xenobots" that replicate kinematically). Breakthroughs must enable mechanical self-replication at nanoscale, using mechanosynthesis to assemble daughter bots from environmental feedstock without errors. This includes error-correcting codes in bot "DNA" (e.g., redundant molecular blueprints) and failsafes like replication limits or external shutdown signals to avoid runaway growth.
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Swarm Coordination in Harsh Environments: Swarms need to operate in high-heat, high-vibration settings. Advances in emergent behaviors—drawing from ant colonies or bacterial quorum sensing—must scale to nanoscale, enabling collective tasks like trench excavation or surface reconfiguration. Breakthroughs include robust communication (e.g., acoustic or chemical signaling) resilient to exhaust plumes, with bots surviving {'>'}3,000°C via phase-change materials.
                </Typography>
            </Box>
        </>
    )
}