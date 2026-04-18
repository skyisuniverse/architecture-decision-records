import { ADRCategoryPage } from '@/app/components/ADRCategoryPage';
import { AirSeparationAdrsList } from './air-separation-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Air Separation ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={AirSeparationAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}