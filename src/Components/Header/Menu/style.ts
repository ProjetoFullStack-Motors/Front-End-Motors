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
    align-items: center;
    gap: 8px;

    border: solid 1px transparent;

    .user-img {
      width: 32px;
      height: 32px;
      padding-top: 8px;
      text-align: center;
    }

    .user-img,
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
      .user-img,
      span {
        display: block;
      }
    }
    button {
      width: 10rem;
    }
  }
`;

export { StyledMenu };
