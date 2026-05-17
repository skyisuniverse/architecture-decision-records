// app/[lang]/components/ADRBottomNav.tsx
"use client";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
// import BusinessIcon from "@mui/icons-material/Business";
import InventoryIcon from "@mui/icons-material/Inventory";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { useNavigation } from "../contexts/navigation-context";

export default function ADRBottomNav() {
  const pathname = usePathname();
  const {
    // currentCompany,
    currentProduct,
    currentService,
    currentApp,
    localize,
    decisionDict: dict,
  } = useNavigation();

  const navItems = useMemo(
    () => [
      // {
      //   label: dict.companies ?? "Companies",
      //   path: "/companies",
      //   icon: <BusinessIcon />,
      // },
      {
        label: dict.products ?? "Products",
        path: "/products",
        icon: <InventoryIcon />,
      },
      {
        label: dict.services ?? "Services",
        path: "/services",
        icon: <MiscellaneousServicesIcon />,
      },
      {
        label: dict.applications ?? "Applications",
        path: "/apps",
        icon: <AppShortcutIcon />,
      },
    ],
    [dict],
  );

  const activeValue = useMemo(() => {
    // if (currentCompany || pathname?.includes("/companies")) {
    //   return "/companies";
    // }
    if (currentProduct || pathname?.includes("/products")) {
      return "/products";
    }
    if (currentService || pathname?.includes("/services")) {
      return "/services";
    }
    if (currentApp || pathname?.includes("/apps")) {
      return "/apps";
    }
    return false;
  }, [
    // currentCompany,
    currentProduct,
    currentService,
    currentApp,
    pathname,
  ]);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: { xs: "flex", sm: "none" }, // only visible on mobile
        zIndex: (theme) => theme.zIndex.appBar + 1,
      }}
    >
      <BottomNavigation
        showLabels
        value={activeValue}
        sx={{
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        {navItems.map((item) => (
          <BottomNavigationAction
            key={item.path}
            label={item.label}
            value={item.path}
            icon={item.icon}
            component={Link}
            href={localize(item.path)}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
}
