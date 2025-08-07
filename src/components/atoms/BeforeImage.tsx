// src/components/atoms/BeforeImage.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

interface Props {
  src: string;
  alt?: string;
}

const BeforeImage: React.FC<Props> = ({ src, alt }) => (
  <Box
    sx={{
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      borderRadius: 3,
      userSelect: 'none',
      pointerEvents: 'none',
      zIndex: 1,
    }}
  >
    {/* Imagen BEFORE */}
    <Box
      component="img"
      src={src}
      alt={alt || 'Before'}
      sx={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        filter: 'brightness(0.9) contrast(1.05) saturate(1.05)',
        transition: 'filter 0.3s ease',
      }}
    />

    {/* Etiqueta superior “ANTES” con estilo avanzado */}
   <Box
  sx={{
    position: 'absolute',
    top: 16,
    right: 16,
    px: 2.5,
    py: 0.8,
    borderRadius: '12px',
    background: 'linear-gradient(135deg, rgba(20,20,20,0.7), rgba(0,0,0,0.3))',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(6px)',
    boxShadow: '0 0 16px rgba(255,255,255,0.04)',
    zIndex: 10,
  }}
>
  <Typography
    variant="caption"
    sx={{
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 700,
      fontSize: '0.75rem',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: '#FFD700',
      textShadow: '0 0 4px rgba(255, 215, 0, 0.4)',
    }}
  >
    DESPUÉS
  </Typography>
</Box>

    {/* Glow decorativo sutil */}
    <Box
      sx={{
        position: 'absolute',
        bottom: -20,
        left: -20,
        width: 100,
        height: 100,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.04), transparent)',
        filter: 'blur(12px)',
        zIndex: 0,
      }}
    />
  </Box>
);

export default BeforeImage;
