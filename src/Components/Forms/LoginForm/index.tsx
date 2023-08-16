import Input from "../../Inputs/ Input";
import { StyledDiv, StyledBtnPassword } from "./style";
import Button from "../../Buttons";
import InputPass from "../../Inputs/InputsPass";
import { SubmitHandler, useForm } from "react-hook-form";
import schema, { TLoginData } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "../../../Providers";

const LoginForm = () => {
  const { userLogin } = useContext(UserContext);

  const { register, handleSubmit } = useForm<TLoginData>({
    resolver: zodResolver(schema),
  });

  const submit: SubmitHandler<TLoginData> = async (data) => {
    userLogin(data);
  };

  return (
    <>
      <StyledDiv>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(submit)}>
          <Input 
            id="email" 
            label="Email"
            type="email"
            placeholder="Digite seu e-mail..."
            {...register("email")}
          />
          <InputPass 
            id="password" 
            label="Senha"
            placeholder="Digite sua senha..."
            {...register("password")}
          />
            
          <StyledBtnPassword
        >
          Esqueci minha senha
        </StyledBtnPassword>
  
          <Button 
            className="btnEntrar"
            $background="brand-2"
            $width={6}
          >
            Entrar
          </Button>
        </form>

        <p>Ainda não possui conta?</p>
        <Button 
          $background="white"
          $width={6}
          $color="grey-0"
          $border
        >
          Cadastrar
        </Button>
      </StyledDiv>
    </>
  );
};

export default LoginForm;