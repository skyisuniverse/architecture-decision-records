import { ADRCategoryPage } from '@/app/components/ADRCategoryPage';
import { NanoAssembledGroundWorksAdrsList } from './nano-assembled-ground-works-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Nano-Assembled Ground Works ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={NanoAssembledGroundWorksAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}