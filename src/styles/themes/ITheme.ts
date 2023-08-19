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
    white: {
      100: string;
    };
    yellow: {
      100: string;
    };
    red: {
      100: string;
      200: string;
    };
    pink: {
      100: string;
      200: string;
    };
    black: {
      100: string;
      200: string;
    };
    purple: {
      100: string;
      200: string;
      300: string;
      400: string;
    };
    gray: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
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
