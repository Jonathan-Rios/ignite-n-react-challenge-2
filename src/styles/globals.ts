import { globalCss } from "./index";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    backgroundColor: "$background",
    color: "$gray300",
    "-webkit-font-smoothing": "antialiased",

    margin: "auto",
    width: "1120px",
    height: "100vh",

    background: `linear-gradient(
      to bottom,
      $gray700 0px,
      $gray700 200px,
      $background 200px,
      $background 100%
    )`,
  },

  "body, input, textarea, button": {
    fontFamily: "Roboto, sans-serif",
    fontWeight: 400,
  },
});
