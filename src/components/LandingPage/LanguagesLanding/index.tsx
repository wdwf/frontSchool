import * as S from "./styles";
import FlagUSA from "../../../assets/imgs/FlagUSA.png";
import FlagSpanish from "../../../assets/imgs/FlagSpanish.png";
import FlagItalian from "../../../assets/imgs/FlagItalian.png";
import FlagGerman from "../../../assets/imgs/FlagGerman.png";
import FlagFranch from "../../../assets/imgs/FlagFranch.png";
import { useInView } from "react-intersection-observer";

export const LanguagesLanding = () => {
  const { ref: serviceRef, inView: serviceIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <S.Languages id="service" ref={serviceRef}>
      <div className={`title ${serviceIsVisible ? "titleAnimate" : ""}`}>
        <p>Idiomas</p>
        <p>Ensinados</p>
      </div>
      <div className={`text ${serviceIsVisible ? "textAnimate" : ""}`}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          cumque quo, dolorem sequi voluptatum maiores atque eum deleniti
          temporibus, pariatur quisquam voluptates alias incidunt impedit
          recusandae voluptatem, suscipit facilis voluptatibus. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quibusdam cumque quo,
          dolorem sequi voluptatum maiores atque eum deleniti temporibus,
          pariatur quisquam voluptates alias incidunt impedit recusandae
          voluptatem, suscipit facilis voluptatibus.
        </p>
        <div className="contentFlags">
          <div className="flag">
            <img src={FlagUSA} alt="" />
            <p>Inglês</p>
          </div>
          <div className="flag">
            <img src={FlagSpanish} alt="" />
            <p>Espanhol</p>
          </div>
          <div className="flag">
            <img src={FlagItalian} alt="" />
            <p>Italiano</p>
          </div>
          <div className="flag">
            <img src={FlagGerman} alt="" />
            <p>Alemão</p>
          </div>
          <div className="flag">
            <img src={FlagFranch} alt="" />
            <p>Francês</p>
          </div>
        </div>
      </div>
    </S.Languages>
  );
};
