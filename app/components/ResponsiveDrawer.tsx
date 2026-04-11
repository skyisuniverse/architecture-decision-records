'use client';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  IconButton,
  styled,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCurrentADR } from '@/app/hooks/useCurrentADR';
import Stack from '@mui/material/Stack';
import { StatusChip } from './StatusChip';
import { ADRItem } from '../types/adr';

export const drawerWidth = 240;

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

interface Props {
  // Desktop: persistent + collapsible
  open: boolean;
  onDesktopDrawerClose: () => void;

  // Mobile: temporary
  mobileOpen: boolean;
  onMobileDrawerClose: () => void;

  /** Injected by the documentation to work in an iframe. Remove when copying. */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
    const {
        window,
        open,
        onDesktopDrawerClose,
        mobileOpen,
        onMobileDrawerClose,
    } = props;

    const { currentAdrsList } = useCurrentADR();
    const pathname = usePathname();

    const container = window !== undefined ? () => window().document.body : undefined;

    const drawerContent = (onClose: () => void) => (
        <div>
        <DrawerHeader>
            <IconButton onClick={onClose}>
            <ChevronLeftIcon />
            </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            {currentAdrsList.map((adr: ADRItem) => (   // ← type is ADRItem[] in your real lists
                <ListItem key={adr.title} disablePadding>
                    <ListItemButton
                        component={Link}
                        href={adr.link}
                        selected={pathname === adr.link}
                        >
                        <Stack spacing={2}>
                            <ListItemText primary={adr.title} secondary={adr.date}/>
                            <StatusChip status={adr.status} />
                        </Stack>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
        </div>
    );
    
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
    )
}