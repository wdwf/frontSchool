import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.black};
  display: flex;

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

  #forgot {
    margin: 32px 0;
    display: flex;
    justify-content: flex-end;

    a {
      display: flex;
      align-items: center;
      gap: 5px;
      text-decoration: none;

      span {
        color: ${(props) => props.theme.colors.black[200]};
      }
      svg {
        path {
          fill: ${(props) => props.theme.colors.pink[200]};
        }
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }

  #signup {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 32px;

    a {
      margin-top: 12px;
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

  @media (${(props) => props.theme.device.mobileL}) {
    align-items: center;
    justify-content: center;
    padding: 16px 0;
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
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    width: 100%;
    max-width: 500px;
  }

  @media (${(props) => props.theme.device.laptop}) {
    padding: 32px;
  }

  @media (${(props) => props.theme.device.tablet}) {
    padding: 24px;
  }
`;
