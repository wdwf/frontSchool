import { styled } from "styled-components";

export const StartCompany = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 62px;

  .subContainerStartCompany {
    background-color: ${(props) => props.theme.colors.pink[200]};
    display: flex;
    width: 90%;
    flex-direction: inherit;
    justify-content: space-between;
    padding: 42px;
    border-radius: 24px;
    gap: 50px;

    .textContent {
      width: 100%;
      margin-bottom: 32px;
      max-width: 500px;

      .titleStartCompany {
        display: flex;
        align-items: center;
        gap: 10px;

        p {
          font-size: 2rem;
          color: ${(props) => props.theme.colors.white[100]};
        }
      }

      .textStartCompany {
        p {
          font-size: 1.1rem;
          margin-top: 42px;
          line-height: 48px;
          font-weight: 100;
          color: ${(props) => props.theme.colors.white[100]};
        }
      }
    }

    .grid {
      width: 100%;
      max-width: 500px;
    }
  }

  @media (${(props) => props.theme.device.laptop}) {
    .subContainerStartCompany {
      width: 95%;
      .textContent {
        .textStartCompany {
          p {
            font-size: ${(props) => props.theme.fontSize.text_base};
          }
        }
      }
      .grid {
        height: 100%;
      }
    }
  }

  @media (${(props) => props.theme.device.tablet}) {
    min-height: 62vh;
    .subContainerStartCompany {
      flex-direction: row;
      padding: 16px;
      gap: 80px;
      width: 100%;
      border-radius: 0;

      .textContent {
        margin-top: 32px;

        .titleStartCompany {
          p {
            font-size: ${(props) => props.theme.fontSize.head_sm};
          }
        }

        .textStartCompany {
          p {
            font-size: ${(props) => props.theme.fontSize.text_sm};
            margin-top: 24px;
            line-height: 25px;
            color: ${(props) => props.theme.colors.white[100]};
          }
        }
      }

      .grid {
        height: auto;
        max-width: 340px;
      }
    }
  }

  @media (${(props) => props.theme.device.mobileL}) {
    .subContainerStartCompany {
      flex-direction: column;
      align-items: center;
      gap: 0;

      .textContent {
        .textStartCompany {
          text-align: justify;
        }
      }
    }
  }
`;
