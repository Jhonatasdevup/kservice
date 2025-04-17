// components/WhatsAppButton.tsx

'use client';
import React from 'react';
import { Fab, useTheme, useMediaQuery } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppButton = () => {
  const phoneNumber = '5511918725136'; // Troque pelo seu número com DDD
  const message = 'Olá! Gostaria de mais informações.';
  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
      <Fab
        color="success"
        aria-label="whatsapp"
        sx={{
          position: 'fixed',
          bottom: isMobile ? 16 : 24,
          right: isMobile ? 16 : 24,
          zIndex: 9999,
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
        }}
      >
        <WhatsAppIcon />
      </Fab>
    </a>
  );
};

export default WhatsAppButton;
