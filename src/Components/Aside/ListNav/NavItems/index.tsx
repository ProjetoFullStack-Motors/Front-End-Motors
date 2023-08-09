import { TNavItemProps } from "./@types";
import StyledNavItem from "./style";
import { useCarContext } from "../../../../Hooks";

const NavItem = ({ title, itemKey }: TNavItemProps) => {
  const { handleClick } = useCarContext();

  return (
    <StyledNavItem onClick={() => handleClick(String(itemKey), title)}>
      <p>{title}</p>
    </StyledNavItem>
  );
};

export default NavItem;
