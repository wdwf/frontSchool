import HeaderLanding from "../../components/LandingPage/HeaderLanding";
import * as S from "./styles";

import arrowMouseDown from "../../assets/imgs/arrowMouseDown.png";
import { MouseSimple } from "@phosphor-icons/react";

import { Bunner } from "../../components/LandingPage/Bunner";
import { About } from "../../components/LandingPage/About";
import { Approach } from "../../components/LandingPage/Approach";
import { StartCompany } from "../../components/LandingPage/StartCompany";
import { LanguagesLanding } from "../../components/LandingPage/LanguagesLanding";
import { Footer } from "../../components/LandingPage/Footer";
import { ContainerCardPrice } from "../../components/LandingPage/ContainerCardPrice/ContainerCardPrice";

const LandingPage = () => {
  return (
    <S.Container>
      <HeaderLanding />
      <Bunner />
      <S.MouseDown>
        <div className="containerMouseDown">
          <MouseSimple size={32} weight="light" />
          <img src={arrowMouseDown} alt="" />
        </div>
      </S.MouseDown>
      <About />
      <Approach />
      <StartCompany />
      <LanguagesLanding />
      <ContainerCardPrice />
      <Footer />
    </S.Container>
  );
};

export default LandingPage;
