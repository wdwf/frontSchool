import { styled } from "styled-components";
import backImageline from "../../assets/imgs/backoneline2.png";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.purple[100]};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .backgroundImage {
    width: 100%;
    height: 200px;
    background-image: url(${backImageline});
    background-repeat: no-repeat;
    background-position: top;
    background-size: contain;

    &:nth-child(3) {
      transform: rotateY(180deg);
      background-position: bottom;
    }
  }

  @media (${(props) => props.theme.device.tablet}) {
    background-color: ${(props) => props.theme.colors.white[100]};
    padding: 16px;

    .backgroundImage {
      display: none;
    }
  }

  @media (${(props) => props.theme.device.mobileL}) {
    min-height: 106vh;
  }
`;

export const Wrapper = styled.section`
  min-width: 400px;
  max-width: 500px;
  min-height: 400px;
  max-height: 500px;
  background-color: ${(props) => props.theme.colors.white[100]};
  text-align: center;
  padding: 24px;
  border-radius: 10px;
  position: absolute;
  z-index: 10;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;

  img {
    margin-bottom: 32px;
  }

  .inputField {
    h2,
    .textInfo {
      margin-bottom: 24px;
    }

    .linkLogin {
      margin-top: 32px;
      display: flex;
      justify-content: center;
      color: ${(props) => props.theme.colors.pink[200]};
      text-decoration: none;

      svg {
        path {
          fill: ${(props) => props.theme.colors.pink[200]};
        }
      }

      &:hover {
        text-decoration: underline;
      }
    }

    form {
      fieldset {
        display: flex;
        flex-direction: column;
        gap: 32px;
      }
    }
  }

  @media (${(props) => props.theme.device.tablet}) {
    min-width: 100%;
    min-height: 100%;
  }

  @media (${(props) => props.theme.device.laptop}) {
    img {
      width: 100px;
      margin: 24px 0;
    }
  }
`;
