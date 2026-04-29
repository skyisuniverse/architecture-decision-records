import { ADRCategoryPage } from '@/app/[lang]/components/ADRCategoryPage';
import { DirectBinaryCodeGenerationAdrsList } from './direct-binary-code-generation-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Direct Binary Code Generation ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={DirectBinaryCodeGenerationAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}