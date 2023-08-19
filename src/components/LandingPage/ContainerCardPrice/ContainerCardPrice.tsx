import * as S from "./styles";
import { CardPriceComposition } from "../../CardPrice";
import cardBackground2 from "../../../assets/imgs/cardBackground2.png";
import cardBackground3 from "../../../assets/imgs/cardBackground3.png";

export const ContainerCardPrice = () => {
  return (
    <S.Container>
      <div className="titleSection">
        <h2>Escolha seu plano de ensino</h2>
        <p>
          Escolha o plano que mais te agrada e dê aquele gás nos seus estudos
        </p>
      </div>
      <div className="cardSection">
        <CardPriceComposition.Root>
          <CardPriceComposition.Title
            image={cardBackground2}
            titleSup="Acesso"
            titleBot="à plataforma"
          />
          <CardPriceComposition.Content
            price="0"
            listItens={["Atividades pela plataforma"]}
          >
            <a href="/login" className="noUnder">
              <CardPriceComposition.Action title="Acessar" />
            </a>
          </CardPriceComposition.Content>
        </CardPriceComposition.Root>

        <CardPriceComposition.Root focus>
          <CardPriceComposition.Title
            image={cardBackground2}
            titleSup="Aulas"
            titleBot="em grupo"
          />
          <CardPriceComposition.Content
            price="50"
            listItens={[
              "Material gratuito",
              "Uma aula por semana",
              "Conversação",
              "Exercícios",
              "Atividades pela plataforma",
            ]}
          >
            <CardPriceComposition.Action title="Assinar" />
          </CardPriceComposition.Content>
        </CardPriceComposition.Root>

        <CardPriceComposition.Root>
          <CardPriceComposition.Title
            image={cardBackground3}
            titleSup="Aulas"
            titleBot="individuais"
          />
          <CardPriceComposition.Content
            price="100"
            listItens={[
              "Material gratuito",
              "Uma aula por semana",
              "Conversação",
              "Exercícios personalizados",
              "Atividades pela plataforma",
            ]}
          >
            <CardPriceComposition.Action title="Assinar" />
          </CardPriceComposition.Content>
        </CardPriceComposition.Root>
      </div>
    </S.Container>
  );
};
