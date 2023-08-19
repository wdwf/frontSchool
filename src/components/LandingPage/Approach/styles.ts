import { styled } from "styled-components";

export const Approach = styled.section`
  width: 100%;
  height: 100%;
  padding-bottom: 16px;
  margin-bottom: 32px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  #gridApproach {
    width: 100%;
  }

  .ourApproach {
    width: 80%;
    height: 100%;
    max-height: 200px;
    position: absolute;
    z-index: 10;
    top: 10%;
    display: flex;
    box-shadow: 5px 5px ${(props) => props.theme.colors.black[100]};
    opacity: 0;
    transition: 0.5s;
    transform: translate3d(0px, 50px, 0);

    &.approachAnimate {
      opacity: 1;
      transform: translate3d(0px, 0px, 0px);
    }

    #ourApproachblock {
      height: 100%;
      max-width: 400px;
      border-bottom: 1px solid ${(props) => props.theme.colors.black[100]};
    }

    .ourApproachContent {
      width: 100%;
      height: 100%;
      background-color: ${(props) => props.theme.colors.purple[100]};
      border-style: solid;
      border-width: 1px 1px 1px 0;
      border-color: ${(props) => props.theme.colors.black[100]};
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 24px;
    }
  }

  @media (${(props) => props.theme.device.tablet}) {
    justify-content: normal;
    .ourApproach {
      margin-left: 9%;
      max-height: 134px;

      .ourApproachContent {
        font-size: ${(props) => props.theme.fontSize.text_sm};
      }
    }
  }

  @media (${(props) => props.theme.device.mobileL}) {
    height: 300px;
    align-items: flex-start;
    margin-bottom: 102px;

    .ourApproach {
      flex-direction: column;
      max-height: inherit;
      box-shadow: none;

      #ourApproachblock {
        border-bottom: none;
      }
      .ourApproachContent {
        border-left: 1px solid ${(props) => props.theme.colors.black[100]};
      }
    }
  }
`;
