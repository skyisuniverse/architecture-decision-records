import { ADRCategoryPage } from '@/app/[lang]/components/ADRCategoryPage';
import { SpaceXAutomatedWithOptimiAdrsList } from './spacex-automated-with-optimi-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="SpaceX automated with Optimi ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={SpaceXAutomatedWithOptimiAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}