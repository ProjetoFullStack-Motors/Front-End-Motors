import { useRef } from "react";
import { useCarContext } from "../../../Hooks";
import TListNavProps from "./@types";
import NavItem from "./NavItems";
import { StyledNavList } from "./style";

const ListNav = ({ saleKey, name }: TListNavProps) => {
  const { asideFilter } = useCarContext();

  let keyArr: string[] = [];

  keyArr = asideFilter ? asideFilter[saleKey] : [];

  let clickedRef = useRef<any>(null);

  const handleClickRef = () => {
    clickedRef.current?.click();
  };

  return (
    <StyledNavList>
      <h2>{name}</h2>
      {keyArr.map((item, index) => (
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
