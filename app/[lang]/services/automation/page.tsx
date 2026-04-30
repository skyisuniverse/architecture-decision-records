import { Typography, Box } from '@mui/material';
import Image from 'next/image';
import localImage from '../../../../public/images/services/full-size/automation.jpg';

export default function AutomationPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Automation
      </Typography>
      <Typography variant="body1">
        This is the Automation page.
        <br />
        - Software development & deployment
        <br />
        - (web/desktop/mobile apps, APIs, etc.)
        <br />
        - (CI/CD pipelines, infrastructure automation, etc.)
        <br />
        - AI Training & Deployment
        <br />
        - Physical Production automation (Optimus robots, etc.)
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