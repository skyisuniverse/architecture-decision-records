import { ADRCategoryPage } from '@/app/[lang]/components/ADRCategoryPage';
import { FusionPowerPlantAdrsList } from './fusion-power-plant-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Fusion Power Plant ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={FusionPowerPlantAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}