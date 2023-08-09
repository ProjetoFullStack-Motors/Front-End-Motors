import styled from "styled-components";

const StyledHomePage = styled.main`
  max-height: 100vh;
  max-width: 100vw;

  .home-container {
    display: flex;
    justify-content: space-between;

    /* max-width: 1280px; */
    margin: 0 auto;
  }

  /* @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
  } */
`;

const ButtonContainerPosition = styled.div`
  align-self: center;
  margin-bottom: 1rem;
`;

export { StyledHomePage, ButtonContainerPosition };
