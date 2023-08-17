import Input from "../../Inputs/ Input";
import { SubmitHandler, useForm } from "react-hook-form";
import schema, { RecoverData } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { TUserMail } from "../../../Providers/UserContext/@types";
import { useContext } from "react";
import { UserContext } from "../../../Providers";
import StyledDiv from "./style";
import Button from "../../Buttons";

const RecoverForm = () => {
  const { recoverPassword } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecoverData>({
    resolver: zodResolver(schema),
  });

  const searchSubmit: SubmitHandler<TUserMail> = async (data) => {
    recoverPassword(data);
  };

  return (
    <>
      <StyledDiv>
        <form onSubmit={handleSubmit(searchSubmit)}>
          <Input 
            id="email" 
            label="Email"
            type="email"
            placeholder="Digite seu e-mail..."
            {...register("email")}
            errors={errors.email}
          />
          
          <Button 
            className="btnEntrar"
            $background="brand-2"
            $width={6}
          >
            Enviar
          </Button>
        </form>
      </StyledDiv>  
    </>     
  );
};

export default RecoverForm;