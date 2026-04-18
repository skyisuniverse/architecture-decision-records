import { ADRCategoryPage } from '@/app/components/ADRCategoryPage';
import StarshipImage from './starship.jpg';
import { SimulationToolAdrsList } from './simulation-tool-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Simulation Tool ADR"
      publishedDate="Published April 2026"
      description="
        Develop a simulation tool with realistic physics, 
        for simulations of a 3D-object across multiple domains (physics, 
        chemistry, etc).
        "
      imageSrc={StarshipImage}
      adrsList={SimulationToolAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
      // children={<YourCustomComponentOrMarkdown />}
    />
  );
}