import * as S from "./styles";
import tagList from "../../assets/imgs/tagList.png";

type CardPriceContentProps = {
  children: React.ReactNode;
  price: string;
  listItens: string[];
};

export const CardPriceContent = ({
  price,
  listItens,
  children,
}: CardPriceContentProps) => {
  return (
    <S.Content>
      <div className="price">
        <p>
          R$ {price}
          <span>/Mês</span>
        </p>
      </div>
      <ul className="listBenefits">
        {listItens.map((item, index) => (
          <li key={index}>
            <img src={tagList} alt="tag da lista" />
            <p>{item}</p>
          </li>
        ))}
      </ul>
      {children}
    </S.Content>
  );
};
