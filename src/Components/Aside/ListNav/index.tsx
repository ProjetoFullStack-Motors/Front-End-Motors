import { useRef } from "react";
import { useCarContext } from "../../../Hooks";
import TListNavProps from "./@types";
import NavItem from "./NavItems";
import { StyledNavList } from "./style";

const ListNav = ({ saleKey, name }: TListNavProps) => {
  const { allCars } = useCarContext();
  const uniqueItems = new Set(allCars.map((item) => item[saleKey]));
  let clickedRef = useRef<any>(null);

  const handleClickRef = () => {
    clickedRef.current?.click();
  };

  const uniqueItemsArray = Array.from(uniqueItems);
  return (
    <StyledNavList>
      <h2>{name}</h2>
      {uniqueItemsArray.map((item, index) => (
        <NavItem
          title={String(item)}
          itemKey={saleKey}
          key={index}
          ref={clickedRef}
          handleClickRef={handleClickRef}
        />
      ))}
    </StyledNavList>
  );
};

export default ListNav;
