import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const Root = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '10px',
  width: '800px',
}));

export const OldPrice = styled(Typography)(() => ({
  textDecoration: 'line-through',
  color: '#888',
}));