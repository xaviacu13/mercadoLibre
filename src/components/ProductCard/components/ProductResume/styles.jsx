import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '10px',
  width: '1000px',

  [theme.breakpoints.down('lg')]: {
    maxWidth: '100%',
    width: '100%',
    padding: '10px',
  },
}));

export const OldPrice = styled(Typography)(() => ({
  textDecoration: 'line-through',
  color: '#888',
}));