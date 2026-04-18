import { ADRCategoryPage } from '@/app/components/ADRCategoryPage';
import { ChipDesignToolAdrsList } from './chip-design-tool-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Chip Design Tool ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={ChipDesignToolAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}