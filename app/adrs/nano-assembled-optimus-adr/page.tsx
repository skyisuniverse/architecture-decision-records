import { ADRCategoryPage } from '@/app/components/ADRCategoryPage';
import { NanoAssembledOptimusAdrsList } from './nano-assembled-optimus-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Nano Assembled Optimus ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={NanoAssembledOptimusAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}