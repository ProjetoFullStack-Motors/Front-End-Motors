import { useContext } from "react";
import { TMenuProps } from "../@types";
import { StyledProfileSettings } from "./style";
import { UserContext } from "../../../../Providers/UserContext";
import { AiOutlineClose } from "react-icons/ai";
import { Button, UserAvatar } from "../../..";
import { HeaderMenuBackground } from "../../style";
import { useKeyDown } from "../../../../Hooks";

const ProfileSettings = ({ open, setOpen, menuRef }: TMenuProps) => {
  const { user } = useContext(UserContext);

  const buttonRef = useKeyDown("Escape", (element: any) => {
    element.click();
  });

  return (
    <>
      <div onClick={() => setOpen!(true)}>
        <UserAvatar username={`${user.firstName} ${user.lastName}`} />
        <span>{`${user.firstName} ${user.lastName}`}</span>
      </div>

      <StyledProfileSettings open={open} ref={menuRef}>
        <section>
          <UserAvatar username={`${user.firstName} ${user.lastName}`} />
          <span>{`${user.firstName} ${user.lastName}`}</span>
          <span
            onClick={() => setOpen!(false)}
            ref={buttonRef}
            className="menu-close">
            <AiOutlineClose size={25} />
          </span>
        </section>
        <Button $background="transparent" $color="1">
          Editar perfil
        </Button>
        <Button $border $color="1" $background="transparent">
          Sair
        </Button>
      </StyledProfileSettings>

      {open && <HeaderMenuBackground />}
    </>
  );
};

export default ProfileSettings;
