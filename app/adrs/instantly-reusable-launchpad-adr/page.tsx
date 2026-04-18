import { ADRCategoryPage } from '@/app/components/ADRCategoryPage';
import { InstantlyReusableLaunchpadAdrsList } from './instantly-reusable-launchpad-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Instantly Reusable Launchpad ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={InstantlyReusableLaunchpadAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}