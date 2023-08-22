import styled, { keyframes } from "styled-components";

const FadeIn = keyframes`
  from {
    transform: translateY(60px);
    opacity: 0;
  } to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const StyledModal = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  min-height: 100vh;
  top: 0;
  z-index: 101;

  background: var(--modal-background);

  .modal-container {
    animation: ${FadeIn} 0.5s;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    max-height: 100vh;
    padding: 15px;
    gap: 10px;
    border-radius: 8px;
    background: var(--white);
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .modal-close-button {
    background-color: transparent;
    border: transparent;
    color: var(--grey-4);
    cursor: pointer;
  }

  .modal-close-button:hover {
    color: var(--grey-0);
  }
`;
