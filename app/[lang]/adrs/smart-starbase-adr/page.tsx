import { ADRCategoryPage } from '@/app/[lang]/components/ADRCategoryPage';
import { SmartStarbaseAdrsList } from './smart-starbase-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Smart Starbase ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={SmartStarbaseAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}