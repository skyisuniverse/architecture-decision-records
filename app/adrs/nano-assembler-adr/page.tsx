import { Box, Typography } from "@mui/material";

export default async function Page() {    
    return(
        <Box>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Nano-assembler ADR
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
                Device (e.g. similar to a 3D-Printer but for Nano-Assembly) for nano-assembling
                of products. (is it a packaging for seed nanobots-swarm (nanofactory)) ?
            </Typography>
        </Box>
    );
}