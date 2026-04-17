'use client';

import { usePathname } from 'next/navigation';
import { adrsListMap, type AdrSlug, categories, getCategoryBySlug } from '@/app/config/adrs-lists';
import { ADRItem } from '../types/adr';

export function useCurrentADR() {
  const pathname = usePathname();

  const slug = (Object.keys(adrsListMap) as AdrSlug[]).find((key) =>
    pathname.includes(`/${key}`)
  );

  const currentAdrsList = slug ? adrsListMap[slug] : [];
  const currentAdr = currentAdrsList.find((adr: ADRItem) => adr.link === pathname);
  const currentCategory = slug ? getCategoryBySlug(slug) : undefined;

  return {
    currentAdrsList,
    currentSlug: slug ?? '',
    currentAdr,
    currentCategory,
  } as const;
}