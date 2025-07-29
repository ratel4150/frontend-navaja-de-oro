// src\components\atoms\OurServicesSectionTitle.tsx
import { Typography } from '@mui/material'
import React from 'react'

const OurServicesSectionTitle= ({ children }: { children: React.ReactNode }) => (
  <Typography
    variant="h2"
    textAlign="center"
    fontWeight="bold"
    mb={6}
    sx={{
      color: '#FFD700',
      textShadow: `
        2px 2px 4px rgba(0, 0, 0, 0.6),
        0 0 8px rgba(255, 215, 0, 0.3),
        0 0 12px rgba(255, 215, 0, 0.2)
      `,
      letterSpacing: 2,
fontFamily: '"Palatino Linotype", "Book Antiqua", Palatino, serif',
fontStyle: 'italic',
      fontSize: { xs: '2rem', md: '3.5rem' },
      textTransform: 'uppercase',
    }}
  >
    {children}
  </Typography>

)

export default OurServicesSectionTitle