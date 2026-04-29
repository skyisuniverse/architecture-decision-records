import { ADRCategoryPage } from '@/app/[lang]/components/ADRCategoryPage';
import { TerraformingMarsAdrsList } from './terraforming-mars-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Terraforming Mars ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={TerraformingMarsAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}