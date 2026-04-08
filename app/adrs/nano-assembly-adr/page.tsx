import { Box, Typography } from "@mui/material";

export default async function Page() {    
    return(
        <Box>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Nano-assembly ADR
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                How do we approach / work with different substances with nano-assembly (nanobot swarms):
                
                - Ground (in context of ground works)
                - Metal (in context of Starship production)
                - Gases (in context of propellant generation / storage(?))
                - Brain (in context of BCIs / autism healing / augmentation / etc.)
                - Computing substrates (in context of compute & chips production)
                - etc.
            </Typography>
        </Box>
    );
}