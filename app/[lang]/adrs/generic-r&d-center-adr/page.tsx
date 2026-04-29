// app/[lang]/adrs/generic-r&d-center-adr/page.tsx
import type { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';
import { ADRCategoryPage } from '@/app/[lang]/components/ADRCategoryPage';
import { GenericRandDCenterAdrsList } from './generic-r&d-center-adrs-list';
import MuiNextLink from '@/app/[lang]/components/MuiNextLink';

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function Page({ params }: Props) {
  const { lang } = await params;
  // const dict = await getDictionary(lang);   // ← ready for future i18n

  return (
    <ADRCategoryPage
      title="Generic R&D Center ADR"
      publishedDate="Published April 2026"
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
      // children slot is available here if you want to insert anything between
      // description and ADR list
    />
  );
}