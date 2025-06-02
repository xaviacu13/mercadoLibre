import { Typography } from "@mui/material";
import { Root } from "./styles";
import { useNavigate } from "react-router-dom";

const NavigationBar = ({ publication }) => {
  const navigate = useNavigate();

  return (
    <Root>
      <div style={{ display: "flex", gap: "10px" }}>
        <Typography
          variant="h6"
          color="text.link"
          sx={{ cursor: "pointer" }}
          onClick={() => navigate(-1)}
        >
          Volver al listado
        </Typography>

        <Typography variant="h4">Detalle del producto</Typography>
      </div>
      <Typography variant="h5">
        Publicación: <strong>{publication}</strong>
      </Typography>
    </Root>
  );
};

export default NavigationBar;
