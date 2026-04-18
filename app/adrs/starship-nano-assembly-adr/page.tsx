import { ADRCategoryPage } from '@/app/components/ADRCategoryPage';
import { StarshipNanoassemblyAdrsList } from './starship-nano-assembly-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Starship Nano-Assembly ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={StarshipNanoassemblyAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}