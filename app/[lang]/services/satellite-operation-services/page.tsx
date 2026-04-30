import { Typography, Box } from '@mui/material';
import Image from 'next/image';
import localImage from '../../../../public/images/services/full-size/satellite-operation-services.jpg';

export default function SatelliteOperationServicesPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Satellite Operation Services
      </Typography>
      <Typography variant="body1">
        This is the Satellite Operation Services page.
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