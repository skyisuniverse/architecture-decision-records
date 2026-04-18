import { ADRCategoryPage } from '@/app/components/ADRCategoryPage';
import { AutomatedDesignManufacturingPipelineAdrsList } from './automated-design-manufacturing-pipeline-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Automated Design-Manufacturing Pipeline ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={AutomatedDesignManufacturingPipelineAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}