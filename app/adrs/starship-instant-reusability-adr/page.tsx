import { ADRCategoryPage } from '@/app/components/ADRCategoryPage';
import { StarshipInstantReusabilityAdrsList } from './starship-instant-reusability-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Starship Instant Reusability ADR"
      publishedDate="Published April 2026"
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
      //   imageSrc={}
      adrsList={StarshipInstantReusabilityAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}