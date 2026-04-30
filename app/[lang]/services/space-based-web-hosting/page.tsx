import { Typography, Box } from '@mui/material';
import Image from 'next/image';
import localImage from '../../../../public/images/services/full-size/space-based-web-hosting.jpg';

export default function SpaceBasedWebHostingPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Space-based Web Hosting
      </Typography>
      <Typography variant="body1">
        This is the Space-based Web Hosting page.
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