import { Typography } from '@mui/material';
import { Root, Img } from './styles';

const ProductImage = ({img}) => {

  return (
    <Root>
      <Img src={img} alt='Imagen del producto' />
    </Root>
  );
};

export default ProductImage;