import { styled } from "@/styles";
import { relative } from "path";
import { IconButton } from "@/components/IconButton";

export const Container = styled("main", {
  "& > footer": {
    height: "100px",
  },
});

export const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginTop: "4rem",

  width: "100%",
  justifyContent: "space-between",
  alignItems: "flex-start",

  "& > div": {
    display: "flex",
    flexDirection: "column",
    marginBottom: "2.5rem",
    gap: "0.5rem",

    h2: {
      color: "$yellowDark",
    },

    color: "$baseText",
  },

  "& > section": {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",

    "& > aside": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",

      minWidth: "526px",

      position: "relative",

      // ? Border Radius com Gradiente não funciona 100%, precisou desse macete abaixo.
      "&:before": {
        content: "",
        position: "absolute",
        inset: 0,
        borderRadius: "6px 36px 6px 36px",
        border: "2px solid transparent",
        background: "linear-gradient(135deg, $yellow, $purple) border-box",
        "-webkit-mask":
          "linear-gradient(#fff 0 0) padding-box,  linear-gradient(#fff 0 0)",
        "-webkit-mask-composite": "xor",
        "mask-composite": "exclude",
      },

      padding: "2.5rem", // 40px

      "& > div": {
        display: "flex",
        gap: "0.75rem", // 12px
        alignItems: "center",

        color: "$baseText",

        "& > div": {
          display: "flex",
          flexDirection: "column",
          gap: "0.125rem", // 12px
        },
      },
    },
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

export const ItemsButton = styled(IconButton, {
  variants: {
    kind: {
      map: {
        backgroundColor: "$purple",
      },
      time: {
        backgroundColor: "$yellow",
      },
      money: {
        backgroundColor: "$yellowDark",
      },
    },
  },

  color: "$white",
});
