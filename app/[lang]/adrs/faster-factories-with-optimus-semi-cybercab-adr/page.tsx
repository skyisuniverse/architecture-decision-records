import { ADRCategoryPage } from '@/app/[lang]/components/ADRCategoryPage';
import { FasterFactoriesWithOptimusSemiCybercabAdrsList } from './faster-factories-with-optimus-semi-cybercab-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="80%-Faster 60%-Cheaper Factories With Optimus Semi Cybercab ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={FasterFactoriesWithOptimusSemiCybercabAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}