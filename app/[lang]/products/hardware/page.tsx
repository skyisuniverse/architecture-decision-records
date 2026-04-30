import { Typography, Box } from '@mui/material';
import Image from 'next/image';
import localImage from '../../../../public/images/products/full-size/hardware.jpg';

export default function HardwarePage() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Hardware
      </Typography>
      <Typography variant="body1">
        This is the Hardware page.
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