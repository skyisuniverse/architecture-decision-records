import { ADRCategoryPage } from '@/app/[lang]/components/ADRCategoryPage';
import { GrokCADAdrsList } from './grok-cad-adrs-list';
import MuiNextLink from '@/app/[lang]/components/MuiNextLink';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Grok CAD ADR"
      publishedDate="Published April 2026"
      description={
        <>
          Can be integrated with/into {' '}
          <MuiNextLink href="/adrs/engineering-simulation-tool-adr">Engineering Simulation Tool</MuiNextLink>
        </>
      }
      //   imageSrc={}
      adrsList={GrokCADAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
      // children={
      //   <>

      //   </>
      // }
    />
  );
}