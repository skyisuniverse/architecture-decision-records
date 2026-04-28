import { Typography, Box } from '@mui/material';
import Image from 'next/image';
import localImage from '../../../public/images/apps/ai-spaces.jpg';

export default function AiSpacesPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        AISpaces
      </Typography>
      <Typography variant="body1">
        This is the AISpaces page.
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