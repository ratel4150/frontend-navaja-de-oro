'use client';

import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    tiktok?: {
      widgets?: {
        load?: () => void;
      };
    };
  }
}

interface SocialVideoEmbedProps {
  embedHtml: string;
  scriptSrc: string;
}

const SocialVideoEmbed: React.FC<SocialVideoEmbedProps> = ({ embedHtml, scriptSrc }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Detach after first load
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const isScriptLoaded = !!document.querySelector(`script[src="${scriptSrc}"]`);

    if (!isScriptLoaded) {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Reinicializa TikTok embed si ya existe el script
      if (window.tiktok?.widgets?.load) {
        window.tiktok.widgets.load();
      }
    }
  }, [isVisible, scriptSrc]);

  return (
    <div
      ref={containerRef}
      className="video-embed"
      dangerouslySetInnerHTML={{ __html: isVisible ? embedHtml : '' }}
    />
  );
};

export default SocialVideoEmbed;
