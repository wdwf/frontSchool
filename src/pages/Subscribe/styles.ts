import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.black};
  display: flex;
  flex-direction: row-reverse;

  header {
    text-align: center;
    margin-bottom: 26px;

    img {
      margin: 24px 0;
      width: 92px;
    }

    h3 {
      font-size: 1rem;
      font-family: "PoppinsLight";
    }
  }

  #formField {
    display: flex;
    flex-direction: column;
  }

  .btnField {
    margin-top: 32px;
  }

  #login {
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 32px 0;

    a {
      margin-left: 12px;
      text-decoration: none;

      span {
        color: ${(props) => props.theme.colors.pink[200]};
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (${(props) => props.theme.device.tablet}) {
    display: block;
    flex-direction: column;
    padding: 16px;
    position: relative;
  }
`;

export const BannerCampany = styled.section`
  min-height: 100vh;
  position: relative;

  img {
    max-height: 100vh;
    top: 0;
    position: sticky;
  }

  @media (${(props) => props.theme.device.tablet}) {
    display: none;
  }
`;

export const ContentFormField = styled.main`
  width: 100%;
  max-width: 500px;
  padding: 24px;
  margin: 0 auto;

  @media (${(props) => props.theme.device.laptop}) {
    width: 50%;
  }

  @media (${(props) => props.theme.device.tablet}) {
    padding: 0;
    width: 90%;
  }
`;
