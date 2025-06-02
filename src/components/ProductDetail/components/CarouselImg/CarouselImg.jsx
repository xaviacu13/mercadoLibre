import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

const CarouselImg = ({ images = [], onSelect }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  if (!Array.isArray(images) || images.length === 0) return null;

  const handleSelect = (index) => {
    setSelectedIndex(index);
    if (onSelect) {
      onSelect(images[index], index);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        overflowY: 'auto',
        maxHeight: '400px',
        padding: '8px',
        '&::-webkit-scrollbar': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#ccc',
          borderRadius: '3px',
        },
      }}
    >
      {images.map((src, index) => (
        <Card
          key={index}
          onClick={() => handleSelect(index)}
          sx={{
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            borderRadius: '4px',
            cursor: 'pointer',
            border: selectedIndex === index ? '2px solid #007337' : '1px solid #ccc',
            transition: 'border 0.3s ease',
          }}
        >
          <img
            src={src.src}
            alt={`Imagen ${index + 1}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            loading="lazy"
          />
        </Card>
      ))}
    </Box>
  );
};

export default CarouselImg;
