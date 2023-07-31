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
    black: "#1a1a1a",
    gray: {
      800: "#292D32",
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
