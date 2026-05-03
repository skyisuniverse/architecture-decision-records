import { ADRCategoryPage } from '@/app/[lang]/components/ADRCategoryPage';
import { StarshipInstantReusabilityAdrsList } from './starship-instant-reusability-adrs-list';
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
      title={globalDict['starship-instant-reusability-adr'] ?? 'Starship Instant Reusability ADR'}
      publishedDate={globalDict['starship-instant-reusability-adr.published'] ?? 'Published April 2026'}
      description={
        <>
          With what type of Starship engine is instant reusability achievable best of all?
          <br />- Chemical engines (methalox)
          <br />- Fusion engine
          <br />- Warp drive
          <br />Assess instant reusability of (starship, launchpad, starbase infra, processes) ?
          <br />Things like neccesity (or not) of propellant? Time and resource needed in each case, etc.?
          <br />e.g. think propellant storage? loading? infra? etc.
          <br />air separation? (or not)?
          <br />burning propellant to propulse, or () ?
          <br />consequences of fire damage to pad? (with fusion engine? warp?)
          <br />space of rocket used for propellant (storage / tank) or .... (payload) ?
        </>
      }
      adrsList={StarshipInstantReusabilityAdrsList}
      dict={dict}                    // ← single dict now
    />
  );
}