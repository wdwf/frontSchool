import { styled } from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-top: 1px solid ${(props) => props.theme.colors.black[200]};
  border-bottom: 1px solid ${(props) => props.theme.colors.black[200]};
  background-color: ${(props) => props.theme.colors.purple[300]};
  padding: 24px 0;

  .titleSection {
    text-align: center;
    margin-bottom: 24px;

    h2 {
      color: ${(props) => props.theme.colors.white[100]};
      font-size: ${(props) => props.theme.fontSize.head_lg};
    }

    p {
      margin: 0 auto;
      text-align: center;
      background-color: ${(props) => props.theme.colors.pink[100]};
      color: ${(props) => props.theme.colors.black[100]};
      padding: 5px;
      border: 1px solid ${(props) => props.theme.colors.black[200]};
    }
  }

  .cardSection {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (${(props) => props.theme.device.mobileL}) {
    .titleSection {
      p {
        width: 90%;
      }
    }
  }
`;
