import { Typography } from '@mui/material';
import { OldPrice, Root, DividerLine , Title } from './styles'; 

const ProductInfo = () => {
  
  return (
    <Root>
      <Title>
       <Typography variant="h3" sx={{ marginRight: 2 }}>
          Nuevo +100 vendidos
        </Typography>
        <DividerLine />
      </Title>
      <Typography variant='h2'>Xiaomi Redmi Note 10 (64 Gb) - Gris</Typography>
      <Typography variant='h3'>Por: MLA-XIAOMI</Typography>
      <OldPrice variant='caption'>$119999</OldPrice>
      <Typography variant='h1'>$89999</Typography>
      <Typography variant='h5'>Mismo precio en 6 cuotas</Typography>
      <Typography variant='h4'>Envios gratis</Typography>
      <Typography variant='h6'>Color: <strong>Blanco estela</strong> </Typography>
    </Root>
  );
};

export default ProductInfo;
