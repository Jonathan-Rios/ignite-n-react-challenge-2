import { styled } from "@/styles";
import { IconButton } from "../IconButton";

export const Container = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  height: "104px",
  width: "100%",

  "& > div": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    gap: "12px",
  },
});

export const LogoButton = styled("button", {
  all: "unset",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.1s",

  "&:hover": {
    borderBottom: "3px solid $purple",
    paddingBottom: "0.5rem",
  },
});

export const LocalButton = styled("button", {
  all: "unset",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  gap: "4px",

  backgroundColor: "$purpleLight",
  borderRadius: "6px",

  color: "$purpleDark",

  height: "38px",

  padding: "0 0.5rem",
  transition: "filter 0.2s",
});

export const CartButton = styled(IconButton, {
  backgroundColor: "$yellowLight",
  color: "$yellowDark",
  position: "relative",

  span: {
    position: "absolute",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    top: "-8px",
    right: "-8px",
    backgroundColor: "$yellowDark",
    height: "20px",
    width: "20px",

    borderRadius: "50%",

    fontSize: "$sm2",
    fontWeight: "bold",
    color: "$white",
  },
});
