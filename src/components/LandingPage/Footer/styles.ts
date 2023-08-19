import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  height: 82px;
  background-color: ${(props) => props.theme.colors.black[100]};
  display: flex;
  color: ${(props) => props.theme.colors.gray[100]};

  .ContentFooter {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 20%;

    .title {
      text-align: center;
      color: ${(props) => props.theme.colors.gray[200]};
    }
    .contentText {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
    }
  }

  .copyright {
    width: 60%;
    border-right: 1px solid ${(props) => props.theme.colors.gray[100]};
    border-left: 1px solid ${(props) => props.theme.colors.gray[100]};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (${(props) => props.theme.device.tablet}) {
    font-size: ${(props) => props.theme.fontSize.text_sm};
  }

  @media (${(props) => props.theme.device.mobileL}) {
    flex-direction: column;
    height: auto;
    gap: 12px;
    padding: 12px 0;

    .ContentFooter {
      width: 100%;
    }
    .copyright {
      border: none;
      border-top: 1px solid ${(props) => props.theme.colors.gray[100]};
      border-bottom: 1px solid ${(props) => props.theme.colors.gray[100]};
      width: 100%;
      padding: 12px 0;
    }
  }
`;
