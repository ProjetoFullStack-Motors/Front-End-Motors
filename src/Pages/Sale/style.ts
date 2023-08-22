import styled from "styled-components";

const StyledMainContainer = styled.main`
  background: linear-gradient(0deg, var(--grey-8) 87%, var(--brand-1) 13%);
  margin-top: 150px auto;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1200px) {
    background: linear-gradient(0deg, var(--grey-8) 75%, var(--brand-1) 25%);
  }
`;
export default StyledMainContainer;
