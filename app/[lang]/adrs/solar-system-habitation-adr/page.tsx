import { ADRCategoryPage } from '@/app/[lang]/components/ADRCategoryPage';
import { SolarSystemHabitationAdrsList } from './solar-system-habitation-adrs-list';

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
      adrsList={SolarSystemHabitationAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}