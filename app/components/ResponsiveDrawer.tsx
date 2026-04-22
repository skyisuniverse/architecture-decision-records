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
import { usePathname } from 'next/navigation';
import { useNavigation } from '@/app/contexts/navigation-context';
import { categories } from '@/app/config/adrs-lists';
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

  const pathname = usePathname();
  const {
    selectedCategoryId,
    expandedAdrSlug,
    currentSlug,
    selectCategory,
    navigateToAdr,
    toggleExpanded,
  } = useNavigation();

  const selectedCategory =
    categories.find((cat) => cat.id === selectedCategoryId) || categories[0];

  const handleCategoryChange = (event: SelectChangeEvent) => {
    selectCategory(event.target.value as string);
  };

  const handleAdrHeaderClick = (slug: string) => {
    navigateToAdr(slug);
  };

  const handleToggle = (slug: string) => {
    toggleExpanded(slug);
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

      {/* === NESTED LIST === */}
      <List>
        <ListSubheader component="div" id="nested-list-subheader">
          {selectedCategory.name}
        </ListSubheader>

        {selectedCategory.adrs.map((adrItem) => {
          const decisions: ADRItem[] = adrsListMap[adrItem.slug] || [];
          const isOpen = expandedAdrSlug === adrItem.slug;

          return (
            <React.Fragment key={adrItem.slug}>
              {/* ADR header */}
              <ListItemButton
                selected={currentSlug === adrItem.slug}
                onClick={() => handleAdrHeaderClick(adrItem.slug)}
              >
                <ListItemText primary={adrItem.label} />
                <IconButton
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.stopPropagation();
                    handleToggle(adrItem.slug);
                  }}
                >
                  {isOpen ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
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