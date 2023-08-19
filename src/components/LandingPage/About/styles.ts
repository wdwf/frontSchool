import { styled } from "styled-components";

export const About = styled.section`
  width: 100%;
  max-height: 100vh;
  background-color: ${(props) => props.theme.colors.white[100]};
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 62px;
  padding-top: 62px;
  gap: 64px;
  overflow: hidden;

  .titleAbout {
    width: 200px;
    height: fit-content;
    font-size: 2em;
    font-weight: bold;
    border-bottom: 10px solid ${(props) => props.theme.colors.black[100]};
    opacity: 0;
    transition: 0.5s;
    transform: translate3d(-50px, 0, 0);

    &.titleAboutAnimate {
      opacity: 1;
      transform: translate3d(0px, 0px, 0px);
    }
  }

  .textAbout {
    max-width: 700px;
    color: ${(props) => props.theme.colors.gray[300]};
    opacity: 0;
    transition: 0.5s;
    transform: translate3d(50px, 0, 0);

    &.textAboutAnimate {
      opacity: 1;
      transform: translate3d(0px, 0px, 0px);
    }
  }

  @media (${(props) => props.theme.device.tablet}) {
    padding: 62px 16px 0 16px;
  }

  @media (${(props) => props.theme.device.mobileL}) {
    flex-direction: column;
    gap: 32px;

    .textAbout {
      text-align: justify;
    }
  }
`;
