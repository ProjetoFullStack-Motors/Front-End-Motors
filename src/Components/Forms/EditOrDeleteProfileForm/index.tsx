import Input from "../../Inputs/ Input";
import Textarea from "../../Textarea";
import Button from "../../Buttons/index";
import { useForm } from "react-hook-form";
import { TEditProfile, editProfileSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useModal, useUserContext } from "../../../Hooks";
import { StyledButtonsContainer, StyledEditProfileForm } from "./style";

const EditOrDeleteProfileForm = () => {
  const { user } = useUserContext();

  const { setModal } = useModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TEditProfile>({
    // resolver: zodResolver(editProfileSchema),
    defaultValues: {
      birthdate: user!.birthdate,
    },
  });

  const onSubmitForm = (data: TEditProfile) => {
    const cleanedData = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );

    console.log(data);
  };

  return (
    <StyledEditProfileForm>
      <h2>Informações pessoais</h2>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <Input
          id="name"
          label="Nome"
          {...register("name")}
          placeholder={`${user?.firstName} ${user?.lastName}`}
        />
        <Input
          id="email"
          label="Email"
          {...register("email")}
          placeholder={user?.email}
        />
        <Input
          id="cpf"
          label="CPF"
          {...register("cpf")}
          placeholder={user?.cpf}
        />
        <Input
          id="cellphone"
          label="Celular"
          {...register("cellphone")}
          placeholder={user?.cellphone}
        />
        <Input
          id="birthdate"
          label="Data de nascimento"
          type="date"
          {...register("birthdate")}
        />
        <Textarea
          id="description"
          label="Descrição"
          {...register("description")}
          placeholder={user?.description}
        />
        <StyledButtonsContainer>
          <Button
            $background="grey-5"
            $color="grey-2"
            type="button"
            onClick={() => setModal(null)}
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
