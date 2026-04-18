import { ADRCategoryPage } from '@/app/components/ADRCategoryPage';
import { PhotonicComputingAdrsList } from './photonic-computing-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Photonic Computing ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={PhotonicComputingAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}