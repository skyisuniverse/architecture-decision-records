import { ADRCategoryPage } from '@/app/components/ADRCategoryPage';
import { NanoassemblyAdrsList } from './nano-assembly-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Nano-assembly ADR"
      publishedDate="Published April 2026"
      description={
        <>
            How do we approach / work with different substances with nano-assembly (nanobot swarms):
            <br />    
            - Ground (in context of ground works)
            <br />
            - Metal (in context of Starship production)
            <br />
            - Gases (in context of propellant generation / storage(?))
            <br />
            - Brain (in context of BCIs / autism healing / augmentation / etc.)
            <br />
            - Computing substrates (in context of compute & chips production)
            <br />
            - etc.
        </>
      }
      //   imageSrc={}
      adrsList={NanoassemblyAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}