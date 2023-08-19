import styled from "styled-components";

export const Languages = styled.section`
  width: 100%;
  /* max-height: 100vh; */
  height: auto;
  background-color: ${(props) => props.theme.colors.white[100]};
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 62px;
  padding-top: 62px;
  gap: 64px;
  overflow: hidden;

  .title {
    width: 200px;
    height: fit-content;
    font-size: 2em;
    font-weight: bold;
    display: inline-block;
    opacity: 0;
    border-bottom: 10px solid ${(props) => props.theme.colors.black[100]};
    transition: 0.3s;
    transform: translate3d(-50px, 0, 0);

    &.titleAnimate {
      opacity: 1;
      transform: translate3d(0px, 0px, 0px);
    }
  }
  .text {
    max-width: 700px;
    color: ${(props) => props.theme.colors.gray[300]};
    opacity: 0;
    transition: 0.5s;
    transform: translate3d(50px, 0, 0);

    &.textAnimate {
      opacity: 1;
      transform: translate3d(0px, 0px, 0px);
    }

    .contentFlags {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 32px;
      flex-wrap: wrap;
      gap: 32px;

      .flag {
        width: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 24px;
        gap: 12px;

        img {
          border: 1px solid ${(props) => props.theme.colors.gray[100]};
          border-radius: 100px;
          box-shadow: 2px 2px ${(props) => props.theme.colors.black[100]};
        }
      }
    }
  }

  @media (${(props) => props.theme.device.tablet}) {
    padding: 50px 16px 0 16px;
  }

  @media (${(props) => props.theme.device.mobileL}) {
    flex-direction: column;
    gap: 32px;

    .text {
      text-align: justify;
    }

    .contentFlags {
      flex-wrap: wrap;
    }
  }
`;
