import styled from "styled-components";
import { MenuProps } from "../@types";

const StyledProfileSettings = styled.nav<MenuProps>`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  position: fixed;
  top: 80px;
  right: 16px;
  z-index: 3;

  background-color: var(--grey-8);
  padding: 8px;
  border-radius: var(--button-border);

  section {
    display: flex;
    align-items: center;
    gap: 8px;
    text-align: center;

    .user-img-mobile {
      width: 32px;
      height: 32px;
      padding-top: 8px;
      text-align: center;
    }

    .user-img-mobile,
    span {
      display: block;
      font-size: var(--font-body-1);
    }
  }

  span {
    text-align: center;
    display: none;
  }

  button {
    border: none;
    font-size: var(--font-body-1);
    transition: all 0.5s;
  }

  button:hover {
    color: var(--grey-10);
    background-color: var(--grey-3);
  }

  @media (min-width: 769px) {
    right: 60px;

    section {
      .user-img-mobile,
      span {
        display: none;
      }
    }

    span {
      display: block;
    }
  }
`;

export { StyledProfileSettings };
