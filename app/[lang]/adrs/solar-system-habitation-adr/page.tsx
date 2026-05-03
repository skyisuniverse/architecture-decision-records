import { ADRCategoryPage } from '@/app/[lang]/components/ADRCategoryPage';
import { SolarSystemHabitationAdrsList } from './solar-system-habitation-adrs-list';
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
      title={globalDict['solar-system-habitation-adr'] ?? 'Solar System Habitation ADR'}
      publishedDate={globalDict['solar-system-habitation-adr.published'] ?? 'Published April 2026'}
      description={<></>}
      adrsList={SolarSystemHabitationAdrsList}
      dict={dict}                    // ← single dict now
    />
  );
}