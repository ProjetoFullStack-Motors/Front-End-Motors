import { StyledSaleCommentCard } from "./style";
import { TSaleCommentCardProps } from "./@types";
import { UserAvatar } from "../../index";

const SaleCommentCard = ({ comment }: TSaleCommentCardProps) => {
    const { author, message, created_at } = comment;
    return (
        <StyledSaleCommentCard>
            <div className="comment-header">
                <UserAvatar
                    username={`${author.firstName} ${author.lastName}`}
                />
                <h3 className="comment-author">{`${author.firstName} ${author.lastName}`}</h3>
                <span>•</span>
                <span className="comment-created-at">Há {created_at} dias</span>
            </div>
            <p className="comment-message">{message}</p>
        </StyledSaleCommentCard>
    );
};

export default SaleCommentCard;
