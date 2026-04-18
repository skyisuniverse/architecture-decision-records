import { ADRCategoryPage } from '@/app/components/ADRCategoryPage';
import { NanoAssemblyBoostedSpaceXAdrsList } from './nanoassembly-boosted-spacex-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Nano-assembly-boosted SpaceX ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={NanoAssemblyBoostedSpaceXAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}