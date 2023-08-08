import styled from "styled-components";

const StyledMenu = styled.div`
  margin-right: 16px;
  cursor: pointer;

  button:nth-child(1) {
    display: block;
    border: none;
    background-color: transparent;

    color: var(--grey-0);
  }

  div {
    display: flex;
    gap: 16px;

    border: solid 1px transparent;

    p {
      border-radius: 50%;
      padding: 4px;
      background-color: var(--grey-5);
    }

    p,
    span {
      display: none;
      font-size: var(--font-body-1);
    }
  }

  @media (min-width: 769px) {
    margin-right: 60px;

    button:nth-child(1) {
      display: none;
    }

    div {
      p,
      span {
        display: block;
      }
    }
  }
`;

export { StyledMenu };
