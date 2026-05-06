import { ADRHeader } from '@/app/[lang]/components/ADRHeader';
import Box from '@mui/material/Box';
import Image from 'next/image';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import plasticElectronicEnclosureImage from '../../../../../../public/images/adrs/open-source-cnc-machine-adr/plastic-electronic-enclosure.jpg';
import controlBoardImage from '../../../../../../public/images/adrs/open-source-cnc-machine-adr/control-board.jpg';
import StepperMotorDriverImage from '../../../../../../public/images/adrs/open-source-cnc-machine-adr/tb6600-stepper-motor-driver.jpg';
import SensorCablesGathererBoard from '../../../../../../public/images/adrs/open-source-cnc-machine-adr/sensor-cables-gatherer-board.jpg';
import SensorInterfaceBoard from '../../../../../../public/images/adrs/open-source-cnc-machine-adr/sensors-interface-board.jpg';
import electronicSpeedController from '../../../../../../public/images/adrs/open-source-cnc-machine-adr/yep-60a-2-6s-sbec-brushless-electronic-speed-controller-esc.jpg';

import { Divider, Typography } from '@mui/material';

export default async function Page() {
    return(
        <>
            <ADRHeader />
            <Box>
                <List>
                    <ListItem>
                        <ListItemText 
                        primary="industrial plastic enclosure"
                        secondary="(400x500x240)"
                        slotProps={{
                            primary: { sx: { fontWeight: 'bold' } }
                        }}
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemText 
                        primary="motor drivers"
                        secondary="(set of drivers for each motor including)"
                        slotProps={{
                            primary: { sx: { fontWeight: 'bold' } }
                        }}
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemText 
                        primary="the spindle driver"
                        slotProps={{
                            primary: { sx: { fontWeight: 'bold' } }
                        }}
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemText 
                        primary="a USB interface control board"
                        slotProps={{
                            primary: { sx: { fontWeight: 'bold' } }
                        }}
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemText 
                        primary="a sensor interface board"
                        slotProps={{
                            primary: { sx: { fontWeight: 'bold' } }
                        }}
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemText 
                        primary="two 12v 42A DC Power Supply"
                        slotProps={{
                            primary: { sx: { fontWeight: 'bold' } }
                        }}
                        />
                    </ListItem>
                </List>
                <Divider />
                
                <Typography variant="body1" gutterBottom marginTop={5}>
                    Example of (CNC) Electronic Enclosure:
                </Typography>

                <Box sx={{ width: { xs: '100%', md: '50%' }, mb: 5 }}>
                <Image 
                    src={plasticElectronicEnclosureImage} 
                    alt="CNC Electronic Enclosure" 
                    sizes="(max-width: 900px) 100vw, 50vw" 
                    style={{ width: '100%', height: 'auto' }} 
                />
                </Box>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    control board
                </Typography>

                <Box sx={{ width: { xs: '100%', md: '50%' }, mb: 5 }}>
                <Image 
                    src={controlBoardImage} 
                    alt="Control Board" 
                    sizes="(max-width: 900px) 100vw, 50vw" 
                    style={{ width: '100%', height: 'auto' }} 
                />
                </Box>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Stepper Motor Driver
                </Typography>

                <Box sx={{ width: { xs: '100%', md: '50%' }, mb: 5 }}>
                <Image 
                    src={StepperMotorDriverImage} 
                    alt="Stepper Motor Driver" 
                    sizes="(max-width: 900px) 100vw, 50vw" 
                    style={{ width: '100%', height: 'auto' }} 
                />
                </Box>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    sensor cables gatherer board
                </Typography>

                <Box sx={{ width: { xs: '100%', md: '50%' }, mb: 5 }}>
                <Image 
                    src={SensorCablesGathererBoard} 
                    alt="Sensor Cables Gatherer Board" 
                    sizes="(max-width: 900px) 100vw, 50vw" 
                    style={{ width: '100%', height: 'auto' }} 
                />
                </Box>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    sensors interface board
                </Typography>

                <Box sx={{ width: { xs: '100%', md: '50%' }, mb: 5 }}>
                <Image 
                    src={SensorInterfaceBoard} 
                    alt="Sensors Interface Board" 
                    sizes="(max-width: 900px) 100vw, 50vw" 
                    style={{ width: '100%', height: 'auto' }} 
                />
                </Box>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Spindle motor Driver
                </Typography>

                <Box sx={{ width: { xs: '100%', md: '50%' }, mb: 5 }}>
                <Image 
                    src={electronicSpeedController} 
                    alt="Spindle Motor Driver" 
                    sizes="(max-width: 900px) 100vw, 50vw" 
                    style={{ width: '100%', height: 'auto' }} 
                />
                </Box>
            </Box>
        </>
    )
}