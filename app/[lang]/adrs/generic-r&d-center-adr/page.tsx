// app/[lang]/adrs/generic-r&d-center-adr/page.tsx
import type { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';
import { ADRCategoryPage } from '@/app/[lang]/components/ADRCategoryPage';
import { GenericRandDCenterAdrsList } from './generic-r&d-center-adrs-list';
import MuiNextLink from '@/app/[lang]/components/MuiNextLink';

export default async function Page({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;

  const globalDict = await getDictionary(lang);

  // Load colocated dictionary
  let decisionDict: Record<string, string> = {};
  try {
    const module = await import(`./decisions-dictionaries/${lang}.json`);
    decisionDict = module.default || module;
  } catch (err) {
    console.warn('Could not load colocated decision dictionary');
  }

  // Merge both into ONE dict (this eliminates all the double-passing)
  const dict = { ...globalDict, ...decisionDict };

  return (
    <ADRCategoryPage
      title={globalDict['generic-r&d-center-adr'] ?? 'Generic R&D Center ADR'}
      publishedDate={globalDict['generic-r&d-center-adr.published'] ?? 'Published April 2026'}
      description={
        <>
          This page is dedicated for architecture decisions &amp; technologies that
          are generic (can be shared) across a variety of other domains/ADRs
          (architecture decision records).
          <br />
          For example,{' '}
          <MuiNextLink
            href={`/${lang}/adrs/generic-r&d-center-adr/use-nano-assembly-for-production`}
          >
            nano-assembly can become a manufacturing, production method of many
            different types of objects
          </MuiNextLink>{' '}
          and can be applicable in a variety of different domains (for doing ground
          works, growing launch pads, growing starships, different types of chips,
          etc.).
        </>
      }
      adrsList={GenericRandDCenterAdrsList}
      dict={dict}                    // ← single dict now
    />
  );
}