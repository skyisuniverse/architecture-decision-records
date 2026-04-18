import { ADRCategoryPage } from '@/app/components/ADRCategoryPage';
import { NanoAssembledMechazillaAdrsList } from './nano-assembled-mechazilla-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Nano-Assembled Mechazilla ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={NanoAssembledMechazillaAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}