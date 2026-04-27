'use client';
import { useTheme } from '@mui/material/styles';
import {
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import { drawerWidth } from './ResponsiveDrawer';

interface AppBarProps {
  open?: boolean;
}

const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  // ✅ Transition is now defined ONLY inside the sm+ breakpoint
  // This eliminates the duplicate-key error while keeping perfect animations
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
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
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
  const pathname = usePathname();

  const pages = ['Companies', 'Products', 'Services'];

  return (
    <StyledAppBar position="fixed" open={open}>
      <Toolbar>
        {/* Mobile drawer toggle (xs only) */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onMobileDrawerToggle}
          edge="start"
          sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Desktop drawer toggle (sm+ only when drawer is closed) */}
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

        {/* Logo / Title */}
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ mr: 2, flexGrow: 0 }}
        >
          <Link href="/" color="inherit" style={{ textDecoration: 'none' }}>
            Architecture Decision Records
          </Link>
        </Typography>

        {/* Desktop navigation (sm and up) – with active page highlighting */}
        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
          {pages.map((page) => {
            const href = `/${page.toLowerCase()}`;
            // Active when on the exact list page OR any sub-page
            const isActive =
              pathname === href || pathname.startsWith(`${href}/`);

            return (
              <Button
                key={page}
                component={Link}
                href={href}
                color="inherit"
                sx={{
                  my: 2,
                  display: 'block',
                  mx: 1,
                  ...(isActive && {
                    // borderBottom: '3px solid',
                    // borderColor: 'white',
                    // pb: '4px',
                    backgroundColor: 'white',
                    color: 'primary.dark'
                  }),
                }}
              >
                {page}
              </Button>
            );
          })}
        </Box>

        {/* R&D Center link (always on the right) */}
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ ml: 'auto' }}
        >
          <Link
            href="https://rd-center.vercel.app/"
            color="inherit"
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            R&D Center
          </Link>
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
}