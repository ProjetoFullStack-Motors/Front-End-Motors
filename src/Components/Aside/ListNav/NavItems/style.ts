import styled from "styled-components";

const StyledNavItem = styled.li`
  p {
    cursor: pointer;
    color: var(--grey-3);
    font-size: var(--font-heading-6);

    :hover {
      text-decoration: underline;
    }
  }
`;

export default StyledNavItem;
