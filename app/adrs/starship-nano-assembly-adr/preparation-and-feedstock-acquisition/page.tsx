import { Box, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        <Box>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Preparation and Feedstock Acquisition
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
                1. Preparation and Feedstock Acquisition
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                - Raw Material Gathering: Start with a "feedstock reservoir"—a vat or 
                environmental extractor containing abundant elements like carbon (from CO2 
                in the air or graphite), iron (from ore or recycled steel), chromium and 
                nickel (for stainless steel alloys), and trace elements for specialized 
                components like engine nozzles. Nanobots could disassemble nearby scrap 
                metal, soil, or even atmospheric gases to harvest atoms, using energy from 
                solar panels or fusion reactors to break bonds.
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                - Design Input: Upload a digital blueprint of the Starship into an AI 
                overseer. This model includes every detail: the booster's 33 Raptor engines, 
                the ship's heat shield tiles (made from advanced ceramics), cryogenic tanks 
                for liquid methane and oxygen, avionics, and structural reinforcements. The 
                AI optimizes for MNT, breaking the design into modular atomic "recipes."
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                - Seed Nanobot Deployment: Introduce a small batch of "seed" 
                assemblers—perhaps a few million nanobots, each about 100 nanometers in 
                size, equipped with manipulator arms, sensors, and replication modules. 
                These could be produced in a lab-scale nanofactory and transported to the 
                assembly site (e.g., a launch pad or orbital platform).
            </Typography>
        </Box>
    )
}