import { StyledSaleComments } from "./style";
import { comments } from "./mock";
import { useUserContext } from "../../Hooks";
import SaleCommentCard from "./SaleCommentCard";

const SaleComments = () => {
    const { user } = useUserContext();

    return (
        <StyledSaleComments>
            <div className="comments-section">
                <h2>Comentários</h2>
                <ul className="comments-list">
                    {comments.map((comment) => (
                        <SaleCommentCard comment={comment} />
                    ))}
                </ul>
            </div>
        </StyledSaleComments>
    );
};

export default SaleComments;
