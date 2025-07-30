// src\components\molecules\HeroText.tsx
import { Typography, Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';

const HeroText = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        mb: 4,
        px: { xs: 2, md: 0 },
        gap: 2,
      }}
    >
      {/* Imagen arriba en mobile, flotante en desktop */}
      <Box
        component="img"
        src="/sections/hero/navaja_de_oro.png"
        alt="Navaja de Oro"
        sx={{
          width: { xs: '280px', md: '320px' },
          mb: { xs: 2, md: 0 },
          position: isMobile ? 'absolute' : 'absolute',
          top: isMobile ? '-150%' : '50%',
          left: isMobile ? 'auto' : '100%',
          transform: isMobile ? 'none' : 'translate(-50%, -50%)',
          zIndex: 2,
          pointerEvents: 'none',
          userSelect: 'none',
          opacity: 0.9,
          filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.7))',
        }}
      />

      {/* Texto principal */}
      <Box
        sx={{
          zIndex: 1,
          maxWidth: { xs: '100%', md: '600px' },
          color: '#fff',
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontWeight: '900',
            fontSize: { xs: '2.5rem', md: '5rem' },
            textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
            lineHeight: 1.1,
            fontStyle: 'italic',
          }}
        >
          Bienvenido a <br /> Navaja de Oro
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: '#FFD700',
            fontWeight: 400,
            textShadow: `
              0 0 5px rgba(255, 215, 0, 0.7),
              0 0 10px rgba(255, 215, 0, 0.6),
              0 0 20px rgba(255, 215, 0, 0.5),
              1px 1px 2px rgba(0, 0, 0, 0.8)
            `,
            mt: 2,
            fontStyle: 'italic',
            fontFamily: "'Dancing Script', cursive",
            letterSpacing: '0.05em',
            lineHeight: 1.4,
            userSelect: 'none',
            transition: 'all 0.3s ease',
            '&:hover': {
              color: '#fff',
              textShadow: `
                0 0 10px #FFD700,
                0 0 20px #FFD700,
                0 0 30px #FFD700,
                0 0 40px #FFEC6D
              `,
              cursor: 'default',
              transform: 'scale(1.05) rotate(-1deg)',
            },
          }}
        >
          Donde el estilo es tradición
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroText;
