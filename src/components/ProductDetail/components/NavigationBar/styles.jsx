import styled from '@emotion/styled';

export const Root = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '99%',
  padding: '10px 20px',
  backgroundColor: '#fff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  '@media (max-width: 600px)': {
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
  },
}));
