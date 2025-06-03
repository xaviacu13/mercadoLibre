import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { ProductDetail as ProdDetail } from "../../components";
import { Root } from "./styles";

const ProductDetail = () => {
  const query = new URLSearchParams(useLocation().search);
  const searchTerm = query.get("query");

  return (
    <Root>
      <ProdDetail id={searchTerm} />
    </Root>
  );
};

export default ProductDetail;
