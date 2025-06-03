import styled from '@emotion/styled';

export const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '250px',
  backgroundColor: theme.palette.background.paper,
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