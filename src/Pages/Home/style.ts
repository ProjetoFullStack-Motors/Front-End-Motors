import styled from "styled-components";

const StyledHomePage = styled.main`
  min-height: 100vh;
  max-height: max-content;
  max-width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;

  .home-container {
    display: flex;
    gap: 10%;
    padding: 2rem;
    margin-inline: auto;
    margin-top: 90px;
    width: 100%;
    max-height: 1680px;
    box-sizing: border-box;
  }
`;

const ButtonContainerPosition = styled.div`
  align-self: center;
`;

export { StyledHomePage, ButtonContainerPosition };
