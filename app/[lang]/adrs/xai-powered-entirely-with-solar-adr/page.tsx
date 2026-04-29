import { ADRCategoryPage } from '@/app/[lang]/components/ADRCategoryPage';
import { XAIPoweredEntirelyWithSolarAdrsList } from './xai-powered-entirely-with-solar-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="xAI powered entirely with solar ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={XAIPoweredEntirelyWithSolarAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}