import { ADRHeader } from '@/app/[lang]/components/ADRHeader';
import { Box, Divider, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        <>
            <ADRHeader />
            <Box>
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
                    4. Computing and AI Breakthroughs
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    Designing and controlling MNT requires immense computational power.
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Quantum Computing for Simulations: Simulate molecular interactions for entire Starship
                    designs at atomic fidelity. Current supercomputers can't handle the complexity.
                    Breakthrough: Fault-tolerant quantum computers with millions of qubits, running
                    algorithms to model mechanosynthesis pathways and predict emergent properties.
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - AI-Driven System Design: Automate the blueprinting of nanobot behaviors and assembly sequences.
                    Breakthrough: Advanced AI (e.g., integrating machine learning with genetic algorithms) that designs
                    self-replicating systems, optimizes for efficiency, and incorporates error correction codes, drawing
                    from structural biology.
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Swarm Intelligence Algorithms: Coordinate trillions of nanobots without central failure points.
                    Breakthrough: Decentralized control systems using bio-inspired algorithms (e.g., ant colonies) or
                    quantum entanglement for communication, ensuring synchronized assembly over large areas.
                </Typography>

                <Divider />

                <Typography variant="h6" gutterBottom marginTop={5}>
                    1. Currently existing hardware
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Is currently existing hardware capable of computing necessary for nano-assembly?
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    How can we define compute for nano-assembly? What it actually is? 
                    (e.g. what processes / kinds of computations / programs / etc. ?)
                </Typography>

                <Divider />

                <Typography variant="h6" gutterBottom marginTop={5}>
                    2. Development of new alternative hardware for Nano-Assembly
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    If currently existing hardware is insufficient for nano-assembly computing tasks, consider
                    development of Photonic / Neuromorphic / Quantum hardware that would suffice. 
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Specify computing tasks (including type, scale) for nano-assembly
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Define requirements for computing & hardware based on computing tasks for nano-assembly.
                    TechSpecs (?)
                </Typography>

                <Divider />

                <Typography variant="h6" gutterBottom marginTop={5}>
                    3. TechSpecs for hardware for Nano-Assembly computing tasks
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    ...
                </Typography>
            </Box>
        </>
    )
}