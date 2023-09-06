import Input from "../../Inputs/ Input";
import Textarea from "../../Textarea";
import Button from "../../Buttons/index";
import { useForm } from "react-hook-form";
import { TEditProfile, editProfileSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useModal, useUserContext } from "../../../Hooks";
import { StyledButtonsContainer, StyledEditProfileForm } from "./style";
import InputPass from "../../Inputs/InputsPass";

const EditOrDeleteProfileForm = () => {
  const { user, updateUserInformation } = useUserContext();

  const { setModal, closeModal } = useModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TEditProfile>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      birthdate: String(user!.birthdate),
    },
  });

  const onSubmitForm = (data: TEditProfile) => {
    const cleanedData = Object.fromEntries(
      Object.entries(data).filter(([_key, value]) => value !== "")
    );

    updateUserInformation(user?.id!, cleanedData);

    closeModal();
  };

  return (
    <StyledEditProfileForm>
      <h2>Informações pessoais</h2>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <Input
          id="firstName"
          label="Primeiro Nome"
          {...register("firstName")}
          placeholder={`${user?.firstName}`}
          errors={errors.firstName}
        />
        <Input
          id="lastName"
          label="Sobrenome"
          {...register("lastName")}
          placeholder={`${user?.lastName}`}
          errors={errors.lastName}
        />
        <Input
          id="email"
          label="Email"
          {...register("email")}
          placeholder={user?.email}
          errors={errors.email}
        />
        <div className="btnSearchPass">
        <InputPass
          id="password"
          label="Mudar senha"
          {...register("password")}
          placeholder="Digite sua nova senha"
          errors={errors.password}
        />
        </div>
        <Input
          id="cpf"
          label="CPF"
          {...register("cpf")}
          placeholder={user?.cpf}
          errors={errors.cpf}
        />
        <Input
          id="cellphone"
          label="Celular"
          {...register("cellphone")}
          placeholder={user?.cellphone}
          errors={errors.cellphone}
        />
        <Input
          id="birthdate"
          label="Data de nascimento"
          type="date"
          {...register("birthdate")}
          errors={errors.birthdate}
        />
        <Textarea
          id="description"
          label="Descrição"
          {...register("description")}
          placeholder={user?.description}
          errors={errors.description}
        />
        <StyledButtonsContainer>
          <Button
            $background="grey-5"
            $color="grey-2"
            type="button"
            onClick={closeModal}
            $width={9}
            $maxWidth={10}
          >
            Cancelar
          </Button>
          <Button
            $background="alert-2"
            $color="alert-1"
            type="button"
            $width={9}
            $maxWidth={10}
            onClick={() => setModal("Excluir perfil")}
          >
            Excluir Perfil
          </Button>
          <Button $color="grey-9" type="submit" $width={9} $maxWidth={10}>
            Salvar alterações
          </Button>
        </StyledButtonsContainer>
      </form>
    </StyledEditProfileForm>
  );
};

export default EditOrDeleteProfileForm;
