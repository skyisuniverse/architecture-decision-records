'use client';

import { useRouter } from 'next/navigation';
import { useCurrentADR } from '@/app/hooks/useCurrentADR';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListSubheader,
  type SelectChangeEvent,
} from '@mui/material';

export default function ADRSelect() {
    const router = useRouter();
    const { currentSlug } = useCurrentADR();

    const handleChange = (event: SelectChangeEvent) => {
        const newSlug = event.target.value as string;
        router.push(`/adrs/${newSlug}`);
    };

    return (
        <FormControl fullWidth>
            <InputLabel 
                id="demo-simple-select-label" 
                // sx={{ color: 'white' }}
                sx={{ 
                    color: 'white', 
                    '&.Mui-focused': { color: 'white' } 
                }}
                >Select ADR
            </InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currentSlug}
                label="Select ADR"
                onChange={handleChange}
                sx={{
                    color: "white", // Text color
                    // backgroundColor: "gray", // Background color
                    '.MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white', // Default border color
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white', // Border color when focused
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white', // Border color on hover
                    },
                    '.MuiSvgIcon-root ': {
                    fill: "white !important", // Dropdown arrow icon color
                    }
                }}
            >
                <ListSubheader>R&D Center ADRs (Generic for other ADRs)</ListSubheader>
                <MenuItem value={'generic-r&d-center-adr'}>Generic R&D Center ADR</MenuItem>
                <MenuItem value={'nano-assembly-adr'}>Nano-assembly ADR</MenuItem>

                <ListSubheader>SpaceX Falcon ADRs</ListSubheader>
                <MenuItem value={'falcon-9-and-heavy-nano-assembly-adr'}>Falcon 9 & Heavy Nano-Assembly ADR</MenuItem>
                
                <ListSubheader>SpaceX Starship ADRs</ListSubheader>
                <MenuItem value={'starship-instant-reusability-adr'}>Starship Instant Reusability ADR</MenuItem>
                <MenuItem value={'starship-nano-assembly-adr'}>Starship Nano-assembly ADR</MenuItem>
                <MenuItem value={'nano-assembled-orbital-heat-shield-adr'}>Nano-Assembled Orbital Heat Shield ADR</MenuItem>
                <MenuItem value={'3d-printer-for-starships-adr'}>3D Printer for Starships ADR</MenuItem>
                <MenuItem value={'3d-printing-starships-adr'}>3D Printing Starships ADR</MenuItem>
                <MenuItem value={'starship-forge-ai-adr'}>Starship Forge-AI ADR</MenuItem>
                <MenuItem value={'starship-with-a-fusion-engine-adr'}>Starship with a Fusion engine ADR</MenuItem>
                <MenuItem value={'fusion-starship-adr'}>Fusion Starship ADR</MenuItem>
                
                <ListSubheader>SpaceX Starbase Infra ADRs</ListSubheader>
                <MenuItem value={'instantly-reusable-launchpad-adr'}>Instantly Reusable Launchpad ADR</MenuItem>
                <MenuItem value={'nano-assembled-mechazilla-adr'}>Nano-Assembled Mechazilla ADR</MenuItem>
                <MenuItem value={'nanoassembly-boosted-spacex-adr'}>Nanoassembly-boosted SpaceX ADR</MenuItem>
                <MenuItem value={'spacex-automated-with-optimi-adr'}>SpaceX automated with Optimi ADR</MenuItem>
                <MenuItem value={'air-separation-adr'}>Air Separation ADR</MenuItem>
                <MenuItem value={'fusion-power-plant-adr'}>Fusion Power Plant ADR</MenuItem>
                <MenuItem value={'nano-assembled-ground-works-adr'}>Nano-Assembled Ground Works ADR</MenuItem>
                <MenuItem value={'propellant-generation-adr'}>Propellant Generation ADR</MenuItem>
                <MenuItem value={'smart-starbase-adr'}>Smart Starbase ADR</MenuItem>
                
                <ListSubheader>SpaceX Planet Colonization ADRs</ListSubheader>
                <MenuItem value={'terraforming-mars-adr'}>Terraforming Mars ADR</MenuItem>
                <MenuItem value={'compressing-mars-terraforming'}>Compressing Mars Terraforming from 100,000+ to 10 years</MenuItem>
                <MenuItem value={'mass-driver-adr'}>Mass Driver ADR</MenuItem>
                <MenuItem value={'solar-system-colonization-adr'}>Solar System Colonization ADR</MenuItem>

                <ListSubheader>SpaceX Starlink ADRs</ListSubheader>
                <MenuItem value={'nano-assembled-starlink-adr'}>Nano-Assembled Starlink ADR</MenuItem>
                
                <ListSubheader>Tesla ADRs</ListSubheader>
                <MenuItem value={'nano-assembled-optimus-adr'}>Nano-assembled Optimus ADR</MenuItem>
                <MenuItem value={'nano-assembled-cybercab-adr'}>Nano-assembled Cybercab ADR</MenuItem>
                <MenuItem value={'nano-assembled-semi'}>Nano-assembled Semi ADR</MenuItem>
                <MenuItem value={'faster-factories-with-optimus-semi-cybercab-adr'}>Faster Factories With Optimus Semi Cybercab ADR</MenuItem>
                <MenuItem value={'solar-powered-tesla-adr'}>Solar-powered Tesla ADR</MenuItem>
                <MenuItem value={'tesla-automated-with-optimi-adr'}>Tesla automated with Optimi ADR</MenuItem>
                
                <ListSubheader>xAI ADRs</ListSubheader>
                <MenuItem value={'alternative-hardware-for-ai-training-adr'}>Alternative hardware for AI Training ADR</MenuItem>
                <MenuItem value={'neuromorphic-computing-adr'}>Neuromorphic Computing ADR</MenuItem>
                <MenuItem value={'photonic-computing-adr'}>Photonic Computing ADR</MenuItem>
                <MenuItem value={'quantum-computing-adr'}>Quantum Computing ADR</MenuItem>
                <MenuItem value={'grok-cad-adr'}>Grok CAD ADR</MenuItem>
                <MenuItem value={'direct-binary-code-generation-adr'}>Direct Bbinary Code Generation ADR</MenuItem>
                <MenuItem value={'train-6t-parameter-models-in-minutes-adr'}>Train 6t parameter models in minutes ADR</MenuItem>
                <MenuItem value={'xai-powered-entirely-with-solar-adr'}>xAI powered entirely with solar ADR</MenuItem>
                <MenuItem value={'xais-100m-rubin-equivalent-compute-adr'}>xAIs 100M Rubin equivalent compute ADR</MenuItem>

                <ListSubheader>NeuraLink ADRs</ListSubheader>
                <MenuItem value={'healing-autism-perspective-neuralink-bcis-adr'}>Healing Autism & Perspective Neuralink BCIs ADR</MenuItem>
                <MenuItem value={'neuralink-bci-overcoming-serial-attention-limitation-adr'}>[NeuraLink] [BCI] Overcoming serial attention limitation</MenuItem>
            </Select>
        </FormControl>
    )
}