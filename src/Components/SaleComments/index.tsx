import { StyledSaleComments } from "./style";
import { useUserContext } from "../../Hooks";
import SaleCommentCard from "./SaleCommentCard";
import { Button, UserAvatar } from "../index";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TCreateComment, createCommentSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";

const SaleComments = () => {
  const navigate = useNavigate();
  const { user, comments, readCommentSaleAd, createCommentSaleAd } =
    useUserContext();
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCreateComment>({
    resolver: zodResolver(createCommentSchema),
  });

  const onSubmit = (data: { comment: string }) => {
    createCommentSaleAd(id!, data);
    setDefautComment("");
  };

  return (
    <StyledSaleComments>
      <div className="comments-section">
        <h2>Comentários</h2>
        {comments.length == 0 ? (
          <p>
            Esse anúncio ainda não possui nenhum comentário, seja o primeiro a
            comentar!
          </p>
        ) : (
          <ul className="comments-list">
            {comments.map((comment) => (
              <SaleCommentCard comment={comment} key={comment.created_at} />
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
        )}{" "}
        <form className="message-container" onSubmit={handleSubmit(onSubmit)}>
          <textarea
            className="message-area"
            defaultValue={defaultComment}
            {...register("comment")}
          ></textarea>
          {errors && errors.comment ? <p>{errors.comment.message}</p> : null}
          {user ? (
            <Button className="post-button" type="submit">
              Comentar
            </Button>
          ) : (
            <Button
              className="post-button"
              onClick={() => navigate("/register")}
              type="button"
            >
              Comentar
            </Button>
          )}
        </form>
        <div className="message-suggestions">
          {postSuggestions.map((suggestion, index) => (
            <span key={index} onClick={() => setDefautComment(suggestion)}>
              {suggestion}
            </span>
          ))}
        </div>
      </div>
    </StyledSaleComments>
  );
};

export default SaleComments;
