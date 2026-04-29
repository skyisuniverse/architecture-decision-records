import { ADRCategoryPage } from '@/app/[lang]/components/ADRCategoryPage';
import { Train6TParameterModelsInMinutesAdrsList } from './train-6t-parameter-models-in-minutes-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Train 6T-parameter models in minutes ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={Train6TParameterModelsInMinutesAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}