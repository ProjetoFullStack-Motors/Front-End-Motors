import styled from "styled-components";

const StyledDeleteProfileModal = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  gap: 1.5rem;

  h2 {
    color: var(--grey-0);
    font-size: var(--font-heading-6);
  }

  p {
    color: var(--grey-2);
    font-size: var(--font-body-1);
    line-height: 170%;
  }
`;

const StyledDeleteModalButtons = styled.div`
  display: flex;
  gap: 0.4rem;
  justify-content: end;
  width: 100%;
`;

export { StyledDeleteProfileModal, StyledDeleteModalButtons };
