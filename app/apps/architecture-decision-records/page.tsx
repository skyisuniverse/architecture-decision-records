import { Typography, Box } from '@mui/material';

export default function ADRPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Architecture Decision Records
      </Typography>
      <Typography variant="body1">
        This is the Architecture Decision Records page.
      </Typography>
    </Box>
  );
}