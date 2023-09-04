import styled from "styled-components";

const StyledCreateAd = styled.div`
  margin-top: 2rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  h2 {
    font-size: var(--font-body-1);
    color: var(--grey-0);
    font-weight: var(--font-semibold);
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    fieldset {
      border: none;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;

      label {
        font-size: var(--font-body-2);
        color: var(--grey-0);
        font-weight: var(--font-medium);
      }

      input {
        height: 48px;
        padding-inline: 0.6rem;
        box-sizing: border-box;
        border: 1.5px solid var(--grey-5);
        border-radius: var(--input-border);
        color: var(--grey-3);
        font-size: var(--font-body-1);
        outline: none;
      }

      textarea {
        height: 48px;
        padding-inline: 0.6rem;
        box-sizing: border-box;
        border: 1.5px solid var(--grey-5);
        border-radius: var(--input-border);
        color: var(--grey-3);
        font-size: var(--font-body-1);
        outline: none;
      }
    }

    button {
      margin: 0 auto;
    }
  }
`;

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  fieldset {
    width: 48%;

    input {
      width: 100%;
    }
  }
`;

const StyledDinamicInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  button {
    align-self: end;
    background-color: transparent;
    border: none;

    svg {
      fill: var(--brand-3);
      width: 1.5rem;
      height: 1.5rem;

      :hover {
        fill: var(--brand-1);
      }
    }
  }
`;

export { StyledCreateAd, StyledInputContainer, StyledDinamicInput };
