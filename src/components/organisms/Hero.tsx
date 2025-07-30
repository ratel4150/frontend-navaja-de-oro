// src\components\organisms\Hero.tsx
'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import { styled, useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { motion } from 'framer-motion';
import HeroText from '../molecules/HeroText';
import CustomButton from '../atoms/HeroButton';
import { useMediaQuery } from '@mui/material';
import Slider from 'react-slick';

// Videos con altura simulando orientación
const videos = [
  { src: 'herramientas.mp4', height: 220 },
  { src: 'herramientas2.mp4', height: 400 },
  { src: 'herramientas3.mp4', height: 220 },
  { src: 'herramientas4.mp4', height: 400 },
  { src: 'herramientas5.mp4', height: 220 },
  { src: 'herramientas6.mp4', height: 400 },
];

const VideoPaper = styled(Paper)(() => ({
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

const mobileSliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 7000,
  cssEase: 'ease-in-out',
  pauseOnHover: false,
};

export default function Hero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const filteredVideos = isMobile ? videos.slice(0, 3) : videos;

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100dvh',
        overflow: 'hidden',
        bgcolor: 'black',
        p: isMobile ? 0 : 2,
      }}
    >
      {/* Fondo de video: Masonry en desktop o Slider en mobile */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
        }}
      >
        {isMobile ? (
          <Slider {...mobileSliderSettings}>
            {filteredVideos.map(({ src }, i) => (
              <Box key={i} sx={{ height: '100dvh' }}>
             <video
  autoPlay
  muted
  loop
  playsInline
  preload="auto" // ✅ asegura precarga inmediata
  style={{
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'brightness(0.3)',
  }}
>
  <source src={`/sections/hero/${src}`} type="video/mp4" />
</video>

              </Box>
            ))}
          </Slider>
        ) : (
          <Masonry columns={{ xs: 1, sm: 2, md: 4 }} spacing={2}>
            {filteredVideos.map(({ src, height }, i) => (
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
                    transition: 'filter 0.3s ease',
                  }}
                >
                  <source src={`/sections/hero/${src}`} type="video/mp4" />
                </video>
              </VideoPaper>
            ))}
          </Masonry>
        )}
      </Box>

      {/* Overlay oscuro */}
{/*       <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,1))',
          zIndex: 2,
        }}
      /> */}

      {/* Contenido principal */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 3,
          minHeight: '100dvh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
          px: 2,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <HeroText />
         <Box
  mt={isMobile ? 3 : 5}
  width="100%"
  display="flex"
  justifyContent="center"
>
  <Box maxWidth={isMobile ? 280 : 400} width="100%">
    <CustomButton fullWidth>Reserva tu cita</CustomButton>
  </Box>
</Box>

        </motion.div>
      </Box>
    </Box>
  );
}
