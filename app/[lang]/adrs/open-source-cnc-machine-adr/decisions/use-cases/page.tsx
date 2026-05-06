import { ADRHeader } from '@/app/[lang]/components/ADRHeader';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default async function Page() {
    return(
        <>
            <ADRHeader />
            <Box>
                <List>
                    <ListItem>
                        <ListItemText
                        primary="Humanoid or robotic projects"
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemText
                        primary="Precision parts for drones, CNC machines, 3D printers, electric vehicles, aerospace prototypes"
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemText
                        primary="Tooling, molds, and dies for injection molding or composite layups."
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemText
                        primary="Educational/workshop use: teaching advanced manufacturing, CAM programming, metrology in FabLabs or makerspaces."
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemText
                        primary="Production of hardware (robot kits, mechanical modules, non-robot items)."
                        />
                    </ListItem>
                </List>
            </Box>
        </>
    )
}