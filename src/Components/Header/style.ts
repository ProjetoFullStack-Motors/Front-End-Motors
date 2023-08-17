import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80px;

  top: 0;
  left: 0;
  z-index: 100;
  position: fixed;
  background-color: var(--grey-10);
  box-shadow: 0 5px var(--grey-5);

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding-inline: 2rem;

    h1 {
      font-size: var(--font-heading-3);
      background-image: linear-gradient(to left, var(--brand-1), var(--grey-0));
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    span {
      font-size: var(--font-heading-6);
    }
  }

  @media (min-width: 729px) {
    .navbar {
      h1 {
        font-size: var(--font-heading-1);
      }
    }
  }
`;

const HeaderMenuBackground = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: #0005;

  position: fixed;
  top: 80px;
  left: 0;

  z-index: 2;
  @media (min-width: 769px) {
    top: 0;
  }
`;

export { StyledHeader, HeaderMenuBackground };
