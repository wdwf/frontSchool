interface ButtonTitleProp {
  title: string;
}

export const ButtonTitle = ({ title }: ButtonTitleProp) => {
  return <p>{title}</p>;
};
