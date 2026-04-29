import { ADRCategoryPage } from '@/app/[lang]/components/ADRCategoryPage';
import { NanoAssembledOrbitalHeatShieldAdrsList } from './nano-assembled-orbital-heat-shield-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Nano-Assembled Orbital Heat Shield ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={NanoAssembledOrbitalHeatShieldAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}