import { ADRCategoryPage } from '@/app/components/ADRCategoryPage';
import { SuperluminalEffectiveWarpDriveAdrsList } from './superluminal-effective-warp-drive-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Superluminal-Effective Warp Drive ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={SuperluminalEffectiveWarpDriveAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}