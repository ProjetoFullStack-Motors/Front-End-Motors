import { Link } from "react-router-dom";
import { TMenuProps } from "../@types";
import {
  HeaderHomeBackground,
  StyleAccessButtons,
  StyleAccessButtonsMobile,
} from "./style";

const AccessButtons = ({ open, menuRef }: TMenuProps) => {
  return (
    <>
      <StyleAccessButtons open={open}>
        <Link to={"/login"}>Fazer login</Link>
        <Link to={"/register"}>Cadastrar</Link>
      </StyleAccessButtons>
      <StyleAccessButtonsMobile open={open} ref={menuRef}>
        <Link to={"/login"}>Fazer login</Link>
        <Link to={"/register"}>Cadastrar</Link>
      </StyleAccessButtonsMobile>
      {open && <HeaderHomeBackground />}
    </>
  );
};

export default AccessButtons;
