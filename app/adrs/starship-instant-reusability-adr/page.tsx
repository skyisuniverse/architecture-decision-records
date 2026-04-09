import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        
    <Box>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Starship Instant Reusability ADR
        </Typography>

        <Typography sx={{ marginBottom: 2 }}>
            With what type of Starship engine is instant reusability achievable best of all?
        </Typography>

        <Typography sx={{ marginBottom: 2 }}>
            - Chemical engines (methalox)
        </Typography>

        <Typography sx={{ marginBottom: 2 }}>
            - Fusion engine
        </Typography>

        <Typography sx={{ marginBottom: 2 }}>
            - Warp drive
        </Typography>

        <Typography sx={{ marginBottom: 2 }}>
            Assess instant reusability of (starship, launchpad, starbase infra, processes) ?
        </Typography>
        
        <Typography sx={{ marginBottom: 2 }}>
            Things like neccesity (or not) of propellant? Time and resource needed in each case, etc.?            
        </Typography>
        
        <Typography sx={{ marginBottom: 2 }}>
            e.g. think propellant storage? loading? infra? etc.
            air separation? (or not)?
        </Typography>

        <Typography sx={{ marginBottom: 2 }}>
            burning propellant to propulse, or () ?
        </Typography>

        <Typography sx={{ marginBottom: 2 }}>
            consequences of fire damage to pad? (with fusion engine? warp?)
        </Typography>

        <Typography sx={{ marginBottom: 2 }}>
            space of rocket used for propellant (storage / tank) or .... (payload) ?
        </Typography>
    </Box>
    )
}