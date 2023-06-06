import { styled } from "@/styles";

export const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",

  width: "100%",

  "& > div": {
    display: "flex",
    flexDirection: "column",

    alignContent: "center",
    justifyContent: "center",
    gap: "8px",

    h4: {
      color: "$baseSubtitle",
      fontWeight: "normal",
    },

    "& > div": {
      display: "flex",
      gap: "4px",
      alignContent: "center",
      justifyContent: "center",
    },
  },

  "& > span": {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    gap: "4px",

    marginLeft: "auto",
    marginBottom: "auto",

    fontSize: "$sm2",

    "& > strong": {
      color: "$baseText",
      fontSize: "$md",
    },
  },
});

export const QuantityControl = styled("div", {
  backgroundColor: "$baseButton",
  color: "$baseTitle",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  padding: "4px 8px",

  borderRadius: "6px",

  width: "72px",

  button: {
    all: "unset",
    color: "$purple",
    fontSize: "$xl2",
    fontFamily: "$header",

    cursor: "pointer",
    "&:hover": {
      color: "$purpleDark",
    },

    "&:disabled": {
      color: "$baseLabel",
      cursor: "not-allowed",
    },
  },
});

export const RemoveButton = styled("button", {
  variants: {
    active: {
      true: {
        border: "2px solid $purple",
      },
    },
  },

  all: "unset",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  cursor: "pointer",
  gap: "4px",

  backgroundColor: "$baseButton",
  borderRadius: "6px",

  color: "$baseText",

  padding: "0.5rem 0.5rem",
  transition: "filter 0.2s",

  svg: {
    fontSize: "$xl1",
    color: "$purple",
  },

  "&:hover": {
    filter: "brightness(0.9)",
  },
});
