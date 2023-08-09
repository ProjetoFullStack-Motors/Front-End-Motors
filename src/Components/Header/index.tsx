import Menu from "./Menu";
import { StyledHeader } from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <h1>
        Motors <span>shop</span>
      </h1>
      <Menu />
    </StyledHeader>
  );
};

export default Header;
