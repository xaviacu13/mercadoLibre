import styled from '@emotion/styled';

export const Root = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '250px',
  backgroundColor: '#f0f0f0',
  borderRadius: '8px',
}));
export const Img = styled('img')(() => ({
  padding: '10px',
  width: '90%',
  objectFit: 'cover',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  '&:active': {
    transform: 'scale(1)',
  },
}));