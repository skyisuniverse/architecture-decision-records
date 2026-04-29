import { ADRCategoryPage } from '@/app/[lang]/components/ADRCategoryPage';
import { CompressingMarsTerraformingAdrsList } from './compressing-mars-terraforming-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Compressing Mars Terraforming from 100,000+ to 10 years"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={CompressingMarsTerraformingAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}