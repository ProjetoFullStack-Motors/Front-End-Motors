import styled from "styled-components";
import { MenuProps } from "../@types";

const StyledProfileSettings = styled.nav<MenuProps>`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  position: fixed;
  top: 60px;
  right: 16px;

  background-color: var(--grey-8);
  padding: 4px;
  border-radius: var(--button-border);

  section {
    display: flex;
    justify-content: space-between;
    text-align: center;

    p,
    span {
      display: block;
      font-size: var(--font-body-1);
    }
  }

  button {
    border: none;
    font-size: var(--font-body-1);
    transition: all 0.5s;
  }
  :hover {
    color: var(--grey-10);
    background-color: var(--grey-3);
  }

  @media (min-width: 769px) {
    right: 60px;

    section {
      display: flex;
      gap: 8px;

      p,
      span {
        display: none;
      }
    }
  }
`;

export { StyledProfileSettings };
