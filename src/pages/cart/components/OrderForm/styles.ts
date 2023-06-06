import { styled } from "@/styles";

export const AddressContent = styled("section", {
  display: "flex",
  flexDirection: "column",

  header: {
    display: "flex",
    gap: "0.5rem",
    width: "100%",
    marginBottom: "2rem",

    svg: {
      fontSize: "$xl3",
      color: "$yellowDark",
      marginTop: "2px",
    },

    div: {
      color: "$baseSubtitle",
      fontSize: "$sm1",

      h4: {
        fontSize: "$md",
        fontWeight: "normal",
      },
    },
  },

  "& > section": {
    display: "flex",
    flexDirection: "column",

    width: "100%",

    gap: "1rem",

    "& > div": {
      display: "flex",
      alignContent: "center",
      justifyContent: "space-between",
      gap: "1rem",

      width: "100%",

      "& > label": {
        display: "flex",
        flexDirection: "column",

        width: "100%",

        "&.form-sm": {
          width: "200px",
        },

        "&.form-xm": {
          width: "60px",
        },

        input: {
          all: "unset",
          backgroundColor: "$baseInput",
          border: "1px solid $baseButton",
          color: "$baseText",
          borderRadius: "6px",
          padding: "12px",

          "&::placeholder": {
            color: "$baseLabel",
          },
        },
      },
    },
  },
});

export const FormError = styled("p", {
  marginLeft: "0.125rem",
  marginTop: "0.125rem",

  color: "#f75a68",
  fontSize: "$sm2",
});
