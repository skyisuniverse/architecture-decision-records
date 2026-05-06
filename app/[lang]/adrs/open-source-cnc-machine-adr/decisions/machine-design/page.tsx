import { ADRHeader } from '@/app/[lang]/components/ADRHeader';
import Box from '@mui/material/Box';
import Image from 'next/image';
import localImage from '../../../../../../public/images/adrs/open-source-cnc-machine-adr/CARVER-X5-Design.jpeg';
import { Typography } from '@mui/material';

export default async function Page() {
    return(
        <>
            <ADRHeader />
            <Box>
                <Typography variant="body1" gutterBottom marginTop={5}>
                    Example design of CNC Machine:
                </Typography>
                {/* <br /> */}
                <Image src={localImage} alt="Art Spaces" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </Box>
        </>
    )
}