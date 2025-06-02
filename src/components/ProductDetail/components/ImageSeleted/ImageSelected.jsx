import React from 'react';
import Box from '@mui/material/Box';

const ImageSelected = ({ src }) => {
  if (!src) return null;

  return (
    <Box
      sx={{
        width: 500,
        height: 420,
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
        border: '1px solid #ddd',
      }}
    >
      <img
        src={src}
        alt="Imagen seleccionada"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </Box>
  );
};

export default ImageSelected;
