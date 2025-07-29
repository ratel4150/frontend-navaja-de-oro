// src\components\atoms\FancyGoldButton.tsx
// src/components/atoms/FancyGoldButton.tsx
import { Button, ButtonProps } from '@mui/material';

const FancyGoldButton = (props: ButtonProps) => (
  <Button
    variant="outlined"
    {...props}
    sx={{
      px: 3,
      py: 1,
      fontSize: '0.9rem',
      fontWeight: 500,
      letterSpacing: 1,
      textTransform: 'uppercase',
      border: '1px solid',
      borderColor: '#FFD700',
      color: '#FFD700',
      fontFamily: `'Cormorant Garamond', serif`,
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      backgroundColor: 'transparent',
      ...props.sx,

      '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '-100%',
        height: '100%',
        width: '100%',
        background:
          'linear-gradient(120deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.1) 100%)',
        transform: 'skewX(-20deg)',
        transition: 'left 0.6s ease-in-out',
        zIndex: 1,
      },

      '&:hover': {
        backgroundColor: 'transparent',
        color: '#000',
        borderColor: '#FFD700',
        boxShadow: '0 0 12px rgba(255, 215, 0, 0.3)',
        background: '#FFD700',
        '&:before': {
          left: '100%',
        },
      },

      '& span': {
        position: 'relative',
        zIndex: 2,
      },
    }}
  >
    <span>{props.children}</span>
  </Button>
);

export default FancyGoldButton;
