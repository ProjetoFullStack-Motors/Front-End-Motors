import Menu from "./Menu";
import { StyledHeader } from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <div className="container navbar">
        <h1>
          Motors <span>shop</span>
        </h1>
        <Menu />
      </div>
    </StyledHeader>
  );
};

export default Header;
