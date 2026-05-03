import { ADRCategoryPage } from '@/app/[lang]/components/ADRCategoryPage';
import { StarshipForgeAIAdrsList } from './starship-forge-ai-adrs-list';
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
      title={globalDict['starship-forge-ai-adr'] ?? 'Starship Forge-AI ADR'}
      publishedDate={globalDict['starship-forge-ai-adr.published'] ?? 'Published April 2026'}
      description={
        <>
          Can be integrated with/into {' '}
          <MuiNextLink href="/adrs/engineering-simulation-tool-adr">Engineering Simulation Tool</MuiNextLink>
        </>
      }
      adrsList={StarshipForgeAIAdrsList}
      dict={dict}                    // ← single dict now
    />
  );
}