import { ADRCategoryPage } from '@/app/[lang]/components/ADRCategoryPage';
import { GenericRandDCenterAdrsList } from './generic-r&d-center-adrs-list';
import MuiNextLink from '@/app/[lang]/components/MuiNextLink';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Generic R&D Center ADR"
      publishedDate="Published April 2026"
      description={
        <>
          This page is dedicated for architecture decisions & technologies that are
          generic (can be shared) across variety of other domains/ADRs (architecture
          decision records).
          <br />
          For example,{' '}
          <MuiNextLink href="/adrs/generic-r&d-center-adr/use-nano-assembly-for-production">
            nano-assembly can become a manufacturing, production method of many
            different types of objects
          </MuiNextLink>{' '}
          and can be applicable in a variety of different domains (for doing ground
          works, growing launch pads, growing starships, different types of chips,
          etc.)
        </>
      }
      //   imageSrc={}
      adrsList={GenericRandDCenterAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}