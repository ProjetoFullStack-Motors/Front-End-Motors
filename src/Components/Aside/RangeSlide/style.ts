import styled from "styled-components";

const StyledSlider = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: var(--font-heading-4);
    color: var(--grey-1);
    font-weight: var(--font-bold);
    margin-bottom: 1rem;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h3 {
      font-size: var(--font-body-1);
      font-weight: var(--font-medium);
      color: var(--grey-3);
    }
  }
`;

export { StyledSlider };
