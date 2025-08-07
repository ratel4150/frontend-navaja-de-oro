// src\components\templates\LandingTemplate.tsx
'use client';
import React from 'react';
import { Box } from '@mui/material';

import Hero from '../organisms/Hero';
import OurService from '../organisms/OurService';
import BestSellingProducts from '../organisms/BestSellingProducts';
import ViralSocialProof from '../organisms/ViralSocialProof';

function LandingTemplate() {
  


  return (
    <Box
      sx={{
        bgcolor: '#000000ff', // fondo oscuro base
        color: '#F5F5F5',    // texto claro
        minHeight: '100vh',
        overflow:"hidden"
      
      }}
    >
   
        <Hero />
        <OurService />
        <BestSellingProducts />
        <ViralSocialProof/>
  
    </Box>
  );
}

export default LandingTemplate;
