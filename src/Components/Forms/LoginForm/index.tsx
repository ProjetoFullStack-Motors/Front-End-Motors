import Input from "../../Inputs/ Input";
import { StyledDiv, StyledDivPassword } from "./style";
import Button from "../../Buttons";
import InputPass from "../../Inputs/InputsPass";
import { SubmitHandler, useForm } from "react-hook-form";
import schema, { TLoginData } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "../../../Providers";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../../Hooks";

const LoginForm = () => {
  const { userLogin } = useContext(UserContext);
  const { setModal } = useModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginData>({
    resolver: zodResolver(schema),
  });

  const submit: SubmitHandler<TLoginData> = async (data) => {
    userLogin(data);
  };

  const navigate = useNavigate();

  const BtnSignup = () => {
    navigate("/register");
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
            errors={errors.email}
          />
          <InputPass
            id="password"
            label="Senha"
            placeholder="Digite sua senha..."
            {...register("password")}
            errors={errors.password}
          />

          <StyledDivPassword>
            <button type="button" onClick={() => setModal("Recuperar senha")}>
              Esqueci minha senha
            </button>
          </StyledDivPassword>

          <Button
            className="btnEntrar"
            $background="brand-2"
            $width={6}
            type="submit">
            Entrar
          </Button>
        </form>

        <p>Ainda não possui conta?</p>
        <Button
          $background="white"
          $width={6}
          $color="grey-0"
          $border
          onClick={() => BtnSignup()}>
          Cadastrar
        </Button>
      </StyledDiv>
    </>
  );
};

export default LoginForm;
