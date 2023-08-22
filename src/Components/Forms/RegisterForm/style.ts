import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  height: auto;
  padding-inline: 2rem;
  padding-bottom: 44px;
  margin: 0 auto;

  fieldset {
    border: none;
    padding-bottom: 24px;

    span {
      font-size: var(--font-body-2);
      color: var(--grey-2);
    }

    button {
      top: 35%;
    }
  }

  h2 {
    font-size: var(--font-heading-5);
    margin-top: 44px;
    margin-bottom: 32px;
    font-weight: var(--font-medium);
  }

  p {
    font-size: var(--font-body-2);
    margin-bottom: 24px;
    font-weight: var(--font-medium);
  }

  input {
    width: 100%;
    display: flex;
    height: 48px;
    margin-top: 12px;
    padding-left: 15px;
  }

  .btnRole,
  .address {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  .btnRole {
    margin-bottom: 28px;
  }

  .button {
    float: left;
    margin: 0 5px 0 0;
    width: var(--button-width-6);
    height: 40px;
    position: relative;
    cursor: pointer;
  }
  .button label,
  .button input {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .button input[type="radio"] {
    opacity: 0.011;
    z-index: 100;
    cursor: pointer;
  }

  .button input[type="radio"]:checked + label {
    color: var(--grey-10);
    background-color: var(--brand-1);
    border-radius: var(--button-border);
    border: none;
    cursor: pointer;
  }

  .button label {
    cursor: pointer;
    z-index: 90;
    line-height: 1.8em;
    cursor: pointer;
    color: var(--grey-1);
    border: 2px solid var(--grey-3);
    border-radius: var(--button-border);
  }

  .input__cep--container {
    display: flex;
    align-items: center;
    width: 100%;

    fieldset {
      width: 80%;
      height: auto;

      input {
        height: 48px;
        margin: 0;
      }
    }

    button {
      width: 20%;
      height: 48px;

      padding: 0;
      height: auto;
    }
  }

  /* .buyerBtn {
    color: var(--grey-10);
    background-color: var(--brand-1);
    border-radius: var(--button-border);
    cursor: pointer;
  }

  .sellerBtn {
    color: var(--grey-1);
    border: 2px solid var(--grey-3);
    border-radius: var(--button-border);
  } */

  @media (min-width: 769px) {
    width: 411px;
    height: auto;
    border: 1px solid var(--grey-10);
    background-color: var(--grey-10);
    margin-top: 100px;
  }
`;

export default StyledDiv;
