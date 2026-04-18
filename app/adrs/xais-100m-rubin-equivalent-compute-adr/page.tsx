import { ADRCategoryPage } from '@/app/components/ADRCategoryPage';
import { XAIs100MRubinEquivalentComputeAdrsList } from './xais-100m-rubin-equivalent-compute-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="xAI's 100M Rubin equivalent compute ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={XAIs100MRubinEquivalentComputeAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}