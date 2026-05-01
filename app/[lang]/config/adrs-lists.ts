// app/[lang]/config/adrs-lists.ts

import { NanoassemblyAdrsList } from '@/app/[lang]/adrs/nano-assembly-adr/nano-assembly-adrs-list';
import { InstantlyReusableLaunchpadAdrsList } from '../adrs/instantly-reusable-launchpad-adr/instantly-reusable-launchpad-adrs-list';
import { StarshipNanoassemblyAdrsList } from '../adrs/starship-nano-assembly-adr/starship-nano-assembly-adrs-list';
import { ThreeDPrinterForStarshipsAdrsList } from '../adrs/3d-printer-for-starships-adr/3d-printer-for-starships-adrs-list';
import { ThreeDPrintingStarshipsAdrsList } from '../adrs/3d-printing-starships-adr/3d-printing-starships-adrs-list';
import { AlternativeHardwareForAITrainingAdrsList } from '../adrs/alternative-hardware-for-ai-training-adr/alternative-hardware-for-ai-training-adrs-list';
import { DirectBinaryCodeGenerationAdrsList } from '../adrs/direct-binary-code-generation-adr/direct-binary-code-generation-adrs-list';
import { FasterFactoriesWithOptimusSemiCybercabAdrsList } from '../adrs/faster-factories-with-optimus-semi-cybercab-adr/faster-factories-with-optimus-semi-cybercab-adrs-list';
import { NanoAssembledCybercabAdrsList } from '../adrs/nano-assembled-cybercab-adr/nano-assembled-cybercab-adrs-list';
import { NanoAssembledOptimusAdrsList } from '../adrs/nano-assembled-optimus-adr/nano-assembled-optimus-adrs-list';
import { NanoAssembledSemiAdrsList } from '../adrs/nano-assembled-semi-adr/nano-assembled-semis-list';
import { NanoAssemblyBoostedSpaceXAdrsList } from '../adrs/nanoassembly-boosted-spacex-adr/nanoassembly-boosted-spacex-adrs-list';
import { SolarPoweredTeslaAdrsList } from '../adrs/solar-powered-tesla-adr/solar-powered-tesla-adrs-list';
import { SpaceXAutomatedWithOptimiAdrsList } from '../adrs/spacex-automated-with-optimi-adr/spacex-automated-with-optimi-adrs-list';
import { StarshipForgeAIAdrsList } from '../adrs/starship-forge-ai-adr/starship-forge-ai-adrs-list';
import { StarshipWithFusionEngineAdrsList } from '../adrs/starship-with-a-fusion-engine-adr/starship-with-a-fusion-engine-adrs-list';
import { TeslaAutomatedWithOptimiAdrsList } from '../adrs/tesla-automated-with-optimi-adr/tesla-automated-with-optimi-adrs-list';
import { Train6TParameterModelsInMinutesAdrsList } from '../adrs/train-6t-parameter-models-in-minutes-adr/train-6t-parameter-models-in-minutes-adrs-list';
import { XAIPoweredEntirelyWithSolarAdrsList } from '../adrs/xai-powered-entirely-with-solar-adr/xai-powered-entirely-with-solar-adrs-list';
import { XAIs100MRubinEquivalentComputeAdrsList } from '../adrs/xais-100m-rubin-equivalent-compute-adr/xais-100m-rubin-equivalent-compute-adrs-list';
import { GenericRandDCenterAdrsList } from '../adrs/generic-r&d-center-adr/generic-r&d-center-adrs-list';
import { AirSeparationAdrsList } from '../adrs/air-separation-adr/air-separation-adrs-list';
import { Falcon9AndHeavyNanoAssemblyAdrsList } from '../adrs/falcon-9-and-heavy-nano-assembly-adr/falcon-9-and-heavy-nano-assembly-adrs-list';
import { FusionPowerPlantAdrsList } from '../adrs/fusion-power-plant-adr/fusion-power-plant-adrs-list';
import { FusionStarshipAdrsList } from '../adrs/fusion-starship-adr/fusion-starship-adrs-list';
import { GrokCADAdrsList } from '../adrs/grok-cad-adr/grok-cad-adrs-list';
import { MassDriverAdrsList } from '../adrs/mass-driver-adr/mass-driver-adrs-list';
import { NanoAssembledGroundWorksAdrsList } from '../adrs/nano-assembled-ground-works-adr/nano-assembled-ground-works-adrs-list';
import { NanoAssembledMechazillaAdrsList } from '../adrs/nano-assembled-mechazilla-adr/nano-assembled-mechazilla-adrs-list';
import { NanoAssembledOrbitalHeatShieldAdrsList } from '../adrs/nano-assembled-orbital-heat-shield-adr/nano-assembled-orbital-heat-shield-adrs-list';
import { NanoAssembledStarlinkAdrsList } from '../adrs/nano-assembled-starlink-adr/nano-assembled-starlink-adrs-list';
import { PropellantGenerationAdrsList } from '../adrs/propellant-generation-adr/propellant-generation-adrs-list';
import { SmartStarbaseAdrsList } from '../adrs/smart-starbase-adr/smart-starbase-adrs-list';
import { SolarSystemHabitationAdrsList } from '../adrs/solar-system-habitation-adr/solar-system-habitation-adrs-list';
import { StarshipInstantReusabilityAdrsList } from '../adrs/starship-instant-reusability-adr/starship-instant-reusability-adrs-list';
import { TerraformingMarsAdrsList } from '../adrs/terraforming-mars-adr/terraforming-mars-adrs-list';
import { CompressingMarsTerraformingAdrsList } from '../adrs/compressing-mars-terraforming-adr/compressing-mars-terraforming-adrs-list';
import { HealingAutismPerspectiveNeuralinkBCIsAdrsList } from '../adrs/healing-autism-perspective-neuralink-bcis-adr/healing-autism-perspective-neuralink-bcis-adrs-list';
import { NeuralinkBCIOvercomingSerialAttentionLimitationAdrsList } from '../adrs/neuralink-bci-overcoming-serial-attention-limitation-adr/neuralink-bci-overcoming-serial-attention-limitation-adrs-list';
import { NeuromorphicComputingAdrsList } from '../adrs/neuromorphic-computing-adr/neuromorphic-computing-adrs-list';
import { PhotonicComputingAdrsList } from '../adrs/photonic-computing-adr/photonic-computing-adrs-list';
import { QuantumComputingAdrsList } from '../adrs/quantum-computing-adr/quantum-computing-adrs-list';
import { ThreeDPrintingAdrsList } from '../adrs/3d-printing-adr/3d-printing-adrs-list';
import { NanoAssemblerAdrsList } from '../adrs/nano-assembler-adr/nano-assembler-adrs-list';
import { ThreeDPrinterAdrsList } from '../adrs/3d-printer-adr/3d-printer-adrs-list';
import { ChipDesignToolAdrsList } from '../adrs/chip-design-tool-adr/chip-design-tool-adrs-list';
import { EngineeringSimulationToolAdrsList } from '../adrs/engineering-simulation-tool-adr/simulation-tool-adrs-list';
import { AutomatedDesignManufacturingPipelineAdrsList } from '../adrs/automated-design-manufacturing-pipeline-adr/automated-design-manufacturing-pipeline-adrs-list';
import { WarpDriveWithoutNegativeEnergyAdrsList } from '../adrs/warp-drive-without-negative-energy-adr/warp-drive-without-negative-energy-adrs-list';
import { SuperluminalEffectiveWarpDriveAdrsList } from '../adrs/superluminal-effective-warp-drive-adr/superluminal-effective-warp-drive-adrs-list';
import { OptimusAdrsList } from '../adrs/optimus-adr/optimus-adrs-list';

export const adrsListMap: Record<string, any> = {
  'nano-assembly-adr': NanoassemblyAdrsList,
  'nano-assembler-adr': NanoAssemblerAdrsList,
  '3d-printing-adr': ThreeDPrintingAdrsList,
  '3d-printer-adr': ThreeDPrinterAdrsList,
  'chip-design-tool-adr': ChipDesignToolAdrsList,
  'engineering-simulation-tool-adr': EngineeringSimulationToolAdrsList,
  'automated-design-manufacturing-pipeline-adr': AutomatedDesignManufacturingPipelineAdrsList,
  'instantly-reusable-launchpad-adr': InstantlyReusableLaunchpadAdrsList,
  'starship-nano-assembly-adr': StarshipNanoassemblyAdrsList,
  '3d-printer-for-starships-adr': ThreeDPrinterForStarshipsAdrsList,
  '3d-printing-starships-adr': ThreeDPrintingStarshipsAdrsList,
  'alternative-hardware-for-ai-training-adr': AlternativeHardwareForAITrainingAdrsList,
  'direct-binary-code-generation-adr': DirectBinaryCodeGenerationAdrsList,
  'faster-factories-with-optimus-semi-cybercab-adr': FasterFactoriesWithOptimusSemiCybercabAdrsList,
  'nano-assembled-cybercab-adr': NanoAssembledCybercabAdrsList,
  'nano-assembled-optimus-adr': NanoAssembledOptimusAdrsList,
  'nano-assembled-semi-adr': NanoAssembledSemiAdrsList,
  'nanoassembly-boosted-spacex-adr': NanoAssemblyBoostedSpaceXAdrsList,
  'solar-powered-tesla-adr': SolarPoweredTeslaAdrsList,
  'spacex-automated-with-optimi-adr': SpaceXAutomatedWithOptimiAdrsList,
  'starship-forge-ai-adr': StarshipForgeAIAdrsList,
  'starship-with-a-fusion-engine-adr': StarshipWithFusionEngineAdrsList,
  'tesla-automated-with-optimi-adr': TeslaAutomatedWithOptimiAdrsList,
  'train-6t-parameter-models-in-minutes-adr': Train6TParameterModelsInMinutesAdrsList,
  'xai-powered-entirely-with-solar-adr': XAIPoweredEntirelyWithSolarAdrsList,
  'xais-100m-rubin-equivalent-compute-adr': XAIs100MRubinEquivalentComputeAdrsList,
  'generic-r&d-center-adr': GenericRandDCenterAdrsList,
  'air-separation-adr': AirSeparationAdrsList,
  'falcon-9-and-heavy-nano-assembly-adr': Falcon9AndHeavyNanoAssemblyAdrsList,
  'fusion-power-plant-adr': FusionPowerPlantAdrsList,
  'fusion-starship-adr': FusionStarshipAdrsList,
  'grok-cad-adr': GrokCADAdrsList,
  'mass-driver-adr': MassDriverAdrsList,
  'nano-assembled-ground-works-adr': NanoAssembledGroundWorksAdrsList,
  'nano-assembled-mechazilla-adr': NanoAssembledMechazillaAdrsList,
  'nano-assembled-orbital-heat-shield-adr': NanoAssembledOrbitalHeatShieldAdrsList,
  'nano-assembled-starlink-adr': NanoAssembledStarlinkAdrsList,
  'propellant-generation-adr': PropellantGenerationAdrsList,
  'smart-starbase-adr': SmartStarbaseAdrsList,
  'solar-system-habitation-adr': SolarSystemHabitationAdrsList,
  'starship-instant-reusability-adr': StarshipInstantReusabilityAdrsList,
  'terraforming-mars-adr': TerraformingMarsAdrsList,
  'compressing-mars-terraforming-adr': CompressingMarsTerraformingAdrsList,
  'healing-autism-perspective-neuralink-bcis-adr': HealingAutismPerspectiveNeuralinkBCIsAdrsList,
  'neuralink-bci-overcoming-serial-attention-limitation-adr': NeuralinkBCIOvercomingSerialAttentionLimitationAdrsList,
  'neuromorphic-computing-adr': NeuromorphicComputingAdrsList,
  'photonic-computing-adr': PhotonicComputingAdrsList,
  'quantum-computing-adr': QuantumComputingAdrsList,
  'warp-drive-without-negative-energy-adr': WarpDriveWithoutNegativeEnergyAdrsList,
  'superluminal-effective-warp-drive-adr': SuperluminalEffectiveWarpDriveAdrsList,
  'optimus-adr': OptimusAdrsList,
} as const;

export type AdrSlug = keyof typeof adrsListMap;

export interface Category {
  id: string;
  name: string;
  mainPageSlug?: AdrSlug;
  adrs: { slug: AdrSlug; label: string }[];
}

type Dictionary = Record<string, string>;

// ──────────────────────────────────────────────────────────────
// Raw categories using translation keys
// ──────────────────────────────────────────────────────────────
const rawCategories: Category[] = [
  {
    id: 'rd-center',
    name: 'category.rd-center',
    mainPageSlug: 'generic-r&d-center-adr',
    adrs: [
      { slug: 'generic-r&d-center-adr', label: 'generic-r&d-center-adr' },
      { slug: 'nano-assembly-adr', label: 'nano-assembly-adr' },
      { slug: 'nano-assembler-adr', label: 'nano-assembler-adr' },
      { slug: '3d-printing-adr', label: '3d-printing-adr' },
      { slug: '3d-printer-adr', label: '3d-printer-adr' },
      { slug: 'automated-design-manufacturing-pipeline-adr', label: 'automated-design-manufacturing-pipeline-adr' },
    ],
  },
  {
    id: 'spacex-falcon',
    name: 'category.spacex-falcon',
    mainPageSlug: 'falcon-9-and-heavy-nano-assembly-adr',
    adrs: [{ slug: 'falcon-9-and-heavy-nano-assembly-adr', label: 'falcon-9-and-heavy-nano-assembly-adr' }],
  },
  {
    id: 'spacex-starship',
    name: 'category.spacex-starship',
    mainPageSlug: 'starship-nano-assembly-adr',
    adrs: [
      { slug: 'starship-instant-reusability-adr', label: 'starship-instant-reusability-adr' },
      { slug: 'starship-nano-assembly-adr', label: 'starship-nano-assembly-adr' },
      { slug: 'nano-assembled-orbital-heat-shield-adr', label: 'nano-assembled-orbital-heat-shield-adr' },
      { slug: '3d-printer-for-starships-adr', label: '3d-printer-for-starships-adr' },
      { slug: '3d-printing-starships-adr', label: '3d-printing-starships-adr' },
      { slug: 'starship-forge-ai-adr', label: 'starship-forge-ai-adr' },
      { slug: 'starship-with-a-fusion-engine-adr', label: 'starship-with-a-fusion-engine-adr' },
      { slug: 'fusion-starship-adr', label: 'fusion-starship-adr' },
    ],
  },
  {
    id: 'spacex-starbase',
    name: 'category.spacex-starbase',
    mainPageSlug: 'instantly-reusable-launchpad-adr',
    adrs: [
      { slug: 'instantly-reusable-launchpad-adr', label: 'instantly-reusable-launchpad-adr' },
      { slug: 'nano-assembled-mechazilla-adr', label: 'nano-assembled-mechazilla-adr' },
      { slug: 'nanoassembly-boosted-spacex-adr', label: 'nanoassembly-boosted-spacex-adr' },
      { slug: 'spacex-automated-with-optimi-adr', label: 'spacex-automated-with-optimi-adr' },
      { slug: 'air-separation-adr', label: 'air-separation-adr' },
      { slug: 'fusion-power-plant-adr', label: 'fusion-power-plant-adr' },
      { slug: 'nano-assembled-ground-works-adr', label: 'nano-assembled-ground-works-adr' },
      { slug: 'propellant-generation-adr', label: 'propellant-generation-adr' },
      { slug: 'smart-starbase-adr', label: 'smart-starbase-adr' },
    ],
  },
  {
    id: 'spacex-planet',
    name: 'category.spacex-planet',
    mainPageSlug: 'terraforming-mars-adr',
    adrs: [
      { slug: 'terraforming-mars-adr', label: 'terraforming-mars-adr' },
      { slug: 'compressing-mars-terraforming-adr', label: 'compressing-mars-terraforming-adr' },
      { slug: 'mass-driver-adr', label: 'mass-driver-adr' },
      { slug: 'solar-system-habitation-adr', label: 'solar-system-habitation-adr' },
    ],
  },
  {
    id: 'spacex-starlink',
    name: 'category.spacex-starlink',
    mainPageSlug: 'nano-assembled-starlink-adr',
    adrs: [{ slug: 'nano-assembled-starlink-adr', label: 'nano-assembled-starlink-adr' }],
  },
  {
    id: 'spacex-warp',
    name: 'category.spacex-warp',
    mainPageSlug: 'warp-drive-without-negative-energy-adr',
    adrs: [
      { slug: 'warp-drive-without-negative-energy-adr', label: 'warp-drive-without-negative-energy-adr' },
      { slug: 'superluminal-effective-warp-drive-adr', label: 'superluminal-effective-warp-drive-adr' },
    ],
  },
  {
    id: 'tesla',
    name: 'category.tesla',
    mainPageSlug: 'nano-assembled-optimus-adr',
    adrs: [
      { slug: 'nano-assembled-optimus-adr', label: 'nano-assembled-optimus-adr' },
      { slug: 'nano-assembled-cybercab-adr', label: 'nano-assembled-cybercab-adr' },
      { slug: 'nano-assembled-semi-adr', label: 'nano-assembled-semi-adr' },
      { slug: 'faster-factories-with-optimus-semi-cybercab-adr', label: 'faster-factories-with-optimus-semi-cybercab-adr' },
      { slug: 'solar-powered-tesla-adr', label: 'solar-powered-tesla-adr' },
      { slug: 'tesla-automated-with-optimi-adr', label: 'tesla-automated-with-optimi-adr' },
      { slug: 'optimus-adr', label: 'optimus-adr' },
    ],
  },
  {
    id: 'xai',
    name: 'category.xai',
    mainPageSlug: 'alternative-hardware-for-ai-training-adr',
    adrs: [
      { slug: 'alternative-hardware-for-ai-training-adr', label: 'alternative-hardware-for-ai-training-adr' },
      { slug: 'neuromorphic-computing-adr', label: 'neuromorphic-computing-adr' },
      { slug: 'photonic-computing-adr', label: 'photonic-computing-adr' },
      { slug: 'quantum-computing-adr', label: 'quantum-computing-adr' },
      { slug: 'grok-cad-adr', label: 'grok-cad-adr' },
      { slug: 'chip-design-tool-adr', label: 'chip-design-tool-adr' },
      { slug: 'engineering-simulation-tool-adr', label: 'engineering-simulation-tool-adr' },
      { slug: 'direct-binary-code-generation-adr', label: 'direct-binary-code-generation-adr' },
      { slug: 'train-6t-parameter-models-in-minutes-adr', label: 'train-6t-parameter-models-in-minutes-adr' },
      { slug: 'xai-powered-entirely-with-solar-adr', label: 'xai-powered-entirely-with-solar-adr' },
      { slug: 'xais-100m-rubin-equivalent-compute-adr', label: 'xais-100m-rubin-equivalent-compute-adr' },
    ],
  },
  {
    id: 'neuralink',
    name: 'category.neuralink',
    mainPageSlug: 'healing-autism-perspective-neuralink-bcis-adr',
    adrs: [
      { slug: 'healing-autism-perspective-neuralink-bcis-adr', label: 'healing-autism-perspective-neuralink-bcis-adr' },
      { slug: 'neuralink-bci-overcoming-serial-attention-limitation-adr', label: 'neuralink-bci-overcoming-serial-attention-limitation-adr' },
    ],
  },
];

export const getLocalizedCategories = (dict: Dictionary): Category[] => {
  return rawCategories.map((cat) => ({
    ...cat,
    name: dict[cat.name] ?? cat.name,
    adrs: cat.adrs.map((item) => ({
      ...item,
      label: dict[item.label] ?? item.label,
    })),
  }));
};

export function getCategoryBySlug(slug: AdrSlug | ''): Category | undefined {
  return rawCategories.find((cat) => cat.adrs.some((item) => item.slug === slug));
}

export const getAdrSelectOptions = (dict?: Dictionary) =>
  dict ? getLocalizedCategories(dict) : rawCategories;