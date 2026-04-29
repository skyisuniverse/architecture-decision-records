import { ADRCategoryPage } from '@/app/[lang]/components/ADRCategoryPage';
import { FusionStarshipAdrsList } from './fusion-starship-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Fusion Starship ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={FusionStarshipAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}