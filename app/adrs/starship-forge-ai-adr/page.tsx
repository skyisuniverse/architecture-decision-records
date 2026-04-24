import { ADRCategoryPage } from '@/app/components/ADRCategoryPage';
import { StarshipForgeAIAdrsList } from './starship-forge-ai-adrs-list';
import MuiNextLink from '@/app/components/MuiNextLink';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Starship Forge-AI ADR"
      publishedDate="Published April 2026"
      description={
        <>
          Should be one application with {' '}
          <MuiNextLink href="/adrs/engineering-simulation-tool-adr">Engineering Simulation Tool</MuiNextLink>
        </>
      }
      //   imageSrc={}
      adrsList={StarshipForgeAIAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}