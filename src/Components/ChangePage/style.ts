import styled from "styled-components";

const StyleChangePage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  margin: 2rem auto;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    font-size: var(--font-body-1);
    font-weight: var(--font-semibold);
    color: var(--grey-1);

    span {
      color: var(--grey-4);
    }
  }

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

export { StyleChangePage };
