import { styled } from "styled-components";

const StyledDeleteComment = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  h2 {
    font-size: var(--font-heading-6);
    color: var(--grey-1);
  }

  p {
    color: var(--grey-2);
  }

  div {
    display: flex;
    flex-direction: row;
    align-self: flex-end;
    gap: 1rem;
  }
`;

export { StyledDeleteComment };
