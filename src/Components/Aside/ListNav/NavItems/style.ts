import styled from "styled-components";

const StyledNavItem = styled.li`
  p {
    cursor: pointer;
    font-size: var(--font-heading-6);

    :hover {
      text-decoration: underline;
    }
  }

  .pFalse {
    color: var(--grey-3);
  }

  .pTrue {
    color: var(--brand-2);
  }
`;

export default StyledNavItem;
