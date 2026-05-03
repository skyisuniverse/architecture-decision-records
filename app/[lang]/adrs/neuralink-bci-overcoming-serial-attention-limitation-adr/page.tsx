import { ADRCategoryPage } from '@/app/[lang]/components/ADRCategoryPage';
import { NeuralinkBCIOvercomingSerialAttentionLimitationAdrsList } from './neuralink-bci-overcoming-serial-attention-limitation-adrs-list';
import { Link, Typography } from '@mui/material';
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
      title={globalDict['neuralink-bci-overcoming-serial-attention-limitation-adr'] ?? '[NeuraLink] [BCI] Overcoming serial attention limitation'}
      publishedDate={globalDict['neuralink-bci-overcoming-serial-attention-limitation-adr.published'] ?? 'Published April 2026'}
      description={
        <>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            <Link 
              href="https://rd-center.vercel.app/neuralink/neuralink-bci-overcoming-serial-attention-limitation"
              color="inherit"
              target="_blank"
              sx={{ marginBottom: 2 }}
            >
              [NeuraLink] [BCI] Overcoming serial attention limitation
            </Link>
          </Typography>
        </>
      }
      adrsList={NeuralinkBCIOvercomingSerialAttentionLimitationAdrsList}
      dict={dict}                    // ← single dict now
    />
  );
}