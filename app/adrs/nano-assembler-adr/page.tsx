import { ADRCategoryPage } from '@/app/components/ADRCategoryPage';
import { NanoAssemblerAdrsList } from './nano-assembler-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Nano-assembler ADR"
      publishedDate="Published April 2026"
      description={
        <>
            Device (e.g. similar to a 3D-Printer but for Nano-Assembly) for nano-assembling
            of products. (is it a packaging for seed nanobots-swarm (nanofactory)) ?
        </>
      }
      //   imageSrc={}
      adrsList={NanoAssemblerAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}