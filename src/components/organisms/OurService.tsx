// src\components\organisms\OurService.tsx
'use client';
import React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/GridLegacy'
import OurServicesSectionTitle from '../atoms/OurServicesSectionTitle';
import OurServiceCard from '../molecules/OurSeviceCard';
import { FaCut, FaGlassWhiskey, FaUserTie } from 'react-icons/fa';
import { GiRazor } from 'react-icons/gi';

const services = [
  {
    icon: <FaCut size={48} color="#FFD700" />,
    title: 'Corte Urbano',
    description: 'Diseños frescos, desvanecidos limpios y estilos modernos.',
  },
  {
    icon: <GiRazor size={48} color="#FFD700" />,
    title: 'Afeitado Clásico',
    description: 'Navaja al ras, espuma caliente y acabado perfecto.',
  },
  {
    icon: <FaGlassWhiskey size={48} color="#FFD700" />,
    title: 'Estilo + Relajación',
    description: 'Tu bebida favorita mientras te transformamos con estilo.',
  },
  {
    icon: <FaUserTie size={48} color="#FFD700" />,
    title: 'Asesoría de Imagen',
    description: 'Look completo: cabello, barba y actitud. Para romperla.',
  },
];

const OurService = () => {
  return (
    <Box
      component="section"
      sx={{
        px: { xs: 2, md: 10 },
        py: { xs: 8, md: 14 },
        backgroundColor: '#111',
        backgroundImage: 'radial-gradient(circle at top left, #222 0%, #000 100%)',
      }}
    >
      <OurServicesSectionTitle>Nuestros Servicios</OurServicesSectionTitle>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="stretch"
      >
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <OurServiceCard {...service} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurService;
