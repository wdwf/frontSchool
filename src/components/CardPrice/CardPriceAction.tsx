import { ButtonComposition } from "../Button";

type CardPriceActionProps = {
  title: string;
};

export const CardPriceAction = ({ title }: CardPriceActionProps) => {
  return (
    <ButtonComposition.Action variant="confirm">
      <ButtonComposition.Title title={title} />
    </ButtonComposition.Action>
  );
};
