import { Typography, Box } from '@mui/material';

export default function ProductsPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>
      <Typography variant="body1">
        This is the Products page.
      </Typography>
    </Box>
  );
}