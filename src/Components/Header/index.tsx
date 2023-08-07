import { useLocation } from "react-router-dom";
import AccessButtons from "./AccessButtons";
import Menu from "./Menu";
import { StyledHeader } from "./style";

const Header = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <StyledHeader>
      <h1>
        Motors <span>shop</span>
      </h1>
      <Menu />
      {/* {pathname === "profile" ? <Menu /> : <AccessButtons />} */}
    </StyledHeader>
  );
};

export default Header;
