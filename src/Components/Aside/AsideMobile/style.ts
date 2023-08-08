import styled from "styled-components";

const StyledAsideMobile = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
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
  overflow-y: auto;
  margin-top: 1rem;
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
    font-size: var(--font-body-1);
    width: 20px;
    height: 20px;
    font-weight: var(--font-semibold);

    :focus {
      border-radius: 100%;
      background-color: var(--grey-4);
      color: var(--grey-1);
    }
  }
`;

const StyledFilters = styled.div`
  padding: 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  height: 200px;

  button {
    :hover {
      background-color: var(--brand-1);
    }
  }
`;

export {
  StyledAsideMobile,
  StyledAsideModal,
  HeaderAsideModal,
  StyledFilters,
  StyledButtonContainer,
};
