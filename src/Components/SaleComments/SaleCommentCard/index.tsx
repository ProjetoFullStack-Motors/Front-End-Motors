import { StyledSaleCommentCard } from "./style";
import { TSaleCommentCardProps } from "./@types";
import { UserAvatar } from "../../index";
import { useCarContext, useModal, useUserContext } from "../../../Hooks";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const SaleCommentCard = ({ comment }: TSaleCommentCardProps) => {
  const date = new Date();
  const diff = date.getTime() - Number(comment.created_at);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  const { user } = useUserContext();
  const { setModal } = useModal();
  const { saleFounded, setComment } = useCarContext();

  const openCommentModal = (
    event: React.MouseEvent<HTMLButtonElement>,
    title: "Editar comentário" | "Excluir comentário"
  ) => {
    const commentId: string = event.currentTarget.id;

    const commentFound = saleFounded?.comments.find(
      (comment) => comment.id === commentId
    );

    commentFound ? setComment(commentFound) : null;

    commentFound ? setModal(title) : null;
  };

  return (
    <StyledSaleCommentCard>
      <div className="comment-header">
        <UserAvatar
          username={`${comment.user.firstName} ${comment.user.lastName}`}
        />
        <h3 className="comment-author">{`${comment.user.firstName} ${comment.user.lastName}`}</h3>
        <span>•</span>
        <span className="comment-created-at">
          {days === 0 ? "Hoje" : `Há ${days} dias`}
        </span>
      </div>
      <p className="comment-message">{comment.comment}</p>
      <div className="comment-buttons">
        {comment.user.id === user?.id ? (
          <button
            id={comment.id}
            onClick={(event) => openCommentModal(event, "Editar comentário")}
          >
            <BiEdit />
          </button>
        ) : null}
        {comment.user.id === user?.id || saleFounded?.user.id === user?.id ? (
          <button
            id={comment.id}
            onClick={(event) => openCommentModal(event, "Excluir comentário")}
          >
            <MdDelete />
          </button>
        ) : null}
      </div>
    </StyledSaleCommentCard>
  );
};

export default SaleCommentCard;
