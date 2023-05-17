import { styled } from "@/styles";

export const RoundedCard = styled("div", {
  display: "flex",
  flexDirection: "column",

  width: "448px",

  "& > h3": {
    fontFamily: "$header",
    color: "$baseSubtitle",

    marginBottom: "1.25rem",
  },

  "& > section": {
    display: "flex",
    flexDirection: "column",

    justifyContent: "flex-start",
    alignItems: "center",

    borderRadius: "6px",

    backgroundColor: "$baseCard",

    padding: "32px",
  },

  hr: {
    width: "100%",
    backgroundColor: "$baseButton",
    border: "none",
    height: "1px",
    margin: "1.5rem 0",
  },

  footer: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    gap: "0.75rem",

    div: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      fontSize: "$md",
      color: "$baseText",

      strong: {
        fontSize: "$xl1",
        color: "$baseSubtitle",
      },
    },

    button: {
      all: "unset",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      marginTop: "1rem",

      backgroundColor: "$yellow",

      width: "100%",
      height: "48px",

      borderRadius: "6px",

      color: "$white",
      fontSize: "$xl1",
      fontWeight: "bold",

      transition: "filter 0.2s",
      cursor: "pointer",
      "&:hover": {
        filter: "brightness(0.8)",
      },
    },
  },
});
