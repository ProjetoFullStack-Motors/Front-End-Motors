import mock from "../../../Services/mock";
import TListNavProps from "./@types";
import NavItem from "./NavItems";

const ListNav = ({ saleKey, name }: TListNavProps) => {
  const uniqueItems = new Set(mock.map((item) => item[saleKey]));

  const uniqueItemsArray = Array.from(uniqueItems);
  return (
    <ul>
      <h2>{name}</h2>
      {uniqueItemsArray.map((item, index) => (
        <NavItem title={String(item)} itemKey={saleKey} key={index} />
      ))}
    </ul>
  );
};

export default ListNav;
