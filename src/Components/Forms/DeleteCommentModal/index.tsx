import { useCarContext, useModal } from "../../../Hooks";
import Button from "../../Buttons/index";
import { StyledDeleteComment } from "./style";

const DeleteCommentModal = () => {
  const { comment, deleteCommentSaleAd, setComment } = useCarContext();
  const { closeModal } = useModal();

  const closeButton = () => {
    closeModal();
    setComment(null);
  };

  const deleteComment = () => {
    deleteCommentSaleAd(comment!.id);
    closeModal();
    setComment(null);
  };
  return (
    <StyledDeleteComment>
      <h2>Tem certeza que você deseja excluir esse comentário ?</h2>
      <p>"{comment?.comment}"</p>

      <div>
        <Button onClick={closeButton} $background="grey-3" $width={9}>
          Cancelar
        </Button>
        <Button
          onClick={deleteComment}
          $background="alert-2"
          $color="alert-1"
          $width={10}
        >
          Sim, excluir comentário
        </Button>
      </div>
    </StyledDeleteComment>
  );
};

export default DeleteCommentModal;
