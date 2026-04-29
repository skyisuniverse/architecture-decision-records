import { ADRCategoryPage } from '@/app/[lang]/components/ADRCategoryPage';
import { ThreeDPrinterAdrsList } from './3d-printer-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="3D-Printer ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={ThreeDPrinterAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}