'use client';

import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Divider,
  IconButton,
  styled,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Link from 'next/link';


const drawerWidth = 240;

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

interface ADRItem {
  title: string;
  link: string;
}

interface Props {
  /** Injected by the documentation to work in an iframe. Remove when copying. */
  window?: () => Window;
  adrsList: ADRItem[];
  pathname: string;
  
  // Desktop: persistent + collapsible
  open: boolean;
  onDesktopDrawerClose: () => void;

  // Mobile: temporary
  mobileOpen: boolean;
  onMobileDrawerClose: () => void;
}

export default function ResponsiveDrawer(props: Props) {
    const {
        window,
        adrsList,
        pathname,
        open,
        onDesktopDrawerClose,
        mobileOpen,
        onMobileDrawerClose,
    } = props;

    const container = window !== undefined ? () => window().document.body : undefined;
    // const [mobileOpen, setMobileOpen] = React.useState(false);
    // const [isClosing, setIsClosing] = React.useState(false);

    // const handleDrawerClose = () => {
    //     setIsClosing(true);
    //     setMobileOpen(false);
    // };

    // const handleDrawerTransitionEnd = () => {
    //     setIsClosing(false);
    // };

    // const handleDrawerToggle = () => {
    //     if (!isClosing) {
    //     setMobileOpen(!mobileOpen);
    //     }
    // };

    const drawerContent = (onClose: () => void) => (
        <div>
        <DrawerHeader>
            <IconButton onClick={onClose}>
            <ChevronLeftIcon />
            </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            {adrsList.map((adr) => (
            <ListItem key={adr.title} disablePadding>
                <ListItemButton
                component={Link}
                href={adr.link}
                selected={pathname === adr.link}
                >
                <ListItemText primary={adr.title} />
                </ListItemButton>
            </ListItem>
            ))}
        </List>
        </div>
    );
    
    // const drawer = (
    //     <div>
    //         {/* Header with close button (only visible on mobile) */}
    //         <Toolbar>
    //             <Box sx={{ display: { sm: 'none' }, flexGrow: 1 }}>
    //             <IconButton onClick={onDrawerClose} edge="start">
    //                 {/* <ChevronLeftIcon /> */}
    //             </IconButton>
    //             </Box>
    //         </Toolbar>

    //         <Divider />

    //         <List>
    //             {adrsList.map((adr) => (
    //             <ListItem key={adr.title} disablePadding>
    //                 <ListItemButton
    //                     component={Link}
    //                     href={adr.link}
    //                     selected={pathname === adr.link}
    //                 >
    //                 <ListItemText primary={adr.title} />
    //                 </ListItemButton>
    //             </ListItem>
    //             ))}
    //         </List>
    //     </div>
    // );

    // Remove this const when copying and pasting into your project.
    // const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="ADR navigation"
        >
            {/* 1. Mobile — temporary drawer (overlay) */}
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={onMobileDrawerClose}
                sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                slotProps={{
                root: { keepMounted: true },
                }}
            >
                {drawerContent(onMobileDrawerClose)}
            </Drawer>

            {/* 2. Desktop — persistent + collapsible drawer */}
            <Drawer
                variant="persistent"
                open={open}
                sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawerContent(onDesktopDrawerClose)}
            </Drawer>
        </Box>
        
        // <Box
        //     component="nav"
        //     sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        //     aria-label="ADR navigation"
        // >
        //     {/* Temporary drawer - mobile only */}
        //     <Drawer
        //         container={container}
        //         variant="temporary"
        //         open={mobileOpen}
        //         onClose={onDrawerClose}
        //         sx={{
        //         display: { xs: 'block', sm: 'none' },
        //         '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        //         }}
        //         slotProps={{
        //         root: {
        //             keepMounted: true, // Better open performance on mobile
        //         },
        //         }}
        //     >
        //         {drawer}
        //     </Drawer>

        //     {/* Permanent drawer - desktop only */}
        //     <Drawer
        //         variant="permanent"
        //         sx={{
        //         display: { xs: 'none', sm: 'block' },
        //         '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        //         }}
        //         open
        //     >
        //         {drawer}
        //     </Drawer>
        // </Box>
    )
}