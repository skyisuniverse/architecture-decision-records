import { ADRCategoryPage } from '@/app/components/ADRCategoryPage';
import { NanoAssembledStarlinkAdrsList } from './nano-assembled-starlink-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Nano-Assembled Starlink ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={NanoAssembledStarlinkAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}