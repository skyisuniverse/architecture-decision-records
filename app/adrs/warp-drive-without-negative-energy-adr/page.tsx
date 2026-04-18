import { ADRCategoryPage } from '@/app/components/ADRCategoryPage';
import { WarpDriveWithoutNegativeEnergyAdrsList } from './warp-drive-without-negative-energy-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Warp Drives Without Negative Energy ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={WarpDriveWithoutNegativeEnergyAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}