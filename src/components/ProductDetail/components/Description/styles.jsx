import { Divider } from "@mui/material";
import styled from '@emotion/styled';

export const Root = styled('div')(({ theme }  ) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  gap: '15px',
  padding: '10px',
  [theme.breakpoints.down('md')]: {
    padding: '20px',
    gap: '12px',
  },
}));
export const DescriptionText = styled('p')(({ theme }) => ({
  fontSize: '16px',
  color: theme.palette.text.primary,
  lineHeight: '1.5',
  textAlign: 'justify',
  margin: '0',
  padding: '0 10px',

  '@media (max-width: 600px)': {
    fontSize: '14px',
    padding: '0 5px',
  },
}));
export const Title = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
}));
export const DividerLine = styled(Divider)(() => ({
  flexGrow: 1,
  alignSelf: 'center',
  borderColor: '#000',
  borderBottomWidth: '1.5px',
}));
