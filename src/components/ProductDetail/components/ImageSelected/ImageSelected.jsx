import React from 'react';
import Box from '@mui/material/Box';
import { Root } from './styles';

const ImageSelected = ({ src }) => {
  if (!src) return null;

  return (
    <Root>
      <img
        src={src}
        alt="Imagen seleccionada"
        style={{ maxWidth: '500', height: '100%', objectFit: 'cover' }}
      />
    </Root>
  );
};

export default ImageSelected;
