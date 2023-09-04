import { StyledSaleComments } from "./style";
import { useCarContext, useUserContext } from "../../Hooks";
import SaleCommentCard from "./SaleCommentCard";
import { Button, UserAvatar } from "../index";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TCreateComment, createCommentSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";

const SaleComments = () => {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const { createCommentSaleAd, saleFounded } = useCarContext();
  const { id } = useParams();

  const { comments } = saleFounded!;

  const postSuggestions = [
    "Gostei muito!",
    "Incrível",
    "Recomendarei para meus amigos!",
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<TCreateComment>({
    resolver: zodResolver(createCommentSchema),
    defaultValues: {
      comment: "",
    },
  });

  const onSubmit = (data: { comment: string }) => {
    createCommentSaleAd(id!, data);
    setValue("comment", "");
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
            {...register("comment")}></textarea>
          {user ? (
            <Button className="post-button" type="submit">
              Comentar
            </Button>
          ) : (
            <Button
              className="post-button"
              onClick={() => navigate("/register")}
              type="button">
              Comentar
            </Button>
          )}
        </form>
        {errors && errors.comment ? <p>{errors.comment.message}</p> : null}
        <div className="message-suggestions">
          {postSuggestions.map((suggestion, index) => (
            <span key={index} onClick={() => setValue("comment", suggestion)}>
              {suggestion}
            </span>
          ))}
        </div>
      </div>
    </StyledSaleComments>
  );
};

export default SaleComments;
