import { ADRCategoryPage } from '@/app/components/ADRCategoryPage';
import { GrokCADAdrsList } from './grok-cad-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Grok CAD ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={GrokCADAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}