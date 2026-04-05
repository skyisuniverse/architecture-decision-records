'use client';
// import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import Link from '@mui/material/Link';
import Link from 'next/link';

// Select
import { usePathname } from 'next/navigation'

import "./globals.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useRouter } from 'next/navigation';
import { AdrsList, NanoassemblyAdr, NanoassemblyAdrsList } from './adrs/nano-assembly-adr/nano-assembly-adrs-list';
import { InstantlyReusableLaunchpadAdrsList } from './adrs/instantly-reusable-launchpad-adr/instantly-reusable-launchpad-adrs-list';
import { StarshipNanoassemblyAdrsList } from './adrs/starship-nano-assembly-adr/starship-nano-assembly-adrs-list';
import { ThreeDPrinterForStarshipsAdrsList } from './adrs/3d-printer-for-starships-adr/3d-printer-for-starships-adrs-list';
import { ThreeDPrintingStarshipsAdrsList } from './adrs/3d-printing-starships-adr/3d-printing-starships-adrs-list';
import { AlternativeHardwareForAITrainingAdrsList } from './adrs/alternative-hardware-for-ai-training-adr/alternative-hardware-for-ai-training-adrs-list';
import { DirectBinaryCodeGenerationAdrsList } from './adrs/direct-binary-code-generation-adr/direct-binary-code-generation-adrs-list';
import { FasterFactoriesWithOptimusSemiCybercabAdrsList } from './adrs/faster-factories-with-optimus-semi-cybercab-adr/faster-factories-with-optimus-semi-cybercab-adrs-list';
import { NanoAssembledCybercabAdrsList } from './adrs/nano-assembled-cybercab-adr/nano-assembled-cybercab-adrs-list';
import { NanoAssembledOptimusAdrsList } from './adrs/nano-assembled-optimus-adr/nano-assembled-optimus-adrs-list';
import { NanoAssembledSemiAdrsList } from './adrs/nano-assembled-semi/nano-assembled-semis-list';
import { NanoAssemblyBoostedSpaceXAdrsList } from './adrs/nanoassembly-boosted-spacex-adr/nanoassembly-boosted-spacex-adrs-list';
import { SolarPoweredTeslaAdrsList } from './adrs/solar-powered-tesla-adr/solar-powered-tesla-adrs-list';
import { SpaceXAutomatedWithOptimiAdrsList } from './adrs/spacex-automated-with-optimi-adr/spacex-automated-with-optimi-adrs-list';
import { StarshipForgeAIAdrsList } from './adrs/starship-forge-ai-adr/starship-forge-ai-adrs-list';
import { StarshipWithFusionEngineAdrsList } from './adrs/starship-with-a-fusion-engine-adr/starship-with-a-fusion-engine-adrs-list';
import { TeslaAutomatedWithOptimiAdrsList } from './adrs/tesla-automated-with-optimi-adr/tesla-automated-with-optimi-adrs-list';
import { Train6TParameterModelsInMinutesAdrsList } from './adrs/train-6t-parameter-models-in-minutes-adr/train-6t-parameter-models-in-minutes-adrs-list';
import { XAIs100MRubinEquivalentComputeAdrsList } from './adrs/xais-100m-rubin-equivalent-compute-adr/xais-100m-rubin-equivalent-compute-adrs-list';
import { XAIPoweredEntirelyWithSolarAdrsList } from './adrs/xai-powered-entirely-with-solar-adr/xai-powered-entirely-with-solar-adrs-list';
import { GenericRandDCenterAdrsList } from './adrs/generic-r&d-center-adr/generic-r&d-center-adrs-list';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    },
  ],
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // Router (for navigation and URL manipulation (select))
  const router = useRouter();

  // MUI
  const theme = useTheme();

  // Drawer
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Select
  let currentAdrsList: any[] = [];
  const adrsList: any = {
    'nano-assembly-adr': NanoassemblyAdrsList,
    'instantly-reusable-launchpad-adr': InstantlyReusableLaunchpadAdrsList,
    'starship-nano-assembly-adr': StarshipNanoassemblyAdrsList
  };

  function setCurrentAdrsList(value: string) {
    currentAdrsList = adrsList[value];
  }

  const [currentAdr, setCurrentAdr] = React.useState("");

  const pathname = usePathname();
  function switchAdr(adr: string) {
    const newPath = `/adrs/${adr}`;
    router.push(newPath);
    setCurrentAdrsList(adr);
    // console.log(`adr`, adr);
    // console.log(`pathname`, pathname);
  }

  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    setCurrentAdr(event.target.value as string);
    switchAdr(event.target.value as string);
  };

  if (pathname.includes('/nano-assembly-adr')) {
    currentAdrsList = NanoassemblyAdrsList;
  } else if (pathname.includes('/instantly-reusable-launchpad-adr')) {
    currentAdrsList = InstantlyReusableLaunchpadAdrsList;
  } else if (pathname.includes('/starship-nano-assembly-adr')) {
    currentAdrsList = StarshipNanoassemblyAdrsList;
  } else if (pathname.includes('/3d-printer-for-starships-adr')) {
    currentAdrsList = ThreeDPrinterForStarshipsAdrsList;
  } else if (pathname.includes('/3d-printing-starships-adr')) {
    currentAdrsList = ThreeDPrintingStarshipsAdrsList;
  } else if (pathname.includes('/alternative-hardware-for-ai-training-adr')) {
    currentAdrsList = AlternativeHardwareForAITrainingAdrsList;
  } else if (pathname.includes('/direct-binary-code-generation-adr')) {
    currentAdrsList = DirectBinaryCodeGenerationAdrsList;
  } else if (pathname.includes('/faster-factories-with-optimus-semi-cybercab-adr')) {
    currentAdrsList = FasterFactoriesWithOptimusSemiCybercabAdrsList;
  } else if (pathname.includes('/nano-assembled-cybercab-adr')) {
    currentAdrsList = NanoAssembledCybercabAdrsList;
  } else if (pathname.includes('/nano-assembled-optimus-adr')) {
    currentAdrsList = NanoAssembledOptimusAdrsList;
  } else if (pathname.includes('/nano-assembled-semi')) {
    currentAdrsList = NanoAssembledSemiAdrsList;
  } else if (pathname.includes('/nanoassembly-boosted-spacex-adr')) {
    currentAdrsList = NanoAssemblyBoostedSpaceXAdrsList;
  } else if (pathname.includes('/solar-powered-tesla-adr')) {
    currentAdrsList = SolarPoweredTeslaAdrsList;
  } else if (pathname.includes('/spacex-automated-with-optimi-adr')) {
    currentAdrsList = SpaceXAutomatedWithOptimiAdrsList;
  } else if (pathname.includes('/starship-forge-ai-adr')) {
    currentAdrsList = StarshipForgeAIAdrsList;
  } else if (pathname.includes('/starship-with-a-fusion-engine-adr')) {
    currentAdrsList = StarshipWithFusionEngineAdrsList;
  } else if (pathname.includes('/tesla-automated-with-optimi-adr')) {
    currentAdrsList = TeslaAutomatedWithOptimiAdrsList;
  } else if (pathname.includes('/train-6t-parameter-models-in-minutes-adr')) {
    currentAdrsList = Train6TParameterModelsInMinutesAdrsList;
  } else if (pathname.includes('/xai-powered-entirely-with-solar-adr')) {
    currentAdrsList = XAIPoweredEntirelyWithSolarAdrsList;
  } else if (pathname.includes('/xais-100m-rubin-equivalent-compute-adr')) {
    currentAdrsList = XAIs100MRubinEquivalentComputeAdrsList;
  } else if (pathname.includes('/generic-r&d-center-adr')) {
    currentAdrsList = GenericRandDCenterAdrsList;
  } 
  // else if (pathname === '/') {
  //   // setCurrentAdr("");
  // }

  React.useEffect(() => {
    // console.log("Current Path:", pathname)
    if (pathname === '/') {
      setCurrentAdr("");
    }
  }, [pathname])
  
  return (
    <html
      lang="en"
      // className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      className={roboto.variable}
    >
      <body className="min-h-full flex flex-col">
        {/* {children} */}
        <ThemeProvider theme={theme}>
          <AppRouterCacheProvider
            options={{ key: 'css' }}
          >
            <Box sx={{ display: 'flex' }}>
              <CssBaseline />
              <AppBar position="fixed" open={open}>
                <Toolbar>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={[
                      {
                        mr: 2,
                      },
                      open && { display: 'none' },
                    ]}
                  >
                    <MenuIcon />
                  </IconButton>
                  
                  <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                    <Link href="/" color="inherit">Architecture Decision Records</Link>
                  </Typography>

                  <Box width={250} sx={{ marginRight: 20 }}>
                    <FormControl fullWidth>
                    <InputLabel 
                      id="demo-simple-select-label" 
                      // sx={{ color: 'white' }}
                      sx={{ 
                        color: 'white', 
                        '&.Mui-focused': { color: 'white' } 
                      }}
                    >Select ADR</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={currentAdr}
                      label="Age"
                      onChange={handleChange}
                      sx={{
                        color: "white", // Text color
                        // backgroundColor: "gray", // Background color
                        '.MuiOutlinedInput-notchedOutline': {
                          borderColor: 'white', // Default border color
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'white', // Border color when focused
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'white', // Border color on hover
                        },
                        '.MuiSvgIcon-root ': {
                          fill: "white !important", // Dropdown arrow icon color
                        }
                      }}
                    >
                      <MenuItem value={'generic-r&d-center-adr'}>Generic R&D Center ADR</MenuItem>
                      <MenuItem value={'nano-assembly-adr'}>Nano-assembly ADR</MenuItem>
                      <MenuItem value={'instantly-reusable-launchpad-adr'}>Instantly Reusable Launchpad ADR</MenuItem>
                      <MenuItem value={'starship-nano-assembly-adr'}>Starship Nano-assembly ADR</MenuItem>
                      <MenuItem value={'3d-printer-for-starships-adr'}>3D Printer for Starships ADR</MenuItem>
                      <MenuItem value={'3d-printing-starships-adr'}>3D Printing Starships ADR</MenuItem>
                      <MenuItem value={'alternative-hardware-for-ai-training-adr'}>Alternative hardware for AI Training ADR</MenuItem>
                      <MenuItem value={'direct-binary-code-generation-adr'}>Direct Bbinary Code Generation ADR</MenuItem>
                      <MenuItem value={'faster-factories-with-optimus-semi-cybercab-adr'}>Faster Factories With Optimus Semi Cybercab ADR</MenuItem>
                      <MenuItem value={'nano-assembled-cybercab-adr'}>Nano-assembled Cybercab ADR</MenuItem>
                      <MenuItem value={'nano-assembled-optimus-adr'}>Nano-assembled Optimus ADR</MenuItem>
                      <MenuItem value={'nano-assembled-semi'}>Nano-assembled Semi ADR</MenuItem>
                      <MenuItem value={'nanoassembly-boosted-spacex-adr'}>Nanoassembly-boosted SpaceX ADR</MenuItem>
                      <MenuItem value={'solar-powered-tesla-adr'}>Solar-powered Tesla ADR</MenuItem>
                      <MenuItem value={'spacex-automated-with-optimi-adr'}>SpaceX automated with Optimi ADR</MenuItem>
                      <MenuItem value={'starship-forge-ai-adr'}>Starship Forge-AI ADR</MenuItem>
                      <MenuItem value={'starship-with-a-fusion-engine-adr'}>Starship with a Fusion engine ADR</MenuItem>
                      <MenuItem value={'tesla-automated-with-optimi-adr'}>Tesla automated with Optimi ADR</MenuItem>
                      <MenuItem value={'train-6t-parameter-models-in-minutes-adr'}>Train 6t parameter models in minutes ADR</MenuItem>
                      <MenuItem value={'xai-powered-entirely-with-solar-adr'}>xAI powered entirely with solar ADR</MenuItem>
                      <MenuItem value={'xais-100m-rubin-equivalent-compute-adr'}>xAIs 100M Rubin equivalent compute ADR</MenuItem>
                    </Select>
                  </FormControl>
                  </Box>

                  <Typography variant="h6" noWrap component="div">
                    <Link 
                      href="https://rd-center.vercel.app/"
                      color="inherit"
                      target="_blank"
                    >
                      R&D Center
                    </Link>
                  </Typography>
                  
                  {/* <Button 
                    color="inherit"
                    href="https://rd-center.vercel.app/"
                    target="_blank"
                  >
                      R&D Center
                  </Button> */}
                </Toolbar>
              </AppBar>
              <Drawer
                sx={{
                  width: drawerWidth,
                  flexShrink: 0,
                  '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                  },
                }}
                variant="persistent"
                anchor="left"
                open={open}
              >
                <DrawerHeader>
                  <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                  </IconButton>
                </DrawerHeader>
                <Divider />

                <List>
                  {
                    currentAdrsList.map((adr) => (
                      <Link href={adr.link} color="inherit" key={adr.title}>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText primary={adr.title} />
                          </ListItemButton>
                        </ListItem>
                      </Link>
                    ))
                  }
                </List>

                <Divider />
              </Drawer>

              <Main open={open}>
                <DrawerHeader />
                {children}
              </Main>
            </Box>
          </AppRouterCacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
