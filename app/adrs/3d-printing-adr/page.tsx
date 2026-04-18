import { ADRCategoryPage } from '@/app/components/ADRCategoryPage';
import { ThreeDPrintingAdrsList } from './3d-printing-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="3D Printing ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={ThreeDPrintingAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}