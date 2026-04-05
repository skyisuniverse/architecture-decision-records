import { Box, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        <Box>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Completion and Launch Readiness (Super Heavy Booster)
            </Typography>
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
                5. Completion and Launch Readiness
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                - Fueling and Activation: With the structure complete, bots could even produce 
                and load propellants—synthesizing methane from carbon and hydrogen, and liquefying 
                oxygen from the air—directly into the tanks.
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                - Post-Assembly: The nanobot swarm deactivates or disassembles itself, recycling 
                into storage for future use. The finished Starship stands ready, potentially in a 
                fraction of the time and cost of today's methods (e.g., weeks instead of months, with 
                no supply chain dependencies).
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                - Scalability: This tech could enable mass production: replicate the process for 
                fleets of Starships, or even assemble them in space using asteroid-derived materials.
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                This scenario leverages MNT's strengths—precision, efficiency, and adaptability—to make 
                Starship assembly as routine as printing a document. However, challenges like managing 
                heat dissipation during rapid assembly or preventing unintended replication would need 
                robust safeguards. In practice, early versions might hybridize with current tech, like 
                using nanobots for critical components while traditionally building the bulk structure. 
                If we achieve this, it could accelerate space colonization by making mega-rockets 
                abundant and customizable.
            </Typography>
        </Box>
    )
}