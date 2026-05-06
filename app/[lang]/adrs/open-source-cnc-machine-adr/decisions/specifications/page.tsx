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
                <Typography variant="body1" gutterBottom marginTop={5}>
                    Example Specifications:
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText 
                        primary="Dimensions 5xm600"
                        secondary="650 x 670 x 480mm"
                        slotProps={{
                            primary: { sx: { fontWeight: 'bold' } }
                        }}
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemText 
                        primary="Working volume 5xm600"
                        secondary="990 x 780 x 1000mm"
                        slotProps={{
                            primary: { sx: { fontWeight: 'bold' } }
                        }}
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemText 
                        primary="Max travel speed XYZ"
                        secondary="15000mm/min (X,Y); 3000-6000mm/min (Z)"
                        slotProps={{
                            primary: { sx: { fontWeight: 'bold' } }
                        }}
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemText 
                        primary="Max travel speed BC"
                        secondary="20rpm(C) 20rpm(B)"
                        slotProps={{
                            primary: { sx: { fontWeight: 'bold' } }
                        }}
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemText 
                        primary="Motors used"
                        secondary="NEMA 23 ( X / Y / Z / B / C)"
                        slotProps={{
                            primary: { sx: { fontWeight: 'bold' } }
                        }}
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemText 
                        primary="Linear guides"
                        secondary="HIWIN High accuracy Rails and Blocks"
                        slotProps={{
                            primary: { sx: { fontWeight: 'bold' } }
                        }}
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemText 
                        primary="Structure material"
                        secondary="Anodized Aluminum"
                        slotProps={{
                            primary: { sx: { fontWeight: 'bold' } }
                        }}
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemText 
                        primary="Protection"
                        secondary="5mm Acrylic enclosure"
                        slotProps={{
                            primary: { sx: { fontWeight: 'bold' } }
                        }}
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemText 
                        primary="Power requirements"
                        secondary="1200W, 220V, 60hz, 13A"
                        slotProps={{
                            primary: { sx: { fontWeight: 'bold' } }
                        }}
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemText 
                        primary="Weight"
                        secondary="85kg"
                        slotProps={{
                            primary: { sx: { fontWeight: 'bold' } }
                        }}
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemText 
                        primary="Computer interface"
                        secondary="USB"
                        slotProps={{
                            primary: { sx: { fontWeight: 'bold' } }
                        }}
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemText 
                        primary="Computer requirements"
                        secondary="Windows operating system with Mach3"
                        slotProps={{
                            primary: { sx: { fontWeight: 'bold' } }
                        }}
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemText 
                        primary="Controller"
                        secondary="MACH3 (to be purchased separately from an official vendor)"
                        slotProps={{
                            primary: { sx: { fontWeight: 'bold' } }
                        }}
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemText 
                        primary="Software"
                        secondary="supports any CAD/CAM software"
                        slotProps={{
                            primary: { sx: { fontWeight: 'bold' } }
                        }}
                        />
                    </ListItem>
                </List>
            </Box>
        </>
    )
}