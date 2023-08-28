import styled from "styled-components";
import { TMenuStyleProps } from "../@types";

const StyleAccessButtons = styled.div<TMenuStyleProps>`
  display: ${({ open }) => (open ? "flex" : "none")};
  gap: 16px;

  a {
    display: none;
    font-size: var(--font-body-1);
    font-weight: var(--font-semibold);
    color: var(--brand-1);
    padding: 8px 16px;
  }

  a:nth-child(2) {
    color: var(--grey-0);
    border: var(--border-button-1);
    border-radius: var(--button-border);
  }

  @media (min-width: 769px) {
    a {
      display: block;
    }
  }
`;

const StyleAccessButtonsMobile = styled.nav<TMenuStyleProps>`
  display: flex;

  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(1000px)")};
  transition: all 0.7s;

  flex-direction: column;
  gap: 32px;

  position: fixed;
  top: 80px;
  right: 0;
  z-index: 101;

  background-color: var(--grey-10);
  padding: 8px;
  border-radius: var(--button-border);

  width: 100%;

  a {
    display: flex;
    align-items: center;

    font-size: var(--font-body-1);
    font-weight: var(--font-semibold);
    color: var(--grey-0);

    width: --button-width-0;
    height: var(--button-height-1);
  }

  a:nth-child(2) {
    width: 100%;
    border: var(--border-button-1);
    justify-content: center;
  }

  @media (min-width: 769px) {
    display: none;
    a {
      display: none;
    }
  }
`;

const HeaderHomeBackground = styled.section`
  width: 100vw;
  height: 100vh;

  background-color: #0005;

  position: fixed;
  top: 80px;
  left: 0;

  z-index: 2;

  @media (min-width: 769px) {
    display: none;
  }
`;

export { StyleAccessButtons, StyleAccessButtonsMobile, HeaderHomeBackground };
