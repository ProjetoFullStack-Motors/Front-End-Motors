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
    height: auto;
    box-sizing: border-box;

    @media (max-width: 1023px) {
      height: auto;
    }
  }
`;

const ButtonContainerPosition = styled.div`
  align-self: center;
  margin-bottom: 32px;
`;

export { StyledHomePage, ButtonContainerPosition };
