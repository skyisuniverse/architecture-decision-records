import { ADRCategoryPage } from '@/app/[lang]/components/ADRCategoryPage';
import { FusionStarshipAdrsList } from './fusion-starship-adrs-list';
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
      title={globalDict['fusion-starship-adr'] ?? 'Fusion Starship ADR'}
      publishedDate={globalDict['fusion-starship-adr.published'] ?? 'Published April 2026'}
      description={<></>}
      adrsList={FusionStarshipAdrsList}
      dict={dict}                    // ← single dict now
    />
  );
}