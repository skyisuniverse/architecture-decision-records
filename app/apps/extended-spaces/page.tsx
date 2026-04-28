import { Typography, Box } from '@mui/material';
import Image from 'next/image';
import localImage from '../../../public/images/apps/extended-spaces.jpg';

export default function ExtendedSpacesPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Extended Spaces
      </Typography>
      <Typography variant="body1">
        This is the Extended Spaces page.
      </Typography>
      <br />
      <br />
      <Image
        src={localImage} // Static imports automatically provide width/height
        alt="Full width image"
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    </Box>
  );
}