import { ADRCategoryPage } from '@/app/components/ADRCategoryPage';
import { SolarSystemColonizationAdrsList } from './solar-system-colonization-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Solar System Colonization ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={SolarSystemColonizationAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}