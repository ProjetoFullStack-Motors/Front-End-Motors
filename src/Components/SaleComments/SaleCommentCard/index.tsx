import { StyledSaleCommentCard } from "./style";
import { TSaleCommentCardProps } from "./@types";
import { UserAvatar } from "../../index";

const SaleCommentCard = ({ comment }: TSaleCommentCardProps) => {
    const date = new Date();
    const diff = date.getTime() - Number(comment.created_at);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

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
        </StyledSaleCommentCard>
    );
};

export default SaleCommentCard;
