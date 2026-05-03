import { ADRHeader } from '@/app/[lang]/components/ADRHeader';
import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        <>
            <ADRHeader />
            <Box>
                
            </Box>
        </>
    )
}

// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';

// export default function Page() {
//   return (
//     <>
//       <Typography variant="h1" sx={{ p: 4 }}>
//         ✅ Decision page is working!
//       </Typography>
//       <Box sx={{ p: 4 }}>
//         <Typography>
//           Path: /en/adrs/3d-printer-adr/decisions/3d-printer-decision-record-1
//         </Typography>
//       </Box>
//     </>
//   );
// }