// src\components\atoms\HeroButton.tsx
// src/components/atoms/CustomButton.tsx
import { Button, ButtonProps } from '@mui/material';
import React from 'react';

const CustomButton = ({ children, ...props }: ButtonProps) => {
  return (
  <Button
      {...props}
      variant="contained"
      sx={{
        px: 4,
        py: 1.5,
        borderRadius: '999px',
        background: 'linear-gradient(45deg, #FFD700, #FF8C00)',
        color: '#000',
        fontWeight: 'bold',
        boxShadow: '0 0 15px rgba(255,215,0,0.4)',
        textTransform: 'none',
        backdropFilter: 'blur(6px)',
        transition: 'all 0.3s ease',
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
