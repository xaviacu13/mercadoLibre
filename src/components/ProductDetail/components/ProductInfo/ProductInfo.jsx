import { Typography } from '@mui/material';
import { OldPrice, Root } from './styles'; 

const ProductInfo = () => {
  
  return (
    <Root>
      <Typography variant='h2'>Xiaomi Redmi Note 10 (64 Gb) - Gris</Typography>
      <Typography variant='h3'>Por: MLA-XIAOMI</Typography>
      <OldPrice variant='caption'>$119999</OldPrice>
      <Typography variant='h1'>$89999</Typography>
      <Typography variant='h5'>Mismo precio en 6 cuotas</Typography>
      <Typography variant='h4'>Envios gratis</Typography>
      <Typography variant='p'>Color: <strong>Blanco estela</strong> </Typography>
    </Root>
  );
};

export default ProductInfo;
