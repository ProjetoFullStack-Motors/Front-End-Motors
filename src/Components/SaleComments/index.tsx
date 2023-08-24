import { StyledSaleComments } from "./style";
import { comments } from "./mock";
import { useUserContext } from "../../Hooks";
import SaleCommentCard from "./SaleCommentCard";
import { Button, UserAvatar } from "../index";

const SaleComments = () => {
  const { user } = useUserContext();

  const postSuggestions = [
    "Gostei muito!",
    "Incrível",
    "Recomendarei para meus amigos!",
  ];

  return (
    <StyledSaleComments>
      <div className="comments-section">
        <h2>Comentários</h2>
        <ul className="comments-list">
          {comments.map((comment) => (
            <SaleCommentCard comment={comment} key={comment.created_at} />
          ))}
        </ul>
      </div>
      <div className="comments-post">
        <div className="user-header">
          <UserAvatar
            username={`${user?.firstName} ${user?.lastName}`}
            img={user?.userImage}
          />
          <h3 className="username">{`${user?.firstName} ${user?.lastName}`}</h3>
        </div>

        <div className="message-container">
          <textarea className="message-area"></textarea>
          <Button className="post-button">Comentar</Button>
        </div>
        <div className="message-suggestions">
          {postSuggestions.map((suggestion, index) => (
            <span key={index}>{suggestion}</span>
          ))}
        </div>
      </div>
    </StyledSaleComments>
  );
};

export default SaleComments;
