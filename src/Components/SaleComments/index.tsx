import { StyledSaleComments } from "./style";
import { useUserContext } from "../../Hooks";
import SaleCommentCard from "./SaleCommentCard";
import { Button, UserAvatar } from "../index";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SaleComments = () => {
    const navigate = useNavigate();
    const { user, comments, readCommentSaleAd } = useUserContext();
    const [defaultComment, setDefautComment] = useState<string>("");
    const { id } = useParams();

    useEffect(() => {
        readCommentSaleAd(id!);
    }, []);

    const postSuggestions = [
        "Gostei muito!",
        "Incrível",
        "Recomendarei para meus amigos!",
    ];

    return (
        <StyledSaleComments>
            <div className="comments-section">
                <h2>Comentários</h2>
                {comments.length == 0 ? (
                    <p>
                        Esse anúncio ainda não possui nenhum comentário, seja o
                        primeiro a comentar!
                    </p>
                ) : (
                    <ul className="comments-list">
                        {comments.map((comment) => (
                            <SaleCommentCard
                                comment={comment}
                                key={comment.created_at}
                            />
                        ))}
                    </ul>
                )}
            </div>

            <div className="comments-post">
                {user && (
                    <div className="user-header">
                        <UserAvatar
                            username={`${user?.firstName} ${user?.lastName}`}
                            img={user?.userImage}
                        />
                        <h3 className="username">{`${user?.firstName} ${user?.lastName}`}</h3>
                    </div>
                )}

                <form className="message-container">
                    <textarea
                        className="message-area"
                        defaultValue={defaultComment}
                    ></textarea>
                    {user ? (
                        <Button className="post-button">Comentar</Button>
                    ) : (
                        <Button
                            className="post-button"
                            onClick={() => navigate("/register")}
                        >
                            Comentar
                        </Button>
                    )}
                </form>
                <div className="message-suggestions">
                    {postSuggestions.map((suggestion, index) => (
                        <span
                            key={index}
                            onClick={() => setDefautComment(suggestion)}
                        >
                            {suggestion}
                        </span>
                    ))}
                </div>
            </div>
        </StyledSaleComments>
    );
};

export default SaleComments;
