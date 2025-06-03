import { Divider } from '@mui/material';
import styled from '@emotion/styled';

export const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1250px',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '8px',
  padding: '10px',
  boxShadow: theme.shadows[2],
}));

export const ImgContainer = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '10px',
  gap: '28px',
  '@media (max-width: 900px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
  '@media (max-width: 600px)': {
    gap: '10px',
  },

}));

export const DesContainer = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  '@media (max-width: 900px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
  '@media (max-width: 600px)': {
    gap: '10px',
  },

}));

export const DividerLine = styled(Divider)(({ theme }) => ({
  width: '95%',
  borderBottomWidth: '1.5px',
  borderColor: theme.palette.divider,
}));
