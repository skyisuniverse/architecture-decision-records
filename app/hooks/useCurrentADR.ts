'use client';

import { usePathname } from 'next/navigation';
import { adrsListMap, type AdrSlug } from '@/app/config/adrs-lists';

export function useCurrentADR() {
  const pathname = usePathname();

  const slug = (Object.keys(adrsListMap) as AdrSlug[]).find((key) =>
    pathname.includes(`/${key}`)
  );

  const currentAdrsList = slug ? adrsListMap[slug] : [];

  return {
    currentAdrsList,
    currentSlug: slug ?? '',
  } as const;
}