'use client';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import "./globals.css";
import ResponsiveDrawer from './components/ResponsiveDrawer';

import ADRTopBar from './components/ADRTopBar';
import { StyledMain } from './components/StyledMain';
import { DrawerHeader } from './components/ResponsiveDrawer';
import ADRBottomNav from './components/ADRBottomNav';

// NEW: Import the provider
import { NavigationProvider } from './contexts/navigation-context';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // MUI
  const theme = useTheme();
  
  // Drawer
  const [open, setOpen] = React.useState(true);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerOpen = () => { setOpen(true); };
  const handleMobileDrawerToggle = () => { setMobileOpen((prev) => !prev); };
  const handleMobileDrawerClose = () => { setMobileOpen(false); };
  const handleDesktopDrawerClose = () => { setOpen(false); };
  
  return (
    <html lang="en" className={roboto.variable}>
      <body className="min-h-full flex flex-col">
        <AppRouterCacheProvider options={{ key: 'css' }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            {/* NavigationProvider wraps everything that needs drawer state */}
            <NavigationProvider>
              <Box sx={{ display: 'flex' }}>
                
                <ADRTopBar
                  open={open}
                  onDrawerOpen={handleDrawerOpen}
                  onMobileDrawerToggle={handleMobileDrawerToggle}
                />

                <ResponsiveDrawer
                  open={open}
                  onDesktopDrawerClose={handleDesktopDrawerClose}
                  mobileOpen={mobileOpen}
                  onMobileDrawerClose={handleMobileDrawerClose}
                />

                <StyledMain open={open}>
                  <DrawerHeader />
                  {children}
                  <ADRBottomNav />
                </StyledMain>

              </Box>
            </NavigationProvider>

          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}