// src/components/atoms/ProductRating.tsx
import { Typography } from '@mui/material';

const ProductRating = ({ value }: { value: string }) => (
  <Typography
    variant="caption"
    sx={{
      color: '#FFD700',
      fontStyle: 'italic',
      fontWeight: 500,
      ml: 1,
    }}
  >
    ({value})
  </Typography>
);

export default ProductRating;
