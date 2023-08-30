import styled from "styled-components";

const StyledEditForm = styled.div`
  margin-top: 2rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    fieldset {
      border: none;

      width: 100%;

      textarea {
        width: 100%;
        padding-inline: 1rem;
        padding-block: 0.5rem;
        box-sizing: border-box;
        height: 200px;
        font-size: var(--font-body-1);
        font-family: "Lexend", "sans-serif";
      }
    }

    div {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      width: 100%;
      justify-content: flex-end;
    }
  }
`;

export { StyledEditForm };
