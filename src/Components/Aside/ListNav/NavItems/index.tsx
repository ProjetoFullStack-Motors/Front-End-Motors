import { TNavItemProps } from "./@types";
import StyledNavItem from "./style";
import { useCarContext } from "../../../../Hooks";
import { ForwardedRef, forwardRef, useState, useEffect } from "react";

const NavItem = forwardRef(
  (
    { title, itemKey, handleClickRef }: TNavItemProps,
    ref: ForwardedRef<any>
  ) => {
    const { handleClick, setIsSearching, isSearching } = useCarContext();

    useEffect(() => {
      if (!isSearching) {
        setClicked(false);
      }
    }, [isSearching]);

    const [clicked, setClicked] = useState(false);

    const click = () => {
      handleClickRef();

      handleClick(String(itemKey), title);

      setClicked(!clicked);
    };

    return (
      <StyledNavItem onClick={click}>
        {clicked ? (
          <p className="pTrue" ref={ref}>
            {title}
          </p>
        ) : (
          <p
            className="pFalse"
            onClick={() => {
              setIsSearching(true);
            }}
          >
            {title}
          </p>
        )}
      </StyledNavItem>
    );
  }
);

export default NavItem;
