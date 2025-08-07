// src/components/molecules/BeforeAfterSlider.tsx
'use client';

import React, { useRef, useState } from 'react';
import { Box } from '@mui/material';
import BeforeImage from '../atoms/BeforeImage';
import AfterImage from '../atoms/AfterImage';
import SliderHandle from '../atoms/SliderHandle';

interface Props {
  beforeSrc: string;
  afterSrc: string;
  alt?: string;
}

const BeforeAfterSlider: React.FC<Props> = ({ beforeSrc, afterSrc, alt }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const bounds = containerRef.current.getBoundingClientRect();
    const relativeX = clientX - bounds.left;
    const percentage = (relativeX / bounds.width) * 100;
    setPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
   <Box
  ref={containerRef}
  onMouseMove={(e) => handleMove(e.clientX)}
  onTouchMove={(e) => handleMove(e.touches[0].clientX)}
  sx={{
    position: 'relative',
    width: '100%',
    height: { xs: 320, md: 450 },
    borderRadius: 3,
    overflow: 'hidden',
    cursor: 'ew-resize',
    transition: 'all 0.3s ease-in-out',
    // Sombra suave grisácea elegante
    boxShadow: '0 0 24px rgba(180, 180, 180, 0.15)',
    // Borde dorado muy tenue y transparente
    border: '2px solid rgba(255, 215, 0, 0.12)',
  }}
>
      <BeforeImage src={beforeSrc} alt={alt} />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: `${position}%`,
          overflow: 'hidden',
          transition: 'width 0.1s ease-out',
        }}
      >
        <AfterImage src={afterSrc} alt={alt} />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: `${position}%`,
          transform: 'translateX(-50%)',
          height: '100%',
          zIndex: 2,
          transition: 'left 0.1s ease-out',
        }}
      >
        <SliderHandle />
      </Box>
    </Box>
  );
};

export default BeforeAfterSlider;
