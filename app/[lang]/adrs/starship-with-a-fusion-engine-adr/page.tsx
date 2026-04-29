import { ADRCategoryPage } from '@/app/[lang]/components/ADRCategoryPage';
import { StarshipWithFusionEngineAdrsList } from './starship-with-a-fusion-engine-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Starship with a Fusion engine ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={StarshipWithFusionEngineAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}