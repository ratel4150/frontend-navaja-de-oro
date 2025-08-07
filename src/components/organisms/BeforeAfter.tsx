// src/components/organisms/BeforeAfter.tsx
'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import BeforeAfterSlider from '../molecules/BeforeAfterSlider';
import Grid from '@mui/material/GridLegacy';

const BeforeAfter: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
     background: 'linear-gradient(135deg, #111111 0%, #1A1A1A 50%, #000000 100%)',
        py: { xs: 10, md: 14 },
        px: 2,
        overflow: 'hidden',
      }}
    >
      {/* Glow effect behind title */}
      <Box
        sx={{
          position: 'absolute',
          width: 300,
          height: 300,
          borderRadius: '50%',
         background: 'radial-gradient(circle, rgba(255,215,0,0.07), transparent)',
          top: -80,
          right: -80,
          zIndex: 0,
          filter: 'blur(60px)',
        }}
      /> 

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            textAlign: 'center',
            color: '#FFD700',
            mb: 1,
            textShadow: '0 0 12px rgba(255,215,0,0.5)',
            letterSpacing: '0.05em',
          }}
        >
          Transformaciones Reales
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: '#F5F5F5',
            textAlign: 'center',
            mb: 6,
            maxWidth: 600,
            mx: 'auto',
            opacity: 0.85,
            fontStyle: 'italic',
          }}
        >
          Desliza para ver el antes y después de nuestros clientes. Crea tu cambio con estilo y precisión.
        </Typography>

        <Grid container spacing={6}>
          <Grid item xs={12}>
            <BeforeAfterSlider
              beforeSrc="/sections/beforeafter/haircut-before.png"
              afterSrc="/sections/beforeafter/haircut-after.png"
              alt="Transformación 1"
            />
          </Grid>
      {/*     <Grid item xs={12}>
            <BeforeAfterSlider
              beforeSrc="/images/haircut-before-2.jpg"
              afterSrc="/images/haircut-after-2.jpg"
              alt="Transformación 2"
            />
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
};

export default BeforeAfter;
