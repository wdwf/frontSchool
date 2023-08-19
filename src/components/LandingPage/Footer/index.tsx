import * as S from "./styles";
import { Phone, Envelope } from "@phosphor-icons/react";

export const Footer = () => {
  return (
    <S.Footer id="contact">
      <div className="ContentFooter">
        <p className="title">Fone:</p>
        <div className="contentText">
          <Phone size={24} weight="fill" />
          <p>(11) 00000-0000</p>
        </div>
      </div>
      <div className="copyright">
        <p>© 2022 speak5languages. All rights reserved.</p>
      </div>
      <div className="ContentFooter">
        <p className="title">Email:</p>
        <div className="contentText">
          <Envelope size={24} weight="fill" />
          <p>s5l@email.com</p>
        </div>
      </div>
    </S.Footer>
  );
};
