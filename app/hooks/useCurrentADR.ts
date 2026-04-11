'use client';

import { usePathname } from 'next/navigation';
import { adrsListMap, type AdrSlug } from '@/app/config/adrs-lists';
import { ADRItem } from '../types/adr';

export function useCurrentADR() {
  const pathname = usePathname();

  const slug = (Object.keys(adrsListMap) as AdrSlug[]).find((key) =>
    pathname.includes(`/${key}`)
  );

  const currentAdrsList = slug ? adrsListMap[slug] : [];

  // automatically find the exact ADR for this page
  const currentAdr = currentAdrsList.find((adr: ADRItem) => adr.link === pathname);

  return {
    currentAdrsList,
    currentSlug: slug ?? '',
    currentAdr,
  } as const;
}