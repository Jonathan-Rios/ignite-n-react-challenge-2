import { styled } from "@/styles";

export const Container = styled("main", {
  "& > footer": {
    height: "100px",
  },
});

export const Content = styled("div", {
  "& > h3": {
    marginBottom: "3rem",
  },

  "& > section": {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",

    gap: "2rem",
  },
});
