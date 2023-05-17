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
    },

    div: {
      h3: {
        fontSize: "$lg1",
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
  justifyContent: "center",
  alignItems: "center",

  cursor: "pointer",
  gap: "4px",

  backgroundColor: "$baseButton",
  borderRadius: "6px",

  color: "$baseText",

  height: "38px",
  width: "100%",

  padding: "0.5rem 0.5rem",
  transition: "filter 0.2s",

  svg: {
    fontSize: "$xl2",
    color: "$purple",
  },

  "&:hover": {
    filter: "brightness(0.9)",
  },
});
