import * as S from "./styles";

type CardPriceTitleProps = {
  image: string;
  titleSup: string;
  titleBot: string;
};

export const CardPriceTitle = ({
  image,
  titleSup,
  titleBot,
}: CardPriceTitleProps) => {
  return (
    <S.Header>
      <img src={image} alt="Imagem decorativa de fundo" />
      <div className="title">
        <p className="titleText">{titleSup}</p>
        <p className="titleText">{titleBot}</p>
      </div>
    </S.Header>
  );
};
