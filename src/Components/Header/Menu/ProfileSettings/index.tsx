import { TMenuProps } from "../@types";
import { StyledProfileSettings } from "./style";

import { AiOutlineClose } from "react-icons/ai";
import { Button, UserAvatar } from "../../..";
import { HeaderMenuBackground } from "../../style";
import { useKeyDown, useModal, useUserContext } from "../../../../Hooks";
import { useLocation, useNavigate } from "react-router-dom";

const ProfileSettings = ({ open, setOpen, menuRef }: TMenuProps) => {
  const { userName, logoutUser, user } = useUserContext();

  const { setModal } = useModal();

  const navigate = useNavigate();

  const location = useLocation();

  const buttonRef = useKeyDown("Escape", (element: any) => {
    element.click();
  });

  return (
    <>
      <div onClick={() => setOpen!(true)}>
        <UserAvatar username={`${userName!.firstName} ${userName!.lastName}`} />
        <span>{`${userName!.firstName} ${userName!.lastName}`}</span>
      </div>

      <StyledProfileSettings open={open} ref={menuRef}>
        <section>
          <UserAvatar
            username={`${userName!.firstName} ${userName!.lastName}`}
          />
          <span>{`${userName!.firstName} ${userName!.lastName}`}</span>
          <span
            onClick={() => setOpen!(false)}
            ref={buttonRef}
            className="menu-close">
            <AiOutlineClose size={25} />
          </span>
        </section>
        <Button
          $background="transparent"
          $color="1"
          onClick={() => setModal("Editar perfil")}>
          Editar perfil
        </Button>
        <Button
          $background="transparent"
          $color="1"
          onClick={() => setModal("Editar endereço")}>
          Editar endereço
        </Button>
        {user &&
          user?.role === "seller" &&
          location.pathname !== "/dashboard" && (
            <Button
              $background="transparent"
              $color="1"
              onClick={() => navigate("/dashboard")}>
              Meus anúncios
            </Button>
          )}

        <Button
          $border
          $color="1"
          $background="transparent"
          className="logout"
          onClick={() => logoutUser()}>
          Sair
        </Button>
      </StyledProfileSettings>

      {open && <HeaderMenuBackground />}
    </>
  );
};

export default ProfileSettings;
