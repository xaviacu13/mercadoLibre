import { Divider } from "@mui/material";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const Root = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  gap: "20px",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    padding: "10px",
    width: "90%",
    height: "280px",
    gap: "10px",
  },
}));

export const OldPrice = styled(Typography)(() => ({
  textDecoration: "line-through",
  color: "#888",
}));

export const DividerLine = styled(Divider)(() => ({
  flexGrow: 1,
  height: "1.5px",
  backgroundColor: "#000",
  border: "none",
}));

export const Title = styled("div")(() => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
}));
