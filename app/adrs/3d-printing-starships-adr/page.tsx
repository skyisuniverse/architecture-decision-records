import { ADRCategoryPage } from '@/app/components/ADRCategoryPage';
import { ThreeDPrintingStarshipsAdrsList } from './3d-printing-starships-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="3D Printing Starships ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={ThreeDPrintingStarshipsAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}