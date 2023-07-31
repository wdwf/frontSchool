interface ITheme {
  fontSize: {
    text_xs: string;
    text_sm: string;
    text_base: string;

    head_xs: string;
    head_sm: string;
    head_md: string;
    head_lg: string;
  };
  colors: {
    black: string;
    gray: {
      800: string;
    };
  };
  device: {
    mobileS: string;
    mobileM: string;
    mobileL: string;
    tablet: string;
    laptop: string;
    laptopL: string;
    desktop: string;
  };
}

export default ITheme;
