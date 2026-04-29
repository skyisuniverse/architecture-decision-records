// import { Link } from '@mui/material';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';

// export default async function Page() {
//     return(
        
//     <Box>
//         <Typography variant="h4" sx={{ marginBottom: 2 }}>
//             [NeuraLink] [BCI] Overcoming serial attention limitation
//         </Typography>

        // <Typography variant="h6" sx={{ marginBottom: 2 }}>
        //     <Link 
        //         href="https://rd-center.vercel.app/neuralink/neuralink-bci-overcoming-serial-attention-limitation"
        //         color="inherit"
        //         target="_blank"
        //         sx={{ marginBottom: 2 }}
        //         >
        //         [NeuraLink] [BCI] Overcoming serial attention limitation
        //     </Link>
        // </Typography>
//     </Box>
    
//     )
// }

import { ADRCategoryPage } from '@/app/[lang]/components/ADRCategoryPage';
import { NeuralinkBCIOvercomingSerialAttentionLimitationAdrsList } from './neuralink-bci-overcoming-serial-attention-limitation-adrs-list';
import { Link, Typography } from '@mui/material';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="[NeuraLink] [BCI] Overcoming serial attention limitation"
      publishedDate="Published April 2026"
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
      //   imageSrc={}
      adrsList={NeuralinkBCIOvercomingSerialAttentionLimitationAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}