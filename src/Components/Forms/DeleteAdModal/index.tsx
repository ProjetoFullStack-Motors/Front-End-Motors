import { useCarContext, useModal } from "../../../Hooks";
import Button from "../../Buttons";
import { StyledDeleteAd } from "./style";

const DeleteAdModal = () => {
  const { closeModal } = useModal();
  const { deleteSalesAd, setEditSale, editSale } = useCarContext();
  const deleteAd = () => {
    deleteSalesAd(editSale!.id);
    setEditSale(null);
    closeModal();
  };

  console.log(editSale);

  return (
    <StyledDeleteAd>
      <h2>Tem certeza que deseja excluir esse anúncio ?</h2>
      <p>Essa ação não pode ser desfeita.</p>
      <div>
        <Button
          $background="grey-5"
          $color="grey-2"
          type="button"
          $width={9}
          $maxWidth={10}
          onClick={closeModal}
        >
          Cancelar
        </Button>
        <Button
          $background="alert-2"
          $color="alert-1"
          type="submit"
          $width={4}
          onClick={deleteAd}
        >
          Sim, excluir o anúncio
        </Button>
      </div>
    </StyledDeleteAd>
  );
};

export default DeleteAdModal;
