'use client';

import {
  Breadcrumbs,
  Typography,
  Link as MuiLink,
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useNavigation, type ListItem } from '@/app/contexts/navigation-context';

export default function ADRBreadcrumbs() {
  const pathname = usePathname();
  const {
    activeCategory,
    currentAdr,
    currentSlug,
    currentAdrCategoryName,
    currentProduct,
    currentCompany,
    currentService,
  } = useNavigation();

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

  // ──────────────────────────────────────────────────────────────
  // Reusable section config (single source of truth)
  // ──────────────────────────────────────────────────────────────
  type Section = {
    prefix: string;
    listHref: string;
    listTitle: string;
    currentItem: ListItem | undefined;
    itemKey: string;
  };

  const sections: Section[] = [
    {
      prefix: '/companies',
      listHref: '/companies',
      listTitle: 'Companies',
      currentItem: currentCompany,
      itemKey: 'company',
    },
    {
      prefix: '/services',
      listHref: '/services',
      listTitle: 'Services',
      currentItem: currentService,
      itemKey: 'service',
    },
    {
      prefix: '/products',
      listHref: '/products',
      listTitle: 'Products',
      currentItem: currentProduct,
      itemKey: 'product',
    },
  ];

  const getSectionBreadcrumbs = (): React.ReactNode[] => {
    const section = sections.find((s) => pathname.startsWith(s.prefix));
    if (!section) return [];

    const { listHref, listTitle, currentItem, itemKey } = section;
    const isDetailPage = pathname !== listHref && !!currentItem;

    if (isDetailPage) {
      return [
        <MuiLink
          key={`${itemKey}-list`}
          component={Link}
          href={listHref}
          underline="hover"
          color="inherit"
        >
          {listTitle}
        </MuiLink>,
        <Typography key={`${itemKey}-item`} color="text.primary">
          {currentItem!.title}
        </Typography>,
      ];
    }

    return [
      <Typography key={itemKey} color="text.primary">
        {listTitle}
      </Typography>,
    ];
  };

  breadcrumbItems.push(...getSectionBreadcrumbs());

  // ──────────────────────────────────────────────────────────────
  // ADR breadcrumbs: Group > ADR Category > (Decision)
  // ──────────────────────────────────────────────────────────────
  const isNonADRSection = sections.some((s) => pathname.startsWith(s.prefix));

  if (!isNonADRSection && activeCategory) {
    // 1. Group (e.g. "R&D Center ADRs") – always plain text
    breadcrumbItems.push(
      <Typography key="adr-group" color="text.primary">
        {activeCategory.name}
      </Typography>
    );

    const isDetailPage = !!currentAdr;

    if (currentSlug && currentAdrCategoryName) {
      const categoryHref = `/adrs/${currentSlug}`;

      if (isDetailPage) {
        // 2. Specific ADR category (clickable) + decision title
        breadcrumbItems.push(
          <MuiLink
            key="category"
            component={Link}
            href={categoryHref}
            underline="hover"
            color="inherit"
          >
            {currentAdrCategoryName}
          </MuiLink>
        );
        breadcrumbItems.push(
          <Typography key="adr" color="text.primary">
            {currentAdr!.title}
          </Typography>
        );
      } else {
        // 2. Specific ADR category (plain text on category page)
        breadcrumbItems.push(
          <Typography key="category" color="text.primary">
            {currentAdrCategoryName}
          </Typography>
        );
      }
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