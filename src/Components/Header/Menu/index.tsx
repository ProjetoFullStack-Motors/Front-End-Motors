import { useState } from "react";
import ProfileSettings from "./ProfileSettings";
import { StyledMenu } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import AccessButtons from "./AccessButtons";
import { useOutClick, useUserContext } from "../../../Hooks";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const { user } = useUserContext();

  const menuRef = useOutClick(() => {
    setOpen!(false);
  });

  return (
    <StyledMenu>
      <button onClick={() => setOpen(!open)}>
        {open ? <AiOutlineClose size={30} /> : <FaBars size={25} />}
      </button>

      {user ? (
        <ProfileSettings open={open} setOpen={setOpen} menuRef={menuRef} />
      ) : (
        <AccessButtons open={open} menuRef={menuRef} />
      )}
    </StyledMenu>
  );
};

export default Menu;
