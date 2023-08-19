import * as S from "./styles";

type CardPriceRootProps = {
  children: React.ReactNode;
  focus?: boolean;
};

export const CardPriceRoot = ({ focus, children }: CardPriceRootProps) => {
  return (
    <S.Container className={focus ? "primary" : ""}>{children}</S.Container>
  );
};
