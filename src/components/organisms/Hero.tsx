// src\components\organisms\Hero.tsx
'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { motion } from 'framer-motion';
import HeroText from '../molecules/HeroText';
import CustomButton from '../atoms/HeroButton';

// Videos con altura simulando orientación
const videos = [
  { src: 'herramientas.mp4', height: 220 },
  { src: 'herramientas2.mp4', height: 400 },
  { src: 'herramientas3.mp4', height: 220 },
  { src: 'herramientas4.mp4', height: 400 },
  { src: 'herramientas5.mp4', height: 220 },
  { src: 'herramientas6.mp4', height: 400 },
];

const VideoPaper = styled(Paper)(({ theme }) => ({
  borderRadius: 8,
  overflow: 'hidden',
  boxShadow: '0 0 15px rgba(0,0,0,0.7)',
  border: '1px solid rgba(255,255,255,0.1)',
  backgroundColor: 'transparent',
  '&:hover': {
    filter: 'brightness(1.1)',
    transform: 'scale(1.05)',
    transition: 'all 0.3s ease',
    borderColor: '#00f260',
    boxShadow: '0 0 40px #00f260',
  },
}));

export default function Hero() {
  return (
    <Box sx={{ position: 'relative', height: '100vh', overflow: 'hidden', bgcolor: 'black', p: 2 }}>
      {/* Masonry con videos */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
        }}
      >
        <Masonry columns={{ xs: 1, sm: 2, md: 4 }} spacing={2}>
          {videos.map(({ src, height }, i) => (
            <VideoPaper key={i} sx={{ height }}>
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.4)',
                  borderRadius: 8,
                  transition: 'filter 0.3s ease',
                }}
              >
                <source src={`/sections/hero/${src}`} type="video/mp4" />
              </video>
            </VideoPaper>
          ))}
        </Masonry>
      </Box>

      {/* Overlay oscuro con gradiente */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
      /*     background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.9))', */
          zIndex: 2,
        }}
      />

      {/* Contenido principal */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 3,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
          px: 3,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <HeroText />
          <CustomButton>Reserva tu cita</CustomButton>
        </motion.div>
      </Box>
    </Box>
  );
}
