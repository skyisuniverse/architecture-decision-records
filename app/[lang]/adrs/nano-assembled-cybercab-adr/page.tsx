// import { Link } from '@mui/material';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';

// export default async function Page() {
//     return(
        
//     <Box>
//         <Typography variant="h4" sx={{ marginBottom: 2 }}>
//             Nano Assembled Cybercab ADR
//         </Typography>
//     </Box>
    
//     )
// }

import { ADRCategoryPage } from '@/app/[lang]/components/ADRCategoryPage';
import { NanoAssembledCybercabAdrsList } from './nano-assembled-cybercab-adrs-list';

export default async function Page() {
  return (
    <ADRCategoryPage
      title="Nano Assembled Cybercab ADR"
      publishedDate="Published April 2026"
      description={
        <>
            
        </>
      }
      //   imageSrc={}
      adrsList={NanoAssembledCybercabAdrsList}
      // children slot is available here if you want to insert anything between description and ADR list
      // Example usage:
    //   children={}
    />
  );
}