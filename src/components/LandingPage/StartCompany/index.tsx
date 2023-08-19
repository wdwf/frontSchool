import * as S from "./styles";
import union from "../../../assets/imgs/Union.png";
import gridMember from "../../../assets/imgs/gridMember.png";

export const StartCompany = () => {
  return (
    <S.StartCompany>
      <div className="subContainerStartCompany">
        <div className="textContent">
          <div className="titleStartCompany">
            <img src={union} alt="" />
            <p>@speak5languages</p>
          </div>
          <div className="textStartCompany">
            <p>
              Nossa empresa nasceu em 2020 e mais de 500 alunos já são parte da
              nassa história! Somos gratas por cada um que apoiou e que faz
              parte dessa jornada! Temos muitos planos para o futuro e
              convidamos todos vocês a crescerem e se desenvolverem com a gente!{" "}
            </p>
          </div>
        </div>
        <img className="grid" src={gridMember} alt="foto das integrantes" />
      </div>
    </S.StartCompany>
  );
};
