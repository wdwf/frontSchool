import { createGlobalStyle } from "styled-components";

import PoppinsThin from "./Poppins-Thin.ttf";
import PoppinsLight from "./Poppins-Light.ttf";
import PoppinsMedium from "./Poppins-Medium.ttf";
import PoppinsRegular from "./Poppins-Regular.ttf";
import PoppinsSemiBold from "./Poppins-SemiBold.ttf";

export default createGlobalStyle`
  @font-face {
    font-family: "PoppinsThin";
    src: url(${PoppinsThin});
  }

  @font-face {
    font-family: "PoppinsLight";
    src: url(${PoppinsLight});
  }

  @font-face {
    font-family: "PoppinsMedium";
    src: url(${PoppinsMedium});
  }

  @font-face {
    font-family: "PoppinsRegular";
    src: url(${PoppinsRegular});
  }

  @font-face {
    font-family: "PoppinsSemiBold";
    src: url(${PoppinsSemiBold});
  }
`;
