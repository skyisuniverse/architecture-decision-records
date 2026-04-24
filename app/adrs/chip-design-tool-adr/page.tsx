import { ADRCategoryPage } from '@/app/components/ADRCategoryPage';
import { ChipDesignToolAdrsList } from './chip-design-tool-adrs-list';
import MuiNextLink from '@/app/components/MuiNextLink';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Chip Design Tool ADR"
      publishedDate="Published April 2026"
      description={
        <>
          Should be one application with {' '}
          <MuiNextLink href="/adrs/engineering-simulation-tool-adr">Engineering Simulation Tool</MuiNextLink>
        </>
      }
      //   imageSrc={}
      adrsList={ChipDesignToolAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}