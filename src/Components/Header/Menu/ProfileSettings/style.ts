import styled from "styled-components";
import { MenuProps } from "../@types";

const StyledProfileSettings = styled.nav<MenuProps>`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  position: fixed;
  top: 80px;
  right: 0;
  z-index: 101;

  background-color: var(--grey-10);
  padding: 8px;
  border-radius: var(--button-border);
  width: 100%;

  section {
    display: flex;
    align-items: center;
    gap: 8px;
    text-align: center;

    div {
      width: 32px;
      height: 32px;
      padding-top: 8px;
      text-align: center;
    }

    div,
    span {
      display: block;
      font-size: var(--font-body-1);
      font-weight: var(--font-semibold);
    }
  }

  .menu-close {
    text-align: center;
    display: none;
  }

  button {
    font-size: var(--font-body-1);
    transition: all 0.5s;
  }

  button:nth-child(3) {
    width: 100%;
  }

  button:hover {
    color: var(--grey-10);
    background-color: var(--grey-3);
  }

  @media (min-width: 769px) {
    right: 60px;
    width: 15rem;

    section {
      position: relative;
      div,
      span {
        display: none;
      }
    }

    .menu-close {
      display: block;
      position: absolute;
      top: 4px;
      right: 4px;
    }
  }
`;

export { StyledProfileSettings };
