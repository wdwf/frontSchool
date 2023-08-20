import { styled } from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 100%;
  max-height: 50px;
  position: fixed;
  background-color: ${(props) => props.theme.colors.white[100]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  padding: 0 100px;

  .btnMenu {
    display: none;
    cursor: pointer;
  }

  svg {
    width: 100px;
  }

  @media (${(props) => props.theme.device.tablet}) {
    padding: 0 16px;

    .btnMenu {
      display: block;
    }

    svg {
      width: 60px;
    }
  }
`;

export const ListMenuSection = styled.ul`
  background-color: ${(props) => props.theme.colors.white[100]};
  transition: all 0.5s ease;
  display: flex;
  overflow: hidden;
  width: 100%;
  position: initial;
  flex-direction: row;
  height: auto;
  padding: 0;
  margin-left: 15%;
  gap: 42px;

  & li {
    padding: 0;
    transition: none;
    cursor: pointer;

    a {
      display: inline;
      width: 100%;
      height: 100%;
      color: ${(props) => props.theme.colors.black[100]};
      text-decoration: none;
    }

    &:hover {
      background-color: transparent;
    }
  }

  &.open {
    width: 100%;
  }

  .btnActions {
    display: none;
  }

  @media (${(props) => props.theme.device.tablet}) {
    width: 0%;
    position: absolute;
    top: 50px;
    left: 0;
    flex-direction: column;
    height: 90vh;
    padding: 24px 0;
    margin-left: 0%;
    gap: 16px;

    & li {
      padding: 10px 0 10px 18px;
      transition: all 0.3s ease;
      cursor: pointer;

      a {
        display: block;
        width: 100%;
        height: 100%;
        color: ${(props) => props.theme.colors.black[100]};
        text-decoration: none;
      }

      &:hover {
        background-color: ${(props) => props.theme.colors.gray[100]};
      }
    }

    .btnActions {
      display: block;
    }
  }
`;

export const AccessPlatform = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 24px;
  width: 100%;

  button {
    width: 100%;
    max-width: 90px;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.colors.black[100]};
    background-color: ${(props) => props.theme.colors.white[100]};

    a {
      width: 100%;
      height: 100%;
      display: block;
      text-decoration: none;
      padding: 5px 5px;
      font-weight: bold;
      color: ${(props) => props.theme.colors.black[100]};
      font-size: ${(props) => props.theme.fontSize.text_xs};
    }

    &:nth-child(2) {
      background-color: ${(props) => props.theme.colors.black[100]};

      a {
        color: ${(props) => props.theme.colors.white[100]};
      }
    }
  }

  @media (${(props) => props.theme.device.tablet}) {
    display: none;
  }
`;
