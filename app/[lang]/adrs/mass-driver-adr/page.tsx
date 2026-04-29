import { ADRCategoryPage } from '@/app/[lang]/components/ADRCategoryPage';
import { MassDriverAdrsList } from './mass-driver-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Mass Driver ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={MassDriverAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}