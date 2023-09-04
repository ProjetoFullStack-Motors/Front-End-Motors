import { styled } from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: var(--grey-0);
  /* position: absolute;
  bottom: 0; */
  margin-top: 2rem;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 2rem;
    gap: 2rem;

    p {
      color: var(--grey-10);
      font-size: var(--font-body-2);
      font-weight: var(--font-base);
    }
    .arrowUp {
      padding: 1.2rem;
      background-color: var(--grey-1);
      border-radius: var(--button-border);
    }
  }
  @media (min-width: 650px) {
    div {
      flex-direction: row;
      justify-content: space-between;
    }
  }
  @media (min-width: 800px) {
    div {
      a {
        cursor: pointer;
      }
    }
  }
`;
