import * as S from "./styles";
import BannerImageLogo from "../../../assets/imgs/bannerImageLogo.png";
import { ArrowRight } from "@phosphor-icons/react";

export const Bunner = () => {
  return (
    <S.Banner id="main">
      <div className="content">
        <p className="phrase">O aprender sendo um processo natural</p>
        <h2>Finalmente, aprenda aquele idioma tão sonhado!</h2>
        <a href="/login">
          Começar
          <ArrowRight size={16} />
        </a>
      </div>

      <div className="imageBanner">
        <img src={BannerImageLogo} alt="imagen do logo da empresa" />
      </div>
    </S.Banner>
  );
};
