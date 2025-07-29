// src\components\molecules\OurSeviceCard.tsx
import { Box, Typography, Paper, Button, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { FC } from 'react';
import { BsCheck2Circle } from 'react-icons/bs';
import FancyGoldButton from '../atoms/FancyGoldButton';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  subtitle?: string;
  features?: string[];
}

const OurServiceCard: FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  subtitle = 'Incluye bebida',
  features = ['Estilista experto', 'Duración 45 min', 'Toalla caliente'],
}) => (
  <Paper
    elevation={8}
    sx={{
      p: 4,
      borderRadius: 5,
      background: 'linear-gradient(135deg, rgba(20,20,20,0.85), rgba(10,10,10,0.85))',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      color: '#fff',
      boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
      transition: 'transform 0.4s ease, box-shadow 0.4s ease',
      animation: 'fadeInCard 1s ease forwards',
      '&:hover': {
        transform: 'translateY(-6px) scale(1.02)',
        boxShadow: '0 0 35px rgba(255, 215, 0, 0.4)',
      },
      '@keyframes fadeInCard': {
        '0%': { opacity: 0, transform: 'translateY(20px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
    }}
  >
    <Box mb={2} display="flex" justifyContent="center" alignItems="center">
      <Box
        sx={{
          transition: 'transform 0.3s',
          '&:hover': {
            transform: 'scale(1.1) rotate(-3deg)',
          },
        }}
      >
        {icon}
      </Box>
    </Box>

    <Typography
      variant="h5"
      textAlign="center"
      fontWeight="bold"
      mb={0.5}
      sx={{
        color: '#FFD700',
        textShadow: '1px 1px 6px rgba(255,215,0,0.5)',
        letterSpacing: 1,
      }}
    >
      {title}
    </Typography>

    <Typography
      variant="subtitle2"
      textAlign="center"
      mb={2}
      sx={{ color: '#ffbf00', fontStyle: 'italic', opacity: 0.8 }}
    >
      {subtitle}
    </Typography>

    <Divider
      sx={{
        my: 2,
        background: 'linear-gradient(to right, transparent, #FFD700, transparent)',
        height: '2px',
        borderRadius: 2,
      }}
    />

    <Typography variant="body2" textAlign="center" color="gray" mb={2}>
      {description}
    </Typography>

    <List dense>
      {features.map((feature, idx) => (
        <ListItem key={idx} sx={{ px: 0 }}>
          <ListItemIcon sx={{ minWidth: '30px', color: '#FFD700' }}>
            <BsCheck2Circle />
          </ListItemIcon>
          <ListItemText
            primary={feature}
            primaryTypographyProps={{ fontSize: '0.85rem', color: '#ddd' }}
          />
        </ListItem>
      ))}
    </List>

 <Box textAlign="center" mt={3}>
  <FancyGoldButton>Ver más</FancyGoldButton>

</Box>

  </Paper>
);

export default OurServiceCard;
