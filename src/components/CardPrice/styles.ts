import { styled } from "styled-components";

export const Container = styled.section`
  width: 90%;
  max-width: 362px;
  background-color: ${(props) => props.theme.colors.white[100]};
  border: 1px solid ${(props) => props.theme.colors.black[100]};
  border-radius: 12px;
  box-shadow: 3px 3px ${(props) => props.theme.colors.black[100]};
  padding: 5px;
  height: 100%;

  &.primary {
    background-color: ${(props) => props.theme.colors.yellow[100]};
  }
`;

export const Header = styled.section`
  position: relative;
  background-color: ${(props) => props.theme.colors.black[100]};
  height: 100%;
  max-height: 152px;
  overflow: hidden;
  border-radius: 10px;

  img {
    width: 100%;
  }

  .title {
    position: absolute;
    z-index: 10;
    top: 32px;
    left: 32px;
    font-size: ${(props) => props.theme.fontSize.head_lg};
    font-weight: 500;
    color: ${(props) => props.theme.colors.white[100]};
  }
`;

export const Content = styled.section`
  .price {
    font-size: ${(props) => props.theme.fontSize.head_lg};
    font-weight: bold;
    color: ${(props) => props.theme.colors.black[100]};
    padding: 16px 0 16px 32px;

    span {
      color: ${(props) => props.theme.colors.gray[400]};
      font-weight: 500;
      font-size: ${(props) => props.theme.fontSize.text_base};
    }
  }

  .listBenefits {
    padding-left: 32px;
    padding-bottom: 16px;
    li {
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 6px;

      p {
        font-weight: bold;
      }
    }
  }

  .noUnder {
    text-decoration: none;
  }
`;
