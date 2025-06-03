import styled from '@emotion/styled';
import palette from '../../theme/palette';

export const Root = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px',
  backgroundColor: theme.palette.background.header,
  boxShadow: 'theme.shadows[1]',
  gap: '35px',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'flex-cencter',
    justifyContent: 'center',
    gap: '0.5rem',
  },
}));


export const Logo = styled('img')({
  height: '35px',
  width: '151px',
});

export const SearchBarContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: palette.white,
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  boxShadow: theme.shadows[1],
  flex: 1,
  maxWidth: '1018px',
  width: '100%',  
  height: '35px',
  [theme.breakpoints.down('md')]: {
    width: '80%',
  },
}));  

export const Input = styled('input')(({ theme }) => ({
  display: 'flex',
  paddingRight: '8px',
  alignItems: 'flex-end',
  border: 'none',
  outline: 'none',
  flex: 1,
  fontSize: '16px',
  fontWeight: '400',
  color: theme.palette.text.secondary,
}));

export const SearchIcon = styled('img')({
  width: '20px',
  height: '20px',
  cursor: 'pointer',
});
export const Divider = styled('div')(({ theme }) => ({
  width: '2px',
  height: '80%',
  backgroundColor: theme.palette.divider,
  margin: '0 12px',
}));
