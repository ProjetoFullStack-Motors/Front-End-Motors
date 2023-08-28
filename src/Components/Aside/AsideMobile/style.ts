import styled from "styled-components";

const StyledAsideMobile = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  position: fixed;
  top: 0;
  z-index: 3;
  background-color: var(--modal-background);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const StyledAsideModal = styled.div`
  background-color: var(--grey-10);
  width: 100%;
  max-height: 100vh;
  overflow-y: auto;
  margin-top: 90px;
`;

const HeaderAsideModal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  box-sizing: border-box;

  h2 {
    font-size: var(--font-body-1);
    font-weight: var(--font-medium);
    color: var(--grey-1);
  }

  button {
    color: var(--grey-4);
    background-color: transparent;
    border: none;
    width: 20px;
    height: 20px;

    svg {
      width: 20px;
      height: 20px;
      fill: var(--grey-4);
    }
  }
`;

const StyledAllFiltersMobile = styled.div`
  padding-inline: 2rem;
  padding-block: 1rem;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block: 2rem;
  gap: 1rem;
  min-height: 200px;

  @media (min-width: 1024px) {
    min-height: 0;
  }
`;

export {
  StyledAsideMobile,
  StyledAsideModal,
  HeaderAsideModal,
  StyledButtonContainer,
  StyledAllFiltersMobile,
};
