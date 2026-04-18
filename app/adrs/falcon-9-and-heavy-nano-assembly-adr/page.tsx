import { ADRCategoryPage } from '@/app/components/ADRCategoryPage';
import { Falcon9AndHeavyNanoAssemblyAdrsList } from './falcon-9-and-heavy-nano-assembly-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Falcon 9 and Heavy Nano-Assembly ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={Falcon9AndHeavyNanoAssemblyAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}