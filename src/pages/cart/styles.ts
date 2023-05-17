import { styled } from "@/styles";

export const Container = styled("main", {
  "& > footer": {
    height: "100px",
  },
});

export const Form = styled("form", {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "flex-start",

  "& > h3": {
    marginBottom: "3rem",
  },

  "& > section": {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",

    gap: "2rem",
  },
});

export const BaseCard = styled("div", {
  display: "flex",
  flexDirection: "column",

  width: "100%",

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
});

export const UserDataContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  width: "640px",
});
