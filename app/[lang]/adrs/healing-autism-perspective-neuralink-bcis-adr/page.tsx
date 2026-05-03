import { ADRCategoryPage } from '@/app/[lang]/components/ADRCategoryPage';
import { HealingAutismPerspectiveNeuralinkBCIsAdrsList } from './healing-autism-perspective-neuralink-bcis-adrs-list';
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
      title={globalDict['healing-autism-perspective-neuralink-bcis-adr'] ?? 'Healing Autism. Perspective Neuralink BCIs'}
      publishedDate={globalDict['healing-autism-perspective-neuralink-bcis-adr.published'] ?? 'Published April 2026'}
      description={<></>}
      adrsList={HealingAutismPerspectiveNeuralinkBCIsAdrsList}
      dict={dict}                    // ← single dict now
    />
  );
}