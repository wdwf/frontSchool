import * as S from "./styles";
import { useInView } from "react-intersection-observer";

export const About = () => {
  const { ref: aboutRef, inView: aboutIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <S.About id="about">
      <div
        ref={aboutRef}
        className={`titleAbout ${aboutIsVisible ? "titleAboutAnimate" : ""}`}
      >
        <p>Sobre a</p>
        <p>Empresa</p>
      </div>
      <div className={`textAbout ${aboutIsVisible ? "textAboutAnimate" : ""}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        cumque quo, dolorem sequi voluptatum maiores atque eum deleniti
        temporibus, pariatur quisquam voluptates alias incidunt impedit
        recusandae voluptatem, suscipit facilis voluptatibus. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Quibusdam cumque quo, dolorem
        sequi voluptatum maiores atque eum deleniti temporibus, pariatur
        quisquam voluptates alias incidunt impedit recusandae voluptatem,
        suscipit facilis voluptatibus.
      </div>
    </S.About>
  );
};
