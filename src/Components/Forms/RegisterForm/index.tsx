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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUserRegisterData>({
    resolver: zodResolver(userSchema),
  });

  const submit: SubmitHandler<TUserRegisterData> = async (data) => {
    const newData = {
      ...data,
      address: {
        ...data.address,
        addressNumber: Number(data.address.addressNumber),
      },
    };

    console.log(newData);
    userRegister(newData);
  };
  return (
    <>
      <StyledDiv>
        <h2>Cadastro</h2>
        <p>Informações pessoais</p>
        <form onSubmit={handleSubmit(submit)}>
          <Input
            id="firstName"
            label="Primeiro Nome"
            type="text"
            placeholder="Digite seu primeiro nome..."
            {...register("firstName")}
            errors={errors.firstName}
          />
          <Input
            id="lastName"
            label="Último Nome"
            type="text"
            placeholder="Digite seu último nome..."
            {...register("lastName")}
            errors={errors.lastName}
          />
          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="Digite seu e-mail..."
            {...register("email")}
            errors={errors.email}
          />
          <Input
            id="cpf"
            label="CPF"
            type="number"
            placeholder="000.000.000-00"
            {...register("cpf")}
            errors={errors.cpf}
          />
          <Input
            id="cellphone"
            label="Celular"
            type="tel"
            placeholder="(DDD) 90000-0000"
            {...register("cellphone")}
            errors={errors.cellphone}
          />
          <Input
            id="birthdate"
            label="Data de Nascimento"
            type="date"
            placeholder="00/00/00"
            {...register("birthdate")}
            errors={errors.birthdate}
          />
          <Input
            id="description"
            label="Descrição"
            type="text"
            placeholder="Digite descrição..."
            {...register("description")}
            errors={errors.description}
          />

          <p>Informações de endereço</p>

          <Input
            id="cep"
            label="CEP"
            type="number"
            placeholder="00000.000"
            {...register("address.cep")}
            errors={errors.address?.cep}
          />

          <Input
            id="state"
            label="Estado"
            type="text"
            placeholder="Digitar Estado"
            {...register("address.state")}
            errors={errors.address?.state}
          />

          <Input
            id="city"
            label="Cidade"
            type="text"
            placeholder="Digitar Cidade"
            {...register("address.city")}
            errors={errors.address?.city}
          />

          <Input
            id="street"
            label="Rua"
            placeholder="Endereço..."
            {...register("address.street")}
            errors={errors.address?.street}
          />

          <div className="address">
            <Input
              id="addressNumber"
              label="Número"
              placeholder="Digitar número"
              type="number"
              {...register("address.addressNumber")}
              errors={errors.address?.addressNumber}
            />

            <Input
              id="addressComplement"
              label="Complemento"
              type="text"
              placeholder="Ex: apart 307"
              {...register("address.addressComplement")}
              errors={errors.address?.addressComplement}
            />
          </div>

          <p>Tipo de conta</p>

          <div className="btnRole">
            <div className="button">
              <input
                type="radio"
                id="a25"
                value="seller"
                {...register("role")}
              />
              <label className="btn btn-default" htmlFor="a25">
                Vendedor
              </label>
            </div>

            <div className="button">
              <input
                type="radio"
                id="a25"
                value="buyer"
                {...register("role")}
              />
              <label className="btn btn-default" htmlFor="a25">
                Comprador
              </label>
            </div>
          </div>

          <InputPass
            id="password"
            label="Senha"
            placeholder="Digite sua senha..."
            {...register("password")}
            errors={errors.password}
          />

          <InputPass
            id="confirmPass"
            label="Confirmar Senha"
            placeholder="Confirme sua senha..."
            {...register("confirmPass")}
            errors={errors.confirmPass}
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
