import { Typography, Box } from '@mui/material';

export default function SpacexPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        SpaceX
      </Typography>
      <Typography variant="body1">
        This is the SpaceX page.
      </Typography>
    </Box>
  );
}