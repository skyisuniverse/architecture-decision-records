import { ADRCategoryPage } from '@/app/[lang]/components/ADRCategoryPage';
import { NeuromorphicComputingAdrsList } from './neuromorphic-computing-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Neuromorphic computing ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={NeuromorphicComputingAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}