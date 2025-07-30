// src\components\organisms\BestSellingProducts.tsx
'use client'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import ProductCard from '../molecules/ProductCard';

import Slider from 'react-slick';
import { css, Global } from '@emotion/react';

const products = [
  {
    name: 'Reuzel Pomada de Fibra – Fijación Natural Vegana',
    description:
      'Cera concentrada de 113g con fórmula orgánica para hombres. Volumen, definición, fácil de aplicar y retirar. Fragancia original.',
    rating: '⭐ 4.6/5 (4,390 calificaciones)',
    image: '/sections/products/Reuzel Pomada.jpg',
    price: '$399 MXN ',
    pricePerGram: '$3.52 / gramo',
    brand: 'REUZEL',
    monthlySales: '+100 comprados este mes',
  },
  {
    name: 'Suavecito Pomada Firme Hold – Fijación Extra Fuerte',
    description:
      'Pomada clásica de 113g con hold firme y acabado brillante. Ideal para peinados clásicos como el slick back o side part. Fácil de aplicar y lavar. Fragancia masculina intensa.',
    rating: '⭐ 4.7/5 (5,200+ calificaciones)',
    image: '/sections/products/Pomade Suavezito.jpg',
    price: '$299 MXN',
    pricePerGram: '$2.65 / gramo',
    brand: 'SUAVECITO',
    monthlySales: '+500 comprados este mes',
  },
  {
    name: 'American Crew Pomada de Fibra – Acabado Mate y Fijación Media',
    description:
      'Pomada ligera de 85g con acabado mate y fijación flexible. Ideal para looks naturales, texturizados o despeinados. Sin brillo, no grasa y fácil de lavar. Fragancia fresca y discreta.',
    rating: '⭐ 4.5/5 (3,800+ calificaciones)',
    image: '/sections/products/American Crew Pomada.jpg',
    price: '$349 MXN',
    pricePerGram: '$4.11 / gramo',
    brand: 'AMERICAN CREW',
    monthlySales: '+300 comprados este mes',
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1200,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 800,
      settings: { slidesToShow: 1 },
       arrows: false, // 👈 elimina las flechas en móviles
    },
  ],
};

const BestSellingProducts = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        py: isMobile ? 5 : 8,
        px: { xs: 1, sm: 2, md: 4 },
        textAlign: 'center',
        backgroundColor: '#111',
        backgroundImage: 'radial-gradient(circle at top left, #222 0%, #000 100%)',
      }}
    >
      {/* 🎨 Estilos globales para los dots */}
  <Global
  styles={css`
    .slick-dots li button:before {
      color: #fff !important;
      opacity: 0.4;
      font-size: 10px;
    }
    .slick-dots li.slick-active button:before {
      color: #FFD700 !important;
      opacity: 1;
    }

    /* 🔒 Ocultar flechas forzadamente en mobile */
    @media (max-width: 800px) {
      .slick-prev,
      .slick-next {
        display: none !important;
      }
    }
  `}
/>

      <Typography
        variant={isMobile ? 'h5' : 'h4'}
        sx={{
          fontWeight: 'bold',
          mb: isMobile ? 3 : 4,
          color: '#FFD700',
          letterSpacing: 1.5,
          textTransform: 'uppercase',
          textShadow: `1px 1px 3px rgba(0, 0, 0, 0.6), 0 0 6px rgba(255, 215, 0, 0.4)`,
          fontFamily: "'Cormorant Garamond', serif",
        }}
      >
        Los Favoritos de Nuestros Clientes
      </Typography>

      <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
        <Slider {...sliderSettings}>
          {products.map((prod, idx) => (
            <Box key={idx} px={isMobile ? 1 : 2} sx={{ height: '100%' }}>
              <ProductCard {...prod} />
            </Box>
          ))}
        </Slider>
      </Box>

      {/* <Box mt={isMobile ? 4 : 6}>
        <FancyGoldButton fullWidth={isMobile}>Comprar en tienda</FancyGoldButton>
      </Box> */}
    </Box>
  );
};

export default BestSellingProducts;