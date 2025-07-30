// src/components/atoms/HeroButton.tsx
'use client';
import { Button, ButtonProps, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';

const CustomButton = ({ children, ...props }: ButtonProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Button
      {...props}
      variant="contained"
      sx={{
        px: isMobile ? 3 : 4,
        py: isMobile ? 1.2 : 1.5,
        fontSize: isMobile ? '0.875rem' : '1rem',
        borderRadius: '999px',
        background: 'linear-gradient(45deg, #FFD700, #FF8C00)',
        color: '#000',
        fontWeight: 'bold',
        boxShadow: '0 0 15px rgba(255,215,0,0.4)',
        textTransform: 'none',
        backdropFilter: 'blur(6px)',
        transition: 'all 0.3s ease',
        minWidth: isMobile ? '200px' : '240px',
        '&:hover': {
          transform: 'scale(1.05)',
          background: 'linear-gradient(45deg, #FF8C00, #FFD700)',
        },
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
