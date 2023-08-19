import ITheme from "./ITheme";

const theme: ITheme = {
  fontSize: {
    text_xs: "0.75rem",
    text_sm: "0.875rem",
    text_base: "1rem",

    head_xs: "1rem",
    head_sm: "1.2rem",
    head_md: "1.7rem",
    head_lg: "2em",
  },
  colors: {
    white: {
      100: "#FFFFFF",
    },
    yellow: {
      100: "#F2FF58",
    },
    red: {
      100: "#E89B9A",
      200: "#DD1714",
    },
    pink: {
      100: "#FF9EFF",
      200: "#E95BE3",
    },
    black: {
      100: "#292D32",
      200: "#17191D",
    },
    purple: {
      100: "#8889FF",
      200: "#5856D6",
      300: "#4E4EE8",
      400: "#3A3AF0",
    },
    gray: {
      100: "#DADADA",
      200: "#AFAEAD",
      300: "#737373",
      400: "#737373",
      500: "#6F6F6F",
    },
  },
  device: {
    mobileS: `(max-width: 320px)`,
    mobileM: `(max-width: 375px)`,
    mobileL: `(max-width: 425px)`,
    tablet: `(max-width: 768px)`,
    laptop: `(max-width: 1024px)`,
    laptopL: `(max-width: 1440px)`,
    desktop: `(max-width: 2560px)`,
  },
};

export default theme;
