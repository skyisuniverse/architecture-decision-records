import { ADRCategoryPage } from '@/app/components/ADRCategoryPage';
import { ThreeDPrinterForStarshipsAdrsList } from './3d-printer-for-starships-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="3D Printer for Starships ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={ThreeDPrinterForStarshipsAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}