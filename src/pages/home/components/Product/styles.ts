import { IconButton } from "@/components/IconButton";
import { styled } from "@/styles";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",

  justifyContent: "flex-start",
  alignItems: "center",

  borderRadius: "6px 36px 6px 36px",
  backgroundColor: "$baseCard",

  width: "256px",
  padding: "0px 24px 20px 24px",
  boxShadow: "-2px 2px 3px rgb(0 0 0 / 10%)",

  "& > div": {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    gap: "4px",

    span: {
      textTransform: "uppercase",

      backgroundColor: "$yellowLight",
      color: "$yellowDark",

      marginTop: "12px",
      marginBottom: "16px",

      fontSize: "$sm2",
      fontWeight: "bold",

      padding: "6px 8px",

      borderRadius: "100px",
    },
  },

  h4: {
    color: "$baseSubtitle",
    marginBottom: "12px",
    fontFamily: "$header",

    lineHeight: "130%",
    fontSize: "$xl2",
    fontWeight: 700,
  },

  p: {
    color: "$baseLabel",
    fontSize: "$sm1",
    textAlign: "center",
  },

  "& > img": {
    marginTop: "-24px",
  },

  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    color: "$baseText",

    marginTop: "32px",

    width: "100%",

    "& > span": {
      fontSize: "$sm2",

      strong: {
        fontFamily: "$header",
        fontWeight: 700,
        marginLeft: "4px",
        fontSize: "$xl3",
        color: "$baseSubtitle",
      },
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
  height: "38px",

  button: {
    all: "unset",
    color: "$purple",
    fontSize: "$xl2",

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

export const CartButton = styled(IconButton, {
  backgroundColor: "$purpleDark",
  color: "$white",
});
