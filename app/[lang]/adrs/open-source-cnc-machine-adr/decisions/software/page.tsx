import { ADRHeader } from '@/app/[lang]/components/ADRHeader';
import { Link, Typography } from '@mui/material';
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
                        <ListItemText primary="CAD / CAM Software" />
                    </ListItem>

                    <ListItem>
                        <ListItemText primary="Pokeys Software: Software for the CNC Interface Board" />
                    </ListItem>

                    <ListItem>
                        <ListItemText primary="CNC Machine Controller Software" />
                    </ListItem>
                </List>
            </Box>

            {/* <Typography variant="body1" gutterBottom marginTop={5}>
                
            </Typography> */}

            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              <Link 
                href="https://linuxcnc.org/"
                color="inherit"
                target="_blank"
                sx={{ marginBottom: 2 }}
              >
                LinuxCNC.org
              </Link>
          </Typography>

          <Typography variant="h6" sx={{ marginBottom: 2 }}>
              <Link 
                href="https://www.freecad.org/"
                color="inherit"
                target="_blank"
                sx={{ marginBottom: 2 }}
              >
                FreeCAD.org
              </Link>
          </Typography>

          <Typography variant="h6" sx={{ marginBottom: 2 }}>
              <Link 
                href="https://github.com/freecad/freecad"
                color="inherit"
                target="_blank"
                sx={{ marginBottom: 2 }}
              >
                FreeCAD Github
              </Link>
          </Typography>
        </>
    )
}