import { useContext, useState } from "react";
import ProfileSettings from "./ProfileSettings";
import { StyledMenu } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import AccessButtons from "./AccessButtons";
import { UserContext } from "../../../Providers/UserContext";
import { HeaderMenuBackground } from "../style";
import { UserAvatar } from "../..";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const { user } = useContext(UserContext);

  const location = useLocation();
  const { pathname } = location;

  return (
    <StyledMenu>
      <button onClick={() => setOpen(!open)}>
        {open ? <AiOutlineClose size={30} /> : <FaBars size={25} />}
      </button>

      {pathname === "/" ? (
        <>
          <div onClick={() => setOpen(true)}>
            <UserAvatar username={`${user.firstName} ${user.lastName}`} />
            <span>{`${user.firstName} ${user.lastName}`}</span>
          </div>
          <ProfileSettings open={open} setOpen={setOpen} />
        </>
      ) : (
        <AccessButtons />
      )}
      {open && <HeaderMenuBackground />}
    </StyledMenu>
  );
};

export default Menu;
