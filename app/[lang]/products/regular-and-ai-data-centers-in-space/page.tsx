import { Typography, Box } from '@mui/material';
import Image from 'next/image';
import localImage from '../../../../public/images/products/full-size/regular-and-ai-data-centers-in-space.jpg';

export default function RegularAndAIDataCentersInSpacePage() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Regular & AI Data Centers in Space
      </Typography>
      <Typography variant="body1">
        This is the Regular & AI Data Centers in Space page.
      </Typography>

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