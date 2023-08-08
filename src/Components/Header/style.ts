import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100vw;
  height: 80px;

  background-color: var(--grey-10);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

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

export { StyledHeader };
