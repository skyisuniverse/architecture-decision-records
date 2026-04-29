import { ADRCategoryPage } from '@/app/[lang]/components/ADRCategoryPage';
import { NanoAssembledSemiAdrsList } from './nano-assembled-semis-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Nano-assembled Tesla Semi ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={NanoAssembledSemiAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}