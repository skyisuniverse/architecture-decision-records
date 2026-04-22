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
import { ADRItem } from '@/app/types/adr';
import React from 'react';

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
  currentAdrsList: ADRItem[];
  currentAdr: ADRItem | undefined;
  selectCategory: (id: string) => void;
  navigateToAdr: (slug: string) => void;
  toggleExpanded: (slug: string) => void;
};

const NavigationContext = createContext<NavigationContextValue | null>(null);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  // ──────────────────────────────────────────────────────────────
  // All URL-derived state (replaces useCurrentADR completely)
  // ──────────────────────────────────────────────────────────────
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

  // Default fallback for homepage (or any non-ADR page)
  const defaultCategoryId = categories[0].id; // 'rd-center'

  // ──────────────────────────────────────────────────────────────
  // Reducer + initial state (already correct for homepage)
  // ──────────────────────────────────────────────────────────────
  const [state, dispatch] = useReducer(navigationReducer, {
    selectedCategoryId: currentCategory?.id || defaultCategoryId,
    expandedAdrSlug: slug || null,
  });

  // ──────────────────────────────────────────────────────────────
  // URL → UI sync (handles homepage + direct navigation + refresh)
  // ──────────────────────────────────────────────────────────────
  React.useEffect(() => {
    dispatch({
      type: 'SYNC_FROM_URL',
      payload: {
        // On homepage → force R&D Center category
        categoryId: currentCategory?.id || defaultCategoryId,
        // On homepage → collapse everything
        slug: slug || null,
      },
    });
  }, [currentCategory?.id, slug, defaultCategoryId]);

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

  const value: NavigationContextValue = {
    selectedCategoryId: state.selectedCategoryId,
    expandedAdrSlug: state.expandedAdrSlug,
    currentSlug: slug || '',
    currentCategory,
    currentAdrsList,
    currentAdr,
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