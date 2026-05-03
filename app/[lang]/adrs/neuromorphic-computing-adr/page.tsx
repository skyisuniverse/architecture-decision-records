import { ADRCategoryPage } from '@/app/[lang]/components/ADRCategoryPage';
import { NeuromorphicComputingAdrsList } from './neuromorphic-computing-adrs-list';
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
      title={globalDict['neuromorphic-computing-adr'] ?? 'Neuromorphic computing ADR'}
      publishedDate={globalDict['neuromorphic-computing-adr.published'] ?? 'Published April 2026'}
      description={<></>}
      adrsList={NeuromorphicComputingAdrsList}
      dict={dict}                    // ← single dict now
    />
  );
}