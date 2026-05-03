import { ADRCategoryPage } from '@/app/[lang]/components/ADRCategoryPage';
import { NanoassemblyAdrsList } from './nano-assembly-adrs-list';
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
      title={globalDict['nano-assembly-adr'] ?? 'Nano-assembly ADR'}
      publishedDate={globalDict['nano-assembly-adr.published'] ?? 'Published April 2026'}
      description={
        <>
          How do we approach / work with different substances with nano-assembly (nanobot swarms):
          <br />    
          - Ground (in context of ground works)
          <br />
          - Metal (in context of Starship production)
          <br />
          - Gases (in context of propellant generation / storage(?))
          <br />
          - Brain (in context of BCIs / autism healing / augmentation / etc.)
          <br />
          - Computing substrates (in context of compute & chips production)
          <br />
          - etc.
        </>
      }
      adrsList={NanoassemblyAdrsList}
      dict={dict}                    // ← single dict now
    />
  );
}