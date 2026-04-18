import { ADRCategoryPage } from '@/app/components/ADRCategoryPage';
import { SolarPoweredTeslaAdrsList } from './solar-powered-tesla-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Solar Powered Tesla ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={SolarPoweredTeslaAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}