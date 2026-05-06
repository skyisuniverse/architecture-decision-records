import { ADRCategoryPage } from '@/app/[lang]/components/ADRCategoryPage';
import { OpenSourceCNCMachineAdrsList } from './open-source-cnc-machine-adrs-list';
import { getDictionary } from '@/get-dictionary';
import type { Locale } from '@/i18n-config';
import { Link, Typography } from '@mui/material';
import CNCMachineDesignImage from '../../../../public/images/adrs/open-source-cnc-machine-adr/CARVER-X5-Design.jpeg';

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
      title={globalDict['open-source-cnc-machine-adr'] ?? 'Open Source CNC ADR'}
      publishedDate={globalDict['open-source-cnc-adr.published'] ?? 'Published May 2026'}
      imageSrc={CNCMachineDesignImage}
      description={
        <>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
              <Link 
                href="https://github.com/MakerLabTunisia/CARVER_X5"
                color="inherit"
                target="_blank"
                sx={{ marginBottom: 2 }}
              >
                CARVER_X5: an OpenSourceHarware 5 Axis CNC Carving Machine
              </Link>
          </Typography>
        </>
      }
      adrsList={OpenSourceCNCMachineAdrsList}
      dict={dict}
    />
  );
}