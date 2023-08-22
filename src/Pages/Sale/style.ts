import styled from "styled-components";

const StyledMainContainer = styled.main`
  width: 100vw;
  height: auto;
  background: linear-gradient(0deg, var(--grey-8) 87%, var(--brand-1) 13%);
  margin-top: 80px;
  padding: 50px 12px 70px 12px;

  @media (min-width: 1200px) {
    padding-left: 150px;
    padding-right: 180px;
    background: linear-gradient(0deg, var(--grey-8) 75%, var(--brand-1) 25%);
  }
`
export default StyledMainContainer;