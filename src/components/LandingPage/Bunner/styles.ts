import styled from "styled-components";

export const Banner = styled.section`
  width: 100%;
  min-height: 80vh;
  background-color: ${(props) => props.theme.colors.black[100]};
  display: flex;
  padding: 0 16px 0 16px;
  padding-top: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80vh;
  padding: 50px 100px 0 100px;

  .content {
    width: 100%;

    .phrase {
      color: ${(props) => props.theme.colors.gray[200]};
      /* position: relative; */
      display: flex;

      &::before {
        content: "";
        display: block;
        width: 1px;
        height: 20px;
        background-color: ${(props) => props.theme.colors.gray[200]};
        margin-right: 5px;
      }
    }

    h2 {
      font-size: 2.4em;
      font-weight: 100;
      color: ${(props) => props.theme.colors.white[100]};
      margin-top: 16px;
      margin-bottom: 16px;
      width: 90%;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      padding: 5px;
      margin-bottom: 16px;
      width: 100%;
      max-width: 100px;
      border-radius: 6px;
      text-decoration: none;
      color: ${(props) => props.theme.colors.black[100]};
      font-size: ${(props) => props.theme.fontSize.text_sm};
      font-weight: 700;
      border: 1px solid ${(props) => props.theme.colors.black[100]};
      background-color: ${(props) => props.theme.colors.white[100]};
    }
  }

  .imageBanner {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: end;

    img {
      width: auto;
      height: 100%;
    }
  }

  @media (${(props) => props.theme.device.tablet}) {
    padding: 50px 16px 0 16px;

    .content {
      h2 {
        font-size: 2em;
      }
    }
  }

  @media (${(props) => props.theme.device.mobileL}) {
    height: 100%;
    padding-top: 80px;
    flex-direction: column;

    .content {
      h2 {
        font-size: 2.3em;
      }
    }

    .imageBanner {
      display: flex;
      justify-content: flex-start;

      img {
        width: 90%;
      }
    }
  }
`;
