import styled from "styled-components";

const StyledDiv = styled.div`
  width: 91.46%;
  height: 542px;
  padding-inline: 2rem;
  margin: 80px auto;
  position: relative;
  border: 1px solid var(--grey-10);
  background-color: var(--grey-10);

  .btnEntrar {
    margin-top: 25px;
  }

  fieldset {
    border: none;
    padding-bottom: 24px;

    span {
      font-size: var(--font-body-2);
      color: var(--grey-2);
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
    margin-top: 24px;
    margin-bottom: 24px;
    text-align: center;
    color: var(--grey-2);
  }

  input {
    width: 100%;
    display: flex;
    height: 48px;
    margin-top: 12px;
    padding-left: 15px;
  }

  @media (min-width: 769px) {
    width: 411px;
    border: 1px solid var(--grey-10);
    background-color: var(--grey-10);
    margin-top: 100px;
  }
`;

const StyledDivPassword = styled.div`
  display: flex;
  justify-content: right;

  button {
    background-color: transparent;
    color: var(--grey-2);
    font-size: var(--font-body-2);
    font-weight: var(--font-medium);
    border: none;
  }
`;

export { StyledDiv, StyledDivPassword };
