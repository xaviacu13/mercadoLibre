import { ImageContent, ProductResume } from "./components";
import { Root } from "./styles";
import { Link } from "react-router-dom";

const ProductCard = ({
  id,
  title,
  img,
  price,
  oldPrice,
  seller,
  installments,
  shipping,
}) => {
  return (
    <Link to={`/detail?query=${id}`} style={{ textDecoration: 'none' }}>
      <Root>
        <ImageContent img={img} />
        <ProductResume
          id={id}
          title={title}
          seller={seller}
          price={price}
          oldPrice={oldPrice}
          installments={installments}
          shipping={shipping}
        />
      </Root>
    </Link>
  );
};

export default ProductCard;
