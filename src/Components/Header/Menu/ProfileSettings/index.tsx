import { useContext } from "react";
import { MenuProps } from "../@types";
import { StyledProfileSettings } from "./style";
import { UserContext } from "../../../../Providers/UserContext";
import { Avatar } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import useOutClick from "../../../../Hooks/useOutClick";
import useKeyDown from "../../../../Hooks/useKeyDown";

const ProfileSettings = ({ open, setOpen }: MenuProps) => {
  const { user, stringAvatar } = useContext(UserContext);

  const menuRef = useOutClick(() => {
    setOpen!(false);
  });

  const buttonRef = useKeyDown("Escape", (element: any) => {
    element.click();
  });

  return (
    <StyledProfileSettings open={open} ref={menuRef}>
      <section>
        <Avatar
          className="user-img-mobile"
          {...stringAvatar(`${user.firstName} ${user.lastName}`)}
        />
        <span>{`${user.firstName} ${user.lastName}`}</span>
      </section>
      <span onClick={() => setOpen!(false)} ref={buttonRef}>
        <AiOutlineClose size={25} />
      </span>
      <button>Editar perfil</button>
      <button>Sair</button>
    </StyledProfileSettings>
  );
};

export default ProfileSettings;
