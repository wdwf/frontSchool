import * as S from "./styles";
import gridApproach from "../../../assets/imgs/ourGridApproach.png";
import ourApproachblock from "../../../assets/imgs/ourApproachblock.png";
import { useInView } from "react-intersection-observer";

export const Approach = () => {
  const { ref: approachRef, inView: approachIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <S.Approach>
      <img src={gridApproach} alt="grade decorativa" id="gridApproach" />
      <div
        ref={approachRef}
        className={`ourApproach ${approachIsVisible ? "approachAnimate" : ""}`}
      >
        <img
          src={ourApproachblock}
          alt="bloco com titulo nossa abordagem"
          id="ourApproachblock"
        />
        <div className="ourApproachContent">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
            pretium velit, vel facilisis est. Nam ac erat nec ex rutrum
            hendrerit. Curabitur bibendum tempor viverra. Aenean mattis ligula
            elit, in laoreet urna fringilla vitae.
          </p>
        </div>
      </div>
    </S.Approach>
  );
};
