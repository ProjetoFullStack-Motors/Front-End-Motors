import { styled } from "styled-components";

const StyledInputRadio = styled.fieldset`
  float: left;
  margin: 0 5px 0 0;
  width: var(--button-width-6);
  height: 40px;
  position: relative;
  cursor: pointer;

  label,
  input {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  input[type="radio"] {
    opacity: 0.011;
    z-index: 100;
    cursor: pointer;
  }

  input[type="radio"]:checked + label {
    color: var(--grey-10);
    background-color: var(--brand-1);
    border-radius: var(--button-border);
    border: none;
    cursor: pointer;
  }

  label {
    cursor: pointer;
    z-index: 90;
    line-height: 1.8em;
    cursor: pointer;
    color: var(--grey-1);
    border: 2px solid var(--grey-3);
    border-radius: var(--button-border);
  }
`;

export { StyledInputRadio };
