import { ADRCategoryPage } from '@/app/[lang]/components/ADRCategoryPage';
import { AlternativeHardwareForAITrainingAdrsList } from './alternative-hardware-for-ai-training-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Alternative Hardware for AI Training ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={AlternativeHardwareForAITrainingAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}