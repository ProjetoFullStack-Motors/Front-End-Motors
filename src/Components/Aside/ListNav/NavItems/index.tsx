import { useContext } from "react";
import { TNavItemProps } from "./@types";
import { CarContext } from "../../../../Providers/CarContext";
import StyledNavItem from "./style";

const NavItem = ({ title, itemKey }: TNavItemProps) => {
  const { handleClick } = useContext(CarContext);

  return (
    <StyledNavItem onClick={() => handleClick(String(itemKey), title)}>
      <p>{title}</p>
    </StyledNavItem>
  );
};

export default NavItem;
