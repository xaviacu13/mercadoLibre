import { Typography } from '@mui/material';
import styled from '@emotion/styled';

export const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '99%',
  marginTop: '55px',
  padding: '10px 20px',
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.down('md')]: {
    marginTop: '85px',
    justifyContent: 'space-around',
  },

}));

export const BreadcrumbsText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));
