import { styled } from "styled-components";

const StyledAsideDesktop = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 454px;
  width: 30%;
  height: 100%;

  @media (max-width: 1023px) {
    display: none;
  }
`;

export { StyledAsideDesktop };
