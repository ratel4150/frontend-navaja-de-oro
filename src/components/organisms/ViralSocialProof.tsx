// src/components/organisms/ViralSocialProof.tsx
'use client';

import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import SocialVideoCard from '../molecules/SocialVideoCard';

const videos = [
  {
    platform: 'tiktok',
    username: 'toys_barber_oficial',
    embedHtml: `
      <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@toys_barber_oficial/video/7379764239373733125" data-video-id="7379764239373733125" style="max-width: 605px;min-width: 325px;">
        <section></section>
      </blockquote>
    `,
    scriptSrc: 'https://www.tiktok.com/embed.js',
  },
  {
    platform: 'tiktok',
    username: 'toys_barber_oficial',
    embedHtml: `
      <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@toys_barber_oficial/video/7379764239373733125" data-video-id="7379764239373733125" style="max-width: 605px;min-width: 325px;">
        <section></section>
      </blockquote>
    `,
    scriptSrc: 'https://www.tiktok.com/embed.js',
  },
  {
    platform: 'tiktok',
    username: 'toys_barber_oficial',
    embedHtml: `
      <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@toys_barber_oficial/video/7379764239373733125" data-video-id="7379764239373733125" style="max-width: 605px;min-width: 325px;">
        <section></section>
      </blockquote>
    `,
    scriptSrc: 'https://www.tiktok.com/embed.js',
  },
];

const ViralSocialProof = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        py: isMobile ? 5 : 8,
        px: { xs: 2, sm: 4, md: 6 },
        textAlign: 'center',
        backgroundColor: '#111',
        backgroundImage: 'radial-gradient(circle at top left, #222 0%, #000 100%)',
      }}
    >
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
        Lo Que Opinan En Redes
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' }, // ← aquí está el cambio
          overflowX: { xs: 'visible', sm: 'auto' },
          gap: 3,
          py: 2,
          scrollSnapType: { xs: 'none', sm: 'x mandatory' },
          '&::-webkit-scrollbar': {
            display: { xs: 'none', sm: 'none' },
          },
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {videos.map((video, idx) => (
          <Box
            key={idx}
            sx={{
              flex: '0 0 auto',
              scrollSnapAlign: 'center',
              width: { xs: '100%', sm: 320, md: 360 },
              mx: 'auto',
            }}
          >
            <SocialVideoCard
              embedHtml={video.embedHtml}
              scriptSrc={video.scriptSrc}
              platform={video.platform}
              username={video.username}
              delay={idx * 1000}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ViralSocialProof;
