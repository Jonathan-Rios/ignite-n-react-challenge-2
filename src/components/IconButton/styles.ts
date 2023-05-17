import { styled } from "@/styles";

export const Button = styled("button", {
  variants: {
    buttonType: {
      round: {
        borderRadius: "38px",

        svg: {
          fontSize: "16px",
        },
      },
      box: {
        borderRadius: "6px",

        svg: {
          fontSize: "22px",
        },
      },
    },
    onlyBadge: {
      true: {},
      false: {
        transition: "filter 0.2s",
        cursor: "pointer",
        "&:hover": {
          filter: "brightness(0.8)",
        },
      },
    },
  },

  defaultVariants: {
    buttonType: "round",
    onlyBadge: false,
  },

  all: "unset",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  backgroundColor: "$baseButton",

  color: "$baseText",

  height: "38px",
  width: "38px",
});
