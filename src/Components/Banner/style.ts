import styled from "styled-components";

const StyleBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  position: relative;
  width: 100%;
  height: 544px;
  margin-top: 80px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.99),
      rgba(134, 142, 150, 0.2)
    );
    z-index: 1;
  }

  background-image: url("https://live.staticflickr.com/65535/53107150201_3a16dfaff9_b.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;

  color: var(--grey-10);
  text-align: center;

  h1 {
    font-size: var(--font-heading-2);
    margin-top: 100px;
    z-index: 2;
  }

  h3 {
    font-size: var(--font-heading-4);
    z-index: 2;
  }

  @media (min-width: 769px) {
    justify-content: center;

    h1 {
      font-size: var(--font-heading-1);
      margin: 0;
    }

    h3 {
      font-size: var(--font-heading-3);
    }
  }
`;

export { StyleBanner };
