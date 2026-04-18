import { ADRCategoryPage } from '@/app/components/ADRCategoryPage';
import { TeslaAutomatedWithOptimiAdrsList } from './tesla-automated-with-optimi-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Tesla automated with Optimi ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={TeslaAutomatedWithOptimiAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}