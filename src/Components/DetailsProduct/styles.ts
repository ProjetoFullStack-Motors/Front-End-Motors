import styled from "styled-components";

const StyledDivContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 100px;

  margin: 0 auto;

  h2 {
    font-size: var(--font-heading-6);
    font-weight: 600;
    margin-bottom: 32px;
  }

  p {
    font-size: var(--font-body-1);
    font-weight: 400;
    color: var(--grey-2);
    line-height: 25px;
  }

  > div {
    .boxImgCar {
      height: 355px;
      border-radius: var(--input-border);
      background-color: var(--grey-10);
      margin-bottom: 15px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        scale: 0.6;
      }
    }

    .boxInfoCar {
      display: flex;
      flex-direction: column;
      gap: 16px;

      .infoCar {
        height: 300px;
        padding: 28px;
        border-radius: var(--input-border);
        background-color: var(--grey-10);
        color: var(--grey-1);

        h2 {
          margin-bottom: 35px;
        }

        .price {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          > div {
            display: flex;
            gap: 12px;
            margin-bottom: 32px;

            span {
              display: flex;
              align-items: center;
              justify-content: center;
              min-width: 50px;
              height: 32px;
              color: var(--brand-1);
              background-color: var(--brand-4);
              font-size: var(--font-body-2);
              font-weight: 500;
            }
          }
        }

        p {
          font-size: var(--font-heading-6);
          font-weight: 500;
          margin-bottom: 36px;
          color: var(--grey-1);
        }
      }

      .descriptonCar {
        height: 300px;
        padding: 28px;
        border-radius: var(--input-border);
        background-color: var(--grey-10);
      }
    }
  }

  .detailsSection {
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 16px;

    .detailsPhotoCar {
      height: 359px;
      padding: 28px;
      background-color: var(--grey-10);
      border-radius: var(--input-border);
    }

    .detailsSeller {
      height: 398px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 28px;
      background-color: var(--grey-10);
      border-radius: var(--input-border);

      span {
        width: 77px;
        height: 77px;
        background-color: var(--brand-1);
        color: var(--grey-10);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: var(--font-heading-4);
        margin-bottom: 28px;
      }

      button {
        width: 206px;
        height: 48px;
        margin-top: 28px;
        font-size: var(--font-body-1);
        color: var(--grey-10);
        background-color: var(--grey-0);
        border: none;
        border-radius: var(--input-border);
      }
    }
  }

  .commentsSeller {
  }

  @media (min-width: 1300px) {
    flex-direction: row;

    > div {
      .boxImgCar {
        width: 752px;
      }

      .boxInfoCar {
        width: 752px;
        .infoCar {
          padding-left: 44px;
          padding-right: 44px;

          .price {
            flex-direction: row;
            justify-content: space-between;
          }
        }

        .descriptonCar {
          padding-left: 44px;
          padding-right: 44px;
        }
      }
    }

    .detailsSection {
      .detailsPhotoCar {
        width: 430px;
        padding-left: 44px;
        padding-right: 44px;

        ul {
          li {
            min-width: 108px;
            min-height: 108px;
          }
        }
      }

      .detailsSeller {
        padding-left: 44px;
        padding-right: 44px;
      }
    }
  }
`;

const StyledSectionComments = styled.section`
  height: auto;
  width: 90%;
  max-width: 1200px;

  background-color: var(--grey-10);
  margin-top: 18px;
`;

export { StyledDivContainer, StyledSectionComments };
