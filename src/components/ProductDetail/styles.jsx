import styled from '@emotion/styled';

export const Root = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1250px',
  height: '100%',
  gap: '20px',
  backgroundColor: '#f0f0f0',
  borderRadius: '8px',
  overflow: 'hidden',
  position: 'relative',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  
  '&:hover': {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },

  '@media (max-width: 900px)': {
    alignItems: 'center',
    padding: '12px',
    gap: '12px',
  },

  '@media (max-width: 600px)': {
    padding: '8px',
  },
}));
