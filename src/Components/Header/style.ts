import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100vw;
  height: 80px;

  background-color: var(--grey-10);
  box-shadow: 0 5px var(--grey-5);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  h1 {
    margin-left: 16px;
    font-size: var(--font-heading-1);
    background-image: linear-gradient(to left, var(--brand-1), var(--grey-0));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  span {
    font-size: var(--font-heading-3);
  }

  @media (min-width: 769px) {
    h1 {
      margin-left: 60px;
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
