import { Typography, Box } from '@mui/material';
import Image from 'next/image';
import localImage from '../../../../public/images/products/full-size/quantum-data-centers-in-space.jpg';

export default function QuantumDataCentersInSpacePage() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Quantum Data Centers in Space
      </Typography>
      <Typography variant="body1">
        This is the Quantum Data Centers in Space page.
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