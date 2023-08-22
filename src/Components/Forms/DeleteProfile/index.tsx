import { useModal } from "../../../Hooks";
import Button from "../../Buttons/index";
import { StyledDeleteModalButtons, StyledDeleteProfileModal } from "./style";

const DeleteProfileModal = () => {
  const { setModal } = useModal();
  return (
    <StyledDeleteProfileModal>
      <h2>Tem certeza que deseja excluir sua conta ?</h2>
      <p>
        Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta
        e removerá seus dados de nossos servidores
      </p>
      <StyledDeleteModalButtons>
        <Button
          $background="grey-5"
          $color="grey-2"
          type="button"
          $width={9}
          $maxWidth={10}
          onClick={() => setModal(null)}
        >
          Cancelar
        </Button>
        <Button $background="alert-2" $color="alert-1" type="submit" $width={4}>
          Sim, excluir meu perfil
        </Button>
      </StyledDeleteModalButtons>
    </StyledDeleteProfileModal>
  );
};

export default DeleteProfileModal;
