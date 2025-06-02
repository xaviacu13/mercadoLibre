import { Typography } from "@mui/material";
import { OldPrice, Root } from "./styles";

const ProductResume = ({
  title,
  seller,
  price,
  oldPrice,
  installments,
  shipping,
}) => {
  return (
    <Root>
      <div>
        <Typography variant="h2">{title}</Typography>
        <Typography variant="h3">Por: {seller}</Typography>
      </div>
      <div>
        <OldPrice variant="caption">${oldPrice}</OldPrice>
        <Typography variant="h1">${price}</Typography>
      </div>
      <div>
        <Typography variant="h5">
          Mismo precio en {installments.quantity} cuotas sin interés
        </Typography>
        <Typography variant="h3">
          {installments.quantity} cuotas de {installments.currencyFormat}
          {installments.amount}
        </Typography>
      </div>
      <div>
        {shipping.freeShipping && (
          <Typography variant="h4">Envío gratis a todo el país</Typography>
        )}
        <Typography variant="h6">Reacondicionado</Typography>
      </div>
    </Root>
  );
};

export default ProductResume;
