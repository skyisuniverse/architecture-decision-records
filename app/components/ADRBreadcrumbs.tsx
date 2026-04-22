'use client';

import {
  Breadcrumbs,
  Typography,
  Link as MuiLink,
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useNavigation } from '@/app/contexts/navigation-context';

export default function ADRBreadcrumbs() {
  const pathname = usePathname();
  const { currentCategory, currentAdr, currentSlug } = useNavigation();

  const breadcrumbItems: React.ReactNode[] = [
    <MuiLink
      key="home"
      component={Link}
      href="/"
      underline="hover"
      color="inherit"
    >
      ADRs
    </MuiLink>,
  ];

  // === NEW: Handle top-level non-ADR pages ===
  if (pathname === '/companies') {
    breadcrumbItems.push(
      <Typography key="companies" color="text.primary">
        Companies
      </Typography>
    );
  } else if (pathname === '/products') {
    breadcrumbItems.push(
      <Typography key="products" color="text.primary">
        Products
      </Typography>
    );
  } else if (pathname === '/services') {
    breadcrumbItems.push(
      <Typography key="services" color="text.primary">
        Services
      </Typography>
    );
  }
  // === Existing ADR logic (category list + detail pages) ===
  else if (currentCategory) {
    const isDetailPage = !!currentAdr;
    const categoryHref = currentCategory.mainPageSlug
      ? `/adrs/${currentCategory.mainPageSlug}`
      : currentSlug
        ? `/adrs/${currentSlug}`
        : '/';

    if (isDetailPage) {
      breadcrumbItems.push(
        <MuiLink
          key="category"
          component={Link}
          href={categoryHref}
          underline="hover"
          color="inherit"
        >
          {currentCategory.name}
        </MuiLink>
      );
      breadcrumbItems.push(
        <Typography key="adr" color="text.primary">
          {currentAdr!.title}
        </Typography>
      );
    } else {
      breadcrumbItems.push(
        <Typography key="category" color="text.primary">
          {currentCategory.name}
        </Typography>
      );
    }
  }

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      sx={{ mb: 4 }}
    >
      {breadcrumbItems}
    </Breadcrumbs>
  );
}