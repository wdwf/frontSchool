import { styled } from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  position: relative;
  scroll-behavior: smooth;
`;

export const MouseDown = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .containerMouseDown {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 90px;
    gap: 8px;
    border: 1px solid ${(props) => props.theme.colors.black[100]};
    border-radius: 100px;
    box-shadow: 3px 3px ${(props) => props.theme.colors.black[100]};
    margin: 24px auto 32px auto;
    position: relative;
    animation: moving 1s infinite alternate;

    @keyframes moving {
      to {
        top: 0;
      }
      from {
        top: 30px;
      }
    }
  }

  @media (${(props) => props.theme.device.mobileL}) {
    .containerMouseDown {
      width: 40px;
      height: 80px;
    }
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;
