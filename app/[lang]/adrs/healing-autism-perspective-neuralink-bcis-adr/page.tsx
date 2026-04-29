import { ADRCategoryPage } from '@/app/[lang]/components/ADRCategoryPage';
import { HealingAutismPerspectiveNeuralinkBCIsAdrsList } from './healing-autism-perspective-neuralink-bcis-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Healing Autism. Perspective Neuralink BCIs"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={HealingAutismPerspectiveNeuralinkBCIsAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}