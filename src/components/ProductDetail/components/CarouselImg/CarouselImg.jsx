import React, { useState } from 'react';
import { Container, ImageCard } from './styles';

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
    <Container>
      {images.map((src, index) => (
        <ImageCard
          key={index}
          onClick={() => handleSelect(index)}
          selected={selectedIndex === index}
        >
          <img
            src={src.src}
            alt={`Imagen ${index + 1}`}
            style={{ height: '100%', objectFit: 'cover' }}
          />
        </ImageCard>
      ))}
    </Container>
  );
};

export default CarouselImg;
