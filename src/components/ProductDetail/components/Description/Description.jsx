import { Typography } from "@mui/material";
import { Root, Title, DividerLine } from "./styles";

const Description = ({ description }) => {
  if (!description) {
    return null;
  }
  return (
    <Root>
      <Title>
        <Typography variant="h1" sx={{ marginRight: 2 }}>
          Descripción
        </Typography>
        <DividerLine />
      </Title>

      <Typography variant="body2">{description}</Typography>
    </Root>
  );
};

export default Description;
