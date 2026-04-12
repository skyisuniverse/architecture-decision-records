import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MuiNextLink from '@/app/components/MuiNextLink';

export default async function Page() {
    return(
        
    <Box>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Generic R&D Center ADR
        </Typography>

        <Typography variant="body1" gutterBottom>
            This page is dedicated for architecture decisions & technologies that are generic (can be shared)
            across variety of other domains/ADRs (architecture decision records).
        </Typography>

        <Typography variant="body1" gutterBottom>
            For example, <MuiNextLink href="/adrs/generic-r&d-center-adr/use-nano-assembly-for-production">nano-assembly 
            can become a manufacturing, production method of many different types of objects</MuiNextLink> and 
            can be applicable in a variety of different domains (for doing ground works, growing
            launch pads, growing starships, different types of chips, etc.)
        </Typography>
    </Box>
    
    )
}