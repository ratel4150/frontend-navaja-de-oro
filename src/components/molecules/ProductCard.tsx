// src\components\molecules\ProductCard.tsx
import {
  Paper,
  Typography,
  Box,
  Button,
  Stack,
  IconButton,
  Tooltip,
  Divider,
} from '@mui/material';
import { FiHeart } from 'react-icons/fi';
import { BsStarFill } from 'react-icons/bs';
import { MdOutlineInventory2, MdLocalOffer } from 'react-icons/md';
import { GiWeight } from 'react-icons/gi';

interface ProductCardProps {
  name: string;
  description: string;
  rating: string;
  image: string;
  price: string;
  pricePerGram?: string;
  brand?: string;
  monthlySales?: string;
}

const ProductCard = ({
  name,
  description,
  rating,
  image,
  price,
  pricePerGram,
  brand,
  monthlySales,
}: ProductCardProps) => (
  <Paper
    elevation={1}
    sx={{
      borderRadius: 3,
      backgroundColor: '#121212',
      border: '1px solid rgba(255, 255, 255, 0.06)',
      color: '#fff',
      overflow: 'hidden',
      p: 2.5,
      mx:1,
      transition: 'all 0.3s ease',
      '&:hover': {
        boxShadow: '0 8px 28px rgba(0,0,0,0.3)',
        transform: 'translateY(-3px)',
        borderColor: '#FFD70033',
      },
    }}
  >
    {/* Favorito */}
 <Tooltip title="Agregar a favoritos" arrow>
  <IconButton
    size="small"
    sx={{
      position: 'absolute',
      top: 10,
      right: 10,
      zIndex: 2,
      backdropFilter: 'blur(6px)',
      backgroundColor: 'rgba(255, 255, 255, 0.06)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      color: '#FFD700',
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.25)',
      transition: 'all 0.25s ease-in-out',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        transform: 'scale(1.08)',
      },
    }}
  >
    <FiHeart size={17} />
  </IconButton>
</Tooltip>


    {/* Imagen */}
    <Box
      component="img"
      src={image}
      alt={name}
      sx={{
        width: '100%',
        height: 160,
        borderRadius: 2,
        objectFit: 'cover',
        mb: 2,
      }}
    />

    {/* Marca y nombre */}
    {brand && (
      <Typography
        variant="caption"
        sx={{
          color: '#888',
          textTransform: 'uppercase',
          fontWeight: 600,
          letterSpacing: 1,
        }}
      >
        {brand}
      </Typography>
    )}

    <Typography
      variant="subtitle1"
      sx={{
        fontWeight: 700,
        color: '#F5F5F5',
        mt: 0.5,
        mb: 1,
      }}
    >
      {name}
    </Typography>

    {/* Descripción */}
    <Typography variant="body2" sx={{ color: '#aaa', mb: 1.5 }}>
      {description}
    </Typography>

    {/* Precio y rating */}
   <Stack
  direction="row"
  justifyContent="space-between"
  alignItems="center"
  spacing={3}
  sx={{
    mt: 2,
    px: 1,
    py: 1.5,
    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(4px)',
  }}
>
  {/* PRECIO CON ETIQUETA DE DESCUENTO */}
  <Box position="relative">
    <Stack spacing={0.5}>
      <Typography
        variant="overline"
        sx={{
          color: '#999',
          fontSize: '0.7rem',
          letterSpacing: 1,
        }}
      >
        PRECIO
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: '#FFD700',
          fontWeight: 800,
          fontSize: '1.4rem',
          textShadow: '0 0 6px rgba(255, 215, 0, 0.3)',
          lineHeight: 1.2,
        }}
      >
        {price}
      </Typography>
    </Stack>

    {/* Etiqueta de descuento flotante */}
    <Box
      sx={{
        position: 'absolute',
        top: -12,
        right: -30,
        backgroundColor: '#FF4D4F',
        color: '#fff',
        fontSize: '0.6rem',
        fontWeight: 700,
        px: 1.2,
        py: 0.3,
        borderRadius: 1,
        transform: 'rotate(-10deg)',
        boxShadow: '0 0 8px rgba(255, 77, 79, 0.4)',
      }}
    >
      -13% OFF
    </Box>
  </Box>

  {/* CALIFICACIÓN */}
  <Stack spacing={0.5} alignItems="flex-end">
    <Typography
      variant="overline"
      sx={{
        color: '#999',
        fontSize: '0.7rem',
        letterSpacing: 1,
      }}
    >
      CALIFICACIÓN
    </Typography>
    <Stack direction="row" spacing={0.5} alignItems="center">
      
      <Typography
        variant="body2"
        sx={{
          color: '#FFD700',
          fontWeight: 600,
          fontSize: '0.95rem',
        }}
      >
        {rating}
      </Typography>
    </Stack>
  </Stack>
</Stack>



    <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.06)' }} />

    {/* Info adicional */}
    <Stack direction="row" spacing={2} justifyContent="space-between">
      {pricePerGram && (
        <Stack direction="row" spacing={0.5} alignItems="center">
          <GiWeight size={14} color="#FFD700" />
          <Typography variant="caption" sx={{ color: '#ccc' }}>
            {pricePerGram}
          </Typography>
        </Stack>
      )}
      {monthlySales && (
        <Stack direction="row" spacing={0.5} alignItems="center">
          <MdOutlineInventory2 size={14} color="#FFD700" />
          <Typography variant="caption" sx={{ color: '#ccc' }}>
            {monthlySales}
          </Typography>
        </Stack>
      )}
    </Stack>

    {/* CTA */}
    <Button
      variant="outlined"
      fullWidth
      sx={{
        mt: 2,
        borderColor: '#FFD700',
        color: '#FFD700',
        fontWeight: 600,
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        borderRadius: 2,
        letterSpacing: 1,
        '&:hover': {
          backgroundColor: '#FFD700',
          color: '#000',
          boxShadow: '0 0 12px #FFD700',
        },
      }}
    >
      Ver producto
    </Button>
  </Paper>
);

export default ProductCard;
