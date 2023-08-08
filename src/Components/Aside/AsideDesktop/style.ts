import { styled } from "styled-components";

const StyledAsideDesktop = styled.div`
  margin-top: 90px;
  max-width: 454px;
  width: 30%;
  max-height: 1680px;

  @media (max-width: 1023px) {
    display: none;
  }
`;

export { StyledAsideDesktop };
