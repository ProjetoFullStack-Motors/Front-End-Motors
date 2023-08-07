import { MenuProps } from "../@types";
import { StyledProfileSettings } from "./style";

const ProfileSettings = ({ open }: MenuProps) => {
  return (
    <StyledProfileSettings open={open}>
      <section>
        <p>123</p>
        <span>Nome Usuário</span>
      </section>
      <button>Editar perfil</button>
      <button>Sair</button>
    </StyledProfileSettings>
  );
};

export default ProfileSettings;
