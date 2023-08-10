import styled from "styled-components";

const StyledMenu = styled.div`
  cursor: pointer;

  button:nth-child(1) {
    display: block;
    border: none;
    background-color: transparent;

    color: var(--grey-0);
  }

  div {
    display: flex;
    align-items: center;
    gap: 8px;

    border: solid 1px transparent;

    div {
      width: 32px;
      height: 32px;
      padding-top: 8px;
      text-align: center;
    }

    div,
    span {
      display: none;
      font-size: var(--font-body-1);
    }
  }

  @media (min-width: 769px) {
    button:nth-child(1) {
      display: none;
    }

    div {
      div,
      span {
        display: block;
      }
    }
  }
`;

export { StyledMenu };
