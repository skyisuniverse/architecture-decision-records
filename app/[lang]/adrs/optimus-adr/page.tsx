import { ADRCategoryPage } from '@/app/[lang]/components/ADRCategoryPage';
import { OptimusAdrsList } from './optimus-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Optimus ADR"
      publishedDate="Published May 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={OptimusAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}