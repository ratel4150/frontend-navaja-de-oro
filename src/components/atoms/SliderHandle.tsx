import React from 'react';
import { Box, keyframes } from '@mui/material';

// Animación shimmer (brillo que se mueve de arriba a abajo)
const shimmer = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 0% 100%;
  }
`;

// Animación pulso para el halo
const pulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 8px 2px rgba(255, 215, 0, 0.7);
  }
  50% {
    box-shadow: 0 0 20px 6px rgba(255, 215, 0, 0.4);
  }
`;

// Animación para partículas fugaces


const SliderHandle: React.FC = () => (
  <Box
    sx={{
      position: 'relative',
      width: 6,
      height: '100%',
      borderRadius: 3,
      cursor: 'ew-resize',
      // Glassmorphism dorado
      background:
        'linear-gradient(180deg, rgba(255,215,0,0.9) 0%, rgba(255,215,0,0.6) 50%, rgba(255,215,0,0.9) 100%)',
      boxShadow: `
        0 0 10px 3px rgba(255, 215, 0, 0.7),
        inset 0 0 10px 2px rgba(255, 255, 224, 0.9)
      `,
      backdropFilter: 'blur(10px)',
      overflow: 'visible',
      transition: 'all 0.3s ease',

      '&:hover': {
        boxShadow: `
          0 0 20px 6px rgba(255, 215, 0, 1),
          inset 0 0 15px 4px rgba(255, 255, 224, 1)
        `,
        transform: 'scale(1.05)',
      },

      '&:active': {
        boxShadow: `
          0 0 30px 10px rgba(255, 215, 0, 1.2),
          inset 0 0 20px 6px rgba(255, 255, 224, 1.2)
        `,
        transform: 'scale(1.1)',
      },

      // Shimmer effect vertical (como un brillo que se mueve)
      backgroundSize: '100% 300%',
      animation: `${shimmer} 3s linear infinite`,

      // Knob circular en el centro
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 20,
        height: 20,
        borderRadius: '50%',
        background:
          'radial-gradient(circle at 30% 30%, #FFFACD, #FFD700 70%, #B8860B)',
        boxShadow: `
          0 0 10px 3px rgba(255, 215, 0, 0.9),
          inset 0 0 8px 2px #FFFACD
        `,
        transition: 'all 0.3s ease',
        zIndex: 10,
      },

      '&:hover::before': {
        boxShadow: `
          0 0 20px 6px rgba(255, 215, 0, 1.2),
          inset 0 0 12px 4px #FFFACD
        `,
        width: 24,
        height: 24,
      },

      '&:active::before': {
        boxShadow: `
          0 0 28px 10px rgba(255, 215, 0, 1.5),
          inset 0 0 16px 6px #FFFACD
        `,
        width: 28,
        height: 28,
      },

      // Partículas fugaces doradas alrededor del knob
      '&::after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: 30,
        height: 30,
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        background:
          'radial-gradient(circle, rgba(255,215,0,0.5) 15%, transparent 70%)',
        filter: 'blur(4px)',
        animation: `${pulse} 3s ease-in-out infinite`,
        zIndex: 5,
      },

      // Partículas pequeñas extra (usa elementos hijos para más detalle si quieres)
    }}
  />
);

export default SliderHandle;
