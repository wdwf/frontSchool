import { useState } from "react";
import * as S from "./styles";
import Logo from "../../IconsSvg/Logo";
import BtnMenu from "../../IconsSvg/Menu";

const HeaderLanding = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleOpenNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <S.Header>
      <Logo />

      <S.ListMenuSection className={`${openNav && "open"}`}>
        <li onClick={handleOpenNav}>
          <a href="#main">Início</a>
        </li>
        <li onClick={handleOpenNav}>
          <a href="#about">Sobre</a>
        </li>
        <li onClick={handleOpenNav}>
          <a href="#service">Serviços</a>
        </li>
        <li onClick={handleOpenNav}>
          <a href="#contact">Contato</a>
        </li>
        <li className="btnActions">
          <a href="/login">Entrar</a>
        </li>
        <li className="btnActions">
          <a href="signup">Cadastrar</a>
        </li>
      </S.ListMenuSection>

      <S.AccessPlatform>
        <button>
          <a href="/login">Entrar</a>
        </button>
        <button>
          <a href="signup">Cadastrar</a>
        </button>
      </S.AccessPlatform>
      <BtnMenu className="btnMenu" onClick={handleOpenNav} />
    </S.Header>
  );
};

export default HeaderLanding;
