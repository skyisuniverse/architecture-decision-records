import { ADRCategoryPage } from '@/app/[lang]/components/ADRCategoryPage';
import StarshipImage from './starship.jpg';
import { EngineeringSimulationToolAdrsList } from './simulation-tool-adrs-list';
import MuiNextLink from '@/app/[lang]/components/MuiNextLink';
import { getDictionary } from '@/get-dictionary';
import type { Locale } from '@/i18n-config';

export default async function Page({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;

  const globalDict = await getDictionary(lang);

  // Load colocated dictionary
  let decisionDict: Record<string, string> = {};
  try {
    const module = await import(`./decisions-dictionaries/${lang}.json`);
    decisionDict = module.default || module;
  } catch (err) {
    console.warn('Could not load colocated decision dictionary');
  }

  // Merge both into ONE dict (this eliminates all the double-passing)
  const dict = { ...globalDict, ...decisionDict };

  return (
    <ADRCategoryPage
      title={globalDict['engineering-simulation-tool-adr'] ?? 'Engineering Simulation Tool ADR'}
      publishedDate={globalDict['engineering-simulation-tool-adr.published'] ?? 'Published April 2026'}
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
      dict={dict}                    // ← single dict now
    />
  );
}