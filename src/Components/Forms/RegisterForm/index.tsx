import { useUserContext } from "../../../Hooks";
import Button from "../../Buttons";
import Input from "../../Inputs/ Input";
import InputPass from "../../Inputs/InputsPass";
import StyledDiv from "./style";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TUserRegisterData, userSchema } from "./validator";

const FormRegister = () => {
  const { userRegister } = useUserContext();

  const { register, handleSubmit } = useForm<TUserRegisterData>({
    resolver: zodResolver(userSchema),
  });

  const submit: SubmitHandler<TUserRegisterData> = async (data) => {
    userRegister(data);
  };
  return (
    <>
      <StyledDiv>
        <h2>Cadastro</h2>
        <p>Informações pessoais</p>
        <form>
          <Input
            id="firstName"
            label="Nome"
            type="text"
            placeholder="Digite seu primeiro nome..."
            {...register("firstName")}
          />
          <Input
            id="lastName"
            label="Nome"
            type="text"
            placeholder="Digite seu último nome..."
            {...register("lastName")}
          />
          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="Digite seu e-mail..."
            {...register("email")}
          />
          <Input
            id="cpf"
            label="CPF"
            type="number"
            placeholder="000.000.000-00"
            {...register("cpf")}
          />
          <Input
            id="cellphone"
            label="Celular"
            type="tel"
            placeholder="(DDD) 90000-0000"
            {...register("cellphone")}
          />
          <Input
            id="birthdate"
            label="Data de Nascimento"
            type="date"
            placeholder="00/00/00"
          />
          <Input
            id="description"
            label="Descrição"
            type="text"
            placeholder="Digite descrição..."
            {...register("description")}
          />

          <p>Informações de endereço</p>

          <Input id="cep" label="CEP" type="number" placeholder="00000.000" />

          <Input
            id="state"
            label="Estado"
            type="text"
            placeholder="Digitar Estado"
            {...register("address")}
          />

          <Input
            id="city"
            label="Cidade"
            type="text"
            placeholder="Digitar Cidade"
            {...register("address.city")}
          />

          <Input id="street" label="Rua" placeholder="Endereço..." />

          <div className="address">
            <Input
              id="addressNumber"
              label="Número"
              placeholder="Digitar número"
              {...register("address.addressNumber")}
            />

            <Input
              id="addressComplement"
              label="Complemento"
              type="text"
              placeholder="Ex: apart 307"
              {...register("address.addressComplement")}
            />
          </div>

          <p>Tipo de conta</p>

          <div className="btnRole">
            <Button $background="brand-2" $width={4} type="button">
              Comprador
            </Button>
            <Button
              $background="grey-8"
              $width={4}
              $border
              $color="grey-0"
              type="button"
            >
              Anunciante
            </Button>
          </div>

          <InputPass
            id="password"
            label="Senha"
            placeholder="Digite sua senha..."
            {...register("password")}
          />

          <InputPass
            id="confirmPass"
            label="Confirmar Senha"
            placeholder="Confirme sua senha..."
          />

          <Button $background="brand-2" $width={6} type="submit">
            Finalizar cadastro
          </Button>
        </form>
      </StyledDiv>
    </>
  );
};

export default FormRegister;
