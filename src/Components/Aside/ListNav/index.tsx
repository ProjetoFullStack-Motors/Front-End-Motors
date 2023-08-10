import { useRef } from "react";
import { useCarContext } from "../../../Hooks";
import TListNavProps from "./@types";
import NavItem from "./NavItems";
import { StyledNavList } from "./style";

const ListNav = ({ saleKey, name }: TListNavProps) => {
  const { allCars } = useCarContext();
  const unwantedKeys = [
    "description",
    "created_at",
    "id",
    "mileage",
    "isGoodPrice",
    "price",
    "seller",
    "salesImages",
  ];

  const uniqueItems = new Set(
    allCars.map((item) => {
      if (!unwantedKeys.includes(saleKey)) {
        return item[saleKey];
      }
    })
  );

  let clickedRef = useRef<any>(null);

  const handleClickRef = () => {
    clickedRef.current?.click();
  };

  const uniqueItemsArray = Array.from(uniqueItems) as Array<string | number>;

  if (uniqueItemsArray.every((item) => typeof item == "number")) {
    uniqueItemsArray.sort((a, b) => Number(b) - Number(a));
  } else {
    uniqueItemsArray.sort();
  }

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
