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
                        href="https://rd-center.vercel.app/xai/alternative-hardware-for-ai-training"
                        color="inherit"
                        target="_blank"
                        sx={{ marginBottom: 2 }}
                        >
                        Alternative hardware for AI training
                    </Link>
                </Typography>

                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    1. Photonic Computing (Enhanced with POMMM, LightGen, 3D Platforms)
                </Typography>

                <Typography variant="body1" gutterBottom>
                    In-house development involves custom photonic chip design (using AI to cut design time from 
                    weeks to hours) and fab setup for optical components, costing $20-85B initially but declining 
                    with maturity. Production scales to LSI (500-20,000 actuators/chip) within 6 years, but initial 
                    fab build adds 2-3 years.
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Investments Needed</b>: $500M-1B for R&D/design (hundreds of engineers over 18 months); 
                    $5-10B for specialized fab (silicon photonics using existing semiconductor lines); 
                    $100-200M integration/energy setup. Total: $5.6-11.2B, offset by xAI's funding but 50-100x 
                    higher than procurement.
                </Typography>

                <Typography variant="body1" gutterBottom>
                    - <b>Timeline (0 to Hero)</b>: Months 0-18: R&D/design (AI-accelerated). Months 18-36: 
                    Fab construction/prototyping (300mm wafers). Months 36-42: Integration/scaling 
                    (500-1,000 chips). Months 42-43: Training (~6-12 hours). Hero: 43 months. Delays 
                    from yield optimization.
                </Typography>
            </Box>
        </>
    )
}