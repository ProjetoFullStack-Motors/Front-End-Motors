import styled from "styled-components";

const StyledHomePage = styled.main`
  /* max-height: 100vh; */
  min-height: 100vh;
  max-height: max-content;
  max-width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;

  .home-container {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    margin-inline: auto;
    margin-top: 90px;
    width: 100%;
    box-sizing: border-box;
  }
`;

const ButtonContainerPosition = styled.div`
  align-self: center;
  margin: 5rem 0 15rem 0;

  @media (min-width: 1024px) {
    margin: 5rem 0;
  }
`;

export { StyledHomePage, ButtonContainerPosition };
