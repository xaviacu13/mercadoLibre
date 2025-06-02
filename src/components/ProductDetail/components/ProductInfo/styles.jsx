import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const Root = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '8250px',
  height: '100%',
  gap: '30px',
}));
export const OldPrice = styled(Typography)(() => ({
  textDecoration: 'line-through',
  color: '#888',
}));
