import styled from "@emotion/styled";

export const Root = styled("div")(({ theme }) => ({
  width: 500,
  height: 420,
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
