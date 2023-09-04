import styled from "styled-components";

const StyledSelect = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  max-width: 100%;

  label {
    font-size: var(--font-body-2);
    color: var(--grey-0);
    font-weight: var(--font-medium);
  }

  select {
    height: 48px;
    max-width: 100%;
    box-sizing: border-box;
    border: 1.5px solid var(--grey-5);
    border-radius: var(--input-border);
    color: var(--grey-3);
    font-size: var(--font-body-1);
    outline: none;
    cursor: pointer;
  }
`;

export { StyledSelect };
