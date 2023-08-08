import { useState } from "react";
import ProfileSettings from "./ProfileSettings";
import { StyledMenu } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledMenu>
      <button onClick={() => setOpen(!open)}>
        {open ? <AiOutlineClose size={30} /> : <FaBars size={25} />}
      </button>
      <div onClick={() => setOpen(!open)}>
        <p>123</p>
        <span>Nome Usuário</span>
      </div>
      <ProfileSettings open={open} />
    </StyledMenu>
  );
};

export default Menu;
