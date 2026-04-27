'use client';

import { createContext, useContext, useReducer, useMemo, type ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import {
  adrsListMap,
  type AdrSlug,
  categories,
  getCategoryBySlug,
  type Category,
} from '@/app/config/adrs-lists';
import { itemData as productItems } from '@/app/products/products-list';
import { itemData as companyItems } from '@/app/companies/companies-list';
import { itemData as serviceItems } from '@/app/services/services-list';
import { ADRItem } from '@/app/types/adr';
import React from 'react';

// ──────────────────────────────────────────────────────────────
// Minimal reusable type for list items (title + slug only)
// ──────────────────────────────────────────────────────────────
export type ListItem = {
  title: string;
  slug: string;
};

type NavigationState = {
  selectedCategoryId: string;
  expandedAdrSlug: string | null;
};

type NavigationAction =
  | { type: 'SET_CATEGORY'; payload: string }
  | { type: 'SET_EXPANDED'; payload: string | null }
  | { type: 'SYNC_FROM_URL'; payload: { categoryId: string; slug: string | null } };

const navigationReducer = (
  state: NavigationState,
  action: NavigationAction
): NavigationState => {
  switch (action.type) {
    case 'SET_CATEGORY':
      return { ...state, selectedCategoryId: action.payload };
    case 'SET_EXPANDED':
      return { ...state, expandedAdrSlug: action.payload };
    case 'SYNC_FROM_URL':
      return {
        selectedCategoryId: action.payload.categoryId,
        expandedAdrSlug: action.payload.slug,
      };
    default:
      return state;
  }
};

type NavigationContextValue = {
  selectedCategoryId: string;
  expandedAdrSlug: string | null;
  currentSlug: string;
  currentCategory: Category | undefined;
  activeCategory: Category | undefined;
  currentAdrsList: ADRItem[];
  currentAdr: ADRItem | undefined;
  currentProduct: ListItem | undefined;
  currentCompany: ListItem | undefined;
  currentService: ListItem | undefined;
  currentAdrCategoryName: string;   // ← NEW (derived from categories config)
  selectCategory: (id: string) => void;
  navigateToAdr: (slug: string) => void;
  toggleExpanded: (slug: string) => void;
};

const NavigationContext = createContext<NavigationContextValue | null>(null);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  // URL-derived ADR state
  const slug = useMemo(() => {
    return (Object.keys(adrsListMap) as AdrSlug[]).find((key) =>
      pathname.includes(`/${key}`)
    );
  }, [pathname]);

  const currentAdrsList: ADRItem[] = useMemo(() => {
    return slug ? (adrsListMap[slug] as ADRItem[]) : [];
  }, [slug]);

  const currentAdr: ADRItem | undefined = useMemo(() => {
    return currentAdrsList.find((adr) => adr.link === pathname);
  }, [currentAdrsList, pathname]);

  const currentCategory = useMemo(() => {
    return slug ? getCategoryBySlug(slug) : undefined;
  }, [slug]);

  // ──────────────────────────────────────────────────────────────
  // NEW: Specific ADR label from the official categories config
  // (single source of truth – no more duplicated map)
  // ──────────────────────────────────────────────────────────────
  const currentAdrCategoryName = useMemo(() => {
    if (!slug || !currentCategory) return '';
    const item = currentCategory.adrs.find((item) => item.slug === slug);
    return item?.label ?? slug;
  }, [slug, currentCategory]);

  // Reusable current-item logic for all sections
  const currentProduct = useMemo(() => {
    if (!pathname.startsWith('/products/')) return undefined;
    const itemSlug = pathname.split('/products/')[1];
    return productItems.find((item) => item.slug === itemSlug);
  }, [pathname]);

  const currentCompany = useMemo(() => {
    if (!pathname.startsWith('/companies/')) return undefined;
    const itemSlug = pathname.split('/companies/')[1];
    return companyItems.find((item) => item.slug === itemSlug);
  }, [pathname]);

  const currentService = useMemo(() => {
    if (!pathname.startsWith('/services/')) return undefined;
    const itemSlug = pathname.split('/services/')[1];
    return serviceItems.find((item) => item.slug === itemSlug);
  }, [pathname]);

  const defaultCategoryId = categories[0].id;

  const [state, dispatch] = useReducer(navigationReducer, {
    selectedCategoryId: currentCategory?.id || defaultCategoryId,
    expandedAdrSlug: slug || null,
  });

  React.useEffect(() => {
    if (currentCategory) {
      dispatch({
        type: 'SYNC_FROM_URL',
        payload: {
          categoryId: currentCategory.id,
          slug: slug || null,
        },
      });
    } else if (pathname === '/') {
      dispatch({
        type: 'SYNC_FROM_URL',
        payload: {
          categoryId: defaultCategoryId,
          slug: null,
        },
      });
    }
  }, [currentCategory, slug, pathname, defaultCategoryId]);

  const selectCategory = (id: string) => {
    dispatch({ type: 'SET_CATEGORY', payload: id });
    const cat = categories.find((c) => c.id === id);
    if (cat?.mainPageSlug) {
      router.push(`/adrs/${cat.mainPageSlug}`);
    }
  };

  const navigateToAdr = (slug: string) => {
    router.push(`/adrs/${slug}`);
    dispatch({ type: 'SET_EXPANDED', payload: slug });
  };

  const toggleExpanded = (slug: string) => {
    dispatch({
      type: 'SET_EXPANDED',
      payload: state.expandedAdrSlug === slug ? null : slug,
    });
  };

  const activeCategory = useMemo(() => {
    return currentCategory ?? categories.find((c) => c.id === state.selectedCategoryId);
  }, [currentCategory, state.selectedCategoryId]);

  const value: NavigationContextValue = {
    selectedCategoryId: state.selectedCategoryId,
    expandedAdrSlug: state.expandedAdrSlug,
    currentSlug: slug || '',
    currentCategory,
    activeCategory,
    currentAdrsList,
    currentAdr,
    currentProduct,
    currentCompany,
    currentService,
    currentAdrCategoryName,   // ← exposed
    selectCategory,
    navigateToAdr,
    toggleExpanded,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};