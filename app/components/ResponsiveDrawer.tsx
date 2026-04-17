'use client';
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Divider,
  IconButton,
  styled,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  type SelectChangeEvent,
  Collapse,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useCurrentADR } from '@/app/hooks/useCurrentADR';
import { categories, type Category } from '@/app/config/adrs-lists';
import { adrsListMap } from '@/app/config/adrs-lists';
import { ADRItem } from '../types/adr';
import Stack from '@mui/material/Stack';
import { StatusChip } from './StatusChip';
import * as React from 'react';

export const drawerWidth = 240;

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

interface Props {
  open: boolean;
  onDesktopDrawerClose: () => void;
  mobileOpen: boolean;
  onMobileDrawerClose: () => void;
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

  const { currentCategory } = useCurrentADR();
  const pathname = usePathname();
  const router = useRouter();

  // Selected category (synced with URL)
  const [selectedCategoryId, setSelectedCategoryId] = React.useState<string>(
    currentCategory?.id || categories[0].id
  );

  // Only ONE ADR can be expanded at a time inside the current category
  const [expandedAdrSlug, setExpandedAdrSlug] = React.useState<string | null>(null);

  // Sync selected category from URL
  React.useEffect(() => {
    if (currentCategory?.id && currentCategory.id !== selectedCategoryId) {
      setSelectedCategoryId(currentCategory.id);
    }
  }, [currentCategory?.id, selectedCategoryId]);

  // When category changes → collapse everything (only one can be active)
  React.useEffect(() => {
    setExpandedAdrSlug(null);
  }, [selectedCategoryId]);

  const selectedCategory =
    categories.find((cat) => cat.id === selectedCategoryId) || categories[0];

  const handleCategoryChange = (event: SelectChangeEvent) => {
    const newId = event.target.value as string;
    setSelectedCategoryId(newId);

    const cat = categories.find((c) => c.id === newId);
    if (cat?.mainPageSlug) {
      router.push(`/adrs/${cat.mainPageSlug}`);
    }
  };

  const handleToggle = (slug: string) => {
    setExpandedAdrSlug((prev) => (prev === slug ? null : slug));
  };

  const drawerContent = (onClose: () => void) => (
    <div>
      <DrawerHeader>
        <IconButton onClick={onClose}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>

      <Divider />

      {/* === CATEGORY SELECT === */}
      <Box sx={{ p: 2 }}>
        <FormControl fullWidth>
          <InputLabel id="category-select-label">Select Category</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={selectedCategoryId}
            label="Select Category"
            onChange={handleCategoryChange}
          >
            {categories.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Divider />

      {/* === NESTED LIST: Category caption + collapsible ADRs (single active) === */}
      <List>
        {/* Category caption (non-clickable, exactly like MUI example) */}
        <ListSubheader component="div" id="nested-list-subheader">
          {selectedCategory.name}
        </ListSubheader>

        {selectedCategory.adrs.map((adrItem) => {
          const decisions: ADRItem[] = adrsListMap[adrItem.slug] || [];
          const isOpen = expandedAdrSlug === adrItem.slug;

          return (
            <React.Fragment key={adrItem.slug}>
              {/* ADR header – link to main page + collapsible (only one can be open) */}
              <ListItemButton
                component={Link}
                href={`/adrs/${adrItem.slug}`}
                selected={pathname === `/adrs/${adrItem.slug}`}
                onClick={() => handleToggle(adrItem.slug)}
              >
                <ListItemText primary={adrItem.label} />
                {isOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>

              {/* Nested decisions */}
              <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {decisions.map((decision: ADRItem) => (
                    <ListItemButton
                      key={decision.link}
                      component={Link}
                      href={decision.link}
                      selected={pathname === decision.link}
                      sx={{ pl: 4 }}
                    >
                      <Stack spacing={2} sx={{ width: '100%' }}>
                        <ListItemText
                          primary={decision.title}
                          secondary={decision.date}
                        />
                        <StatusChip status={decision.status} />
                      </Stack>
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          );
        })}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="ADR navigation"
    >
      {/* Mobile drawer */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={onMobileDrawerClose}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        slotProps={{ root: { keepMounted: true } }}
      >
        {drawerContent(onMobileDrawerClose)}
      </Drawer>

      {/* Desktop drawer (persistent) */}
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
  );
}