// src/components/molecules/SocialVideoCard.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Skeleton } from '@mui/material';

interface Props {
  embedHtml: string;
  scriptSrc: string;
  platform: string;
  username: string;
  delay: number;
}

const SocialVideoCard: React.FC<Props> = ({ embedHtml, scriptSrc, platform, username, delay }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (ref.current && !loaded) {
        ref.current.innerHTML = embedHtml;

        const script = document.createElement('script');
        script.src = scriptSrc;
        script.async = true;
        script.onload = () => setLoaded(true);
        script.onerror = () => {
          console.error(`Error loading embed for ${platform}`);
          setLoaded(true);
        };
        document.body.appendChild(script);

        return () => {
          document.body.removeChild(script);
        };
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [embedHtml, scriptSrc, loaded, delay, platform]);

  return (
    <Box
      sx={{
        backgroundColor: '#1a1a1a',
        borderRadius: 2,
        boxShadow: '0 0 12px rgba(255, 215, 0, 0.1)',
        overflow: 'hidden',
        position: 'relative',
        minHeight: 480,
        p: 1,
        width: '100%',
        maxWidth: 360,
        mx: 'auto',
      }}
    >
      {!loaded && (
        <Skeleton
          variant="rectangular"
          animation="wave"
          width="100%"
          height={480}
          sx={{ borderRadius: 2, bgcolor: '#333' }}
        />
      )}

      <Box
        ref={ref}
        sx={{
          visibility: loaded ? 'visible' : 'hidden',
        }}
      />

      <Typography
        variant="caption"
        sx={{
          mt: 1,
          display: 'block',
          color: '#FFD700', // Oro neón
          textAlign: 'center',
          fontSize: 12,
          letterSpacing: 1,
        }}
      >
        @{username}
      </Typography>
    </Box>
  );
};

export default SocialVideoCard;
