import { ADRCategoryPage } from '@/app/[lang]/components/ADRCategoryPage';
import { PhotonicComputingAdrsList } from './photonic-computing-adrs-list';
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
      title={globalDict['photonic-computing-adr'] ?? 'Photonic Computing ADR'}
      publishedDate={globalDict['photonic-computing-adr.published'] ?? 'Published April 2026'}
      description={<></>}
      adrsList={PhotonicComputingAdrsList}
      dict={dict}                    // ← single dict now
    />
  );
}