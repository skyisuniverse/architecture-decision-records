import { ADRHeader } from '@/app/[lang]/components/ADRHeader';
import Box from '@mui/material/Box';
import Image from 'next/image';
import machineDesignImage from '../../../../../../public/images/adrs/open-source-cnc-machine-adr/CARVER-X5-Design.jpeg';
import frameImage from '../../../../../../public/images/adrs/open-source-cnc-machine-adr/Machine-Frame.jpeg';
import Y2XBridgeImage from '../../../../../../public/images/adrs/open-source-cnc-machine-adr/Y2X-Bridge.jpeg';
import X2ZJointAssemblyImage from '../../../../../../public/images/adrs/open-source-cnc-machine-adr/X2Z-joint-assembly.jpeg';
import ZAxisImage from '../../../../../../public/images/adrs/open-source-cnc-machine-adr/Z-Axis.jpeg';
import SwivelHeadImage from '../../../../../../public/images/adrs/open-source-cnc-machine-adr/Swivel-Head.jpeg';
import SpindleMotor from '../../../../../../public/images/adrs/open-source-cnc-machine-adr/Spindle-Motor.jpeg';
import XYAxisMotorModuleImage from '../../../../../../public/images/adrs/open-source-cnc-machine-adr/XY-Axis-Motor-Module.jpeg';
import ZAxisMotorModuleImage from '../../../../../../public/images/adrs/open-source-cnc-machine-adr/Z-Axis-Motor-Module.jpeg';

import { Typography } from '@mui/material';

export default async function Page() {
    return(
        <>
            <ADRHeader />
            <Box>
                <Typography variant="body1" gutterBottom marginTop={5}>
                    Example of (CNC) Machine Composition:
                </Typography>
                {/* <br /> */}
                <Image src={machineDesignImage} alt="Art Spaces" sizes="100vw" style={{ width: '100%', height: 'auto' }} />

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Frame
                </Typography>
                <Image src={frameImage} alt="Art Spaces" sizes="100vw" style={{ width: '100%', height: 'auto' }} />

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Y2X Bridge
                </Typography>
                <Image src={Y2XBridgeImage} alt="Art Spaces" sizes="100vw" style={{ width: '100%', height: 'auto' }} />

                <Typography variant="body1" gutterBottom marginTop={5}>
                    X2Z Joint Assembly Image
                </Typography>
                <Image src={X2ZJointAssemblyImage} alt="Art Spaces" sizes="100vw" style={{ width: '100%', height: 'auto' }} />

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Z Axis
                </Typography>
                <Image src={ZAxisImage} alt="Art Spaces" sizes="100vw" style={{ width: '100%', height: 'auto' }} />

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Swivel Head
                </Typography>
                <Image src={SwivelHeadImage} alt="Art Spaces" sizes="100vw" style={{ width: '100%', height: 'auto' }} />

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Spindle Motor
                </Typography>
                <Image src={SpindleMotor} alt="Art Spaces" sizes="100vw" style={{ width: '100%', height: 'auto' }} />

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Motor Modules
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    X/Y Axis Motor Module
                </Typography>
                <Image src={XYAxisMotorModuleImage} alt="Art Spaces" sizes="100vw" style={{ width: '100%', height: 'auto' }} />

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Z Axis Motor Module
                </Typography>
                <Image src={ZAxisMotorModuleImage} alt="Art Spaces" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </Box>
        </>
    )
}