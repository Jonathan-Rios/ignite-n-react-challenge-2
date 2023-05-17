import { IconButton } from "@/components/IconButton";
import { styled } from "@/styles";

export const Container = styled("header", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  height: "544px",

  "& > div": {
    display: "flex",
    flexDirection: "column",

    h3: {
      fontFamily: "Merriweather Sans, sans-serif",
      //font-family: 'Merriweather Sans', sans-serif;

      fontWeight: "700",
      fontSize: "$xl5",

      marginBottom: "24px",
    },

    "& > section": {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",

      marginTop: "66px",

      gap: "20px 40px",

      span: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",

        gap: "0.75rem", // 12px
      },
    },
  },
});

export const ItemsButton = styled(IconButton, {
  variants: {
    kind: {
      cart: {
        backgroundColor: "$yellowDark",
      },
      pack: {
        backgroundColor: "$baseText",
      },
      time: {
        backgroundColor: "$yellow",
      },
      coffee: {
        backgroundColor: "$purple",
      },
    },
  },

  color: "$white",
});
