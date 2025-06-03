import { Divider, Typography } from "@mui/material";
import { Root, BreadcrumbsText } from "./styles";
import { useNavigate } from "react-router-dom";

const NavigationBar = ({ publication }) => {
  const navigate = useNavigate();

  return (
    <Root>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Typography
          variant="h6"
          color="text.link"
          sx={{ cursor: "pointer" }}
          onClick={() => navigate(-1)}
        >
          Volver al listado
        </Typography>
        <Divider orientation="vertical" flexItem />

        <BreadcrumbsText variant="h3">
          Celulares y Telefonos {">"} celulares y smartphones {">"} Apple iPhone
        </BreadcrumbsText>
      </div>
      <Typography variant="h3">
        Publicación: <strong>{publication}</strong>
      </Typography>
    </Root>
  );
};

export default NavigationBar;
