import { ADRCategoryPage } from '@/app/components/ADRCategoryPage';
import StarshipImage from './starship.jpg';
import { EngineeringSimulationToolAdrsList } from './simulation-tool-adrs-list';
import MuiNextLink from '@/app/components/MuiNextLink';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Engineering Simulation Tool ADR"
      publishedDate="Published April 2026"
      // description="
      //   Develop a simulation tool with realistic physics, 
      //   for simulations of a 3D-object across multiple domains (physics, 
      //   chemistry, etc).
      //   "
      description={
        <>
          Can be integrated with: {' '}
          <MuiNextLink href="/adrs/grok-cad-adr">Grok CAD</MuiNextLink>, {' '}
          <MuiNextLink href="/adrs/starship-forge-ai-adr">Starship Forge AI</MuiNextLink>, {' '}
          <MuiNextLink href="/adrs/chip-design-tool-adr">Chip Design Tool</MuiNextLink>
          <br /><br />
          Develop a simulation tool with realistic physics, 
          for simulations of a 3D-object across multiple domains (physics, 
          chemistry, etc).
        </>
      }
      imageSrc={StarshipImage}
      adrsList={EngineeringSimulationToolAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
      // children={<YourCustomComponentOrMarkdown />}
    />
  );
}