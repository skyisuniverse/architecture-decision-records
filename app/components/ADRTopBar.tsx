'use client';
import { useTheme } from '@mui/material/styles';
import {
  Toolbar,
  IconButton,
  Typography,
  Box,
  Grid,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import ADRSelect from './ADRSelect';
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import { drawerWidth } from './ResponsiveDrawer';

interface AppBarProps {
  open?: boolean;
}

const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  [theme.breakpoints.up('sm')]: {
    ...(open
      ? {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: `${drawerWidth}px`,
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }
      : {
          width: '100%',
          marginLeft: 0,
        }),
  },
}));

interface ADRTopBarProps {
  open: boolean;
  onDrawerOpen: () => void;
  onMobileDrawerToggle: () => void;
}

export default function ADRTopBar({
  open,
  onDrawerOpen,
  onMobileDrawerToggle,
}: ADRTopBarProps) {
  const theme = useTheme();

  return (
    <StyledAppBar position="fixed" open={open}>
      <Toolbar>
        {/* Mobile button */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onMobileDrawerToggle}
          edge="start"
          sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Desktop button (only when closed) */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onDrawerOpen}
          edge="start"
          sx={{
            mr: 2,
            display: { xs: 'none', sm: open ? 'none' : 'block' },
          }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid size="grow">
              <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                <Link href="/" color="inherit">
                  Architecture Decision Records
                </Link>
              </Typography>
            </Grid>

            <Grid size={4}>
              <ADRSelect />
            </Grid>

            <Grid size="grow">
              <Typography variant="h6" noWrap component="div" align="right">
                <Link
                  href="https://rd-center.vercel.app/"
                  color="inherit"
                  target="_blank"
                >
                  R&amp;D Center
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
}