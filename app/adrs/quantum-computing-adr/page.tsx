import { ADRCategoryPage } from '@/app/components/ADRCategoryPage';
import { QuantumComputingAdrsList } from './quantum-computing-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Quantum Computing ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={QuantumComputingAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}