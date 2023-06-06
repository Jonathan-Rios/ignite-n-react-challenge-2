import { styled } from "@/styles";

export const PayMethodContent = styled("section", {
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
      color: "$baseText",
      fontSize: "$sm1",

      h4: {
        color: "$baseSubtitle",
        fontSize: "$md",
        fontWeight: "normal",
      },
    },
  },

  section: {
    display: "flex",
    width: "100%",

    alignContent: "center",
    gap: "1rem",
  },
});

export const PayMethodButton = styled("button", {
  variants: {
    active: {
      true: {
        border: "2px solid $purple",
      },
    },
  },

  all: "unset",

  border: "2px solid $baseButton",

  display: "flex",
  alignItems: "center",

  cursor: "pointer",
  gap: "8px",

  backgroundColor: "$baseButton",
  borderRadius: "6px",

  width: "100%",

  padding: "1rem",
  transition: "filter 0.2s",

  color: "$baseText",
  textTransform: "uppercase",
  fontSize: "$sm2",

  svg: {
    fontSize: "$xl2",
    color: "$purple",
  },

  "&:hover": {
    filter: "brightness(0.9)",
  },
});
