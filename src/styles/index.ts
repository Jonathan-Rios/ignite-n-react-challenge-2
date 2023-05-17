import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: "#FFFFFF",
      background: "#FAFAFA",

      yellow: "#DBAC2C",
      yellowDark: "#C47F17",
      yellowLight: "#F1E9C9",

      purple: "#8047F8",
      purpleDark: "#4B2995",
      purpleLight: "#EBE5F9",

      baseTitle: "#272221",
      baseSubtitle: "#403937",
      baseText: "#574F4D",
      baseLabel: "#8D8686",

      baseHover: "#D7D5D5",
      baseButton: "#E6E5E5",
      baseInput: "#EDEDED",
      baseCard: "#F3F2F2",
    },

    fontSizes: {
      sm3: "0.625rem", // 10px
      sm2: "0.75rem", // 12px
      sm1: "0.875rem", // 14px
      md: "1rem", // 16px
      xl1: "1.125rem", // 18px
      xl2: "1.25rem", // 20px
      xl3: "1.5rem", // 24px
      xl4: "2rem", // 32px
      xl5: "3rem", // 48px
    },

    fonts: {
      header: "Merriweather Sans, sans-serif",
      body: "Roboto, sans-serif",
    },
  },
});
