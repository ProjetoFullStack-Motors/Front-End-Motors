import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  height: auto;
  padding-inline: 2rem;
  padding-bottom: 44px;
  margin: 0 auto;

  fieldset {
    border: none;

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
    margin-bottom: 24px;
    padding-left: 15px;
  }

  .btnRole, .address {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  .btnRole {
    margin-bottom: 28px;
  }

  @media (min-width: 769px) {
    width: 411px;
    height: auto;
    border: 1px solid var(--grey-10);
    background-color: var(--grey-10);
    margin-top: 100px;
  }
`

export default StyledDiv;