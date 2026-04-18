import { ADRCategoryPage } from '@/app/components/ADRCategoryPage';
import { PropellantGenerationAdrsList } from './propellant-generation-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Propellant Generation ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={PropellantGenerationAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}