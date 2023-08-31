import { useFieldArray, useForm } from "react-hook-form";
import { useCarContext, useModal } from "../../../Hooks";
import { TEditAd, editAdSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  StyledCreateAd,
  StyledDinamicInput,
  StyledInputContainer,
} from "../CreateAdForm/style";
import Select from "../../Select";
import Input from "../../Inputs/ Input";
import Textarea from "../../Textarea";
import Button from "../../Buttons";
import { AiFillDelete } from "react-icons/ai";

const EditAdForm = () => {
  const { closeModal, setModal } = useModal();

  const {
    brands,
    models,
    selectedBrand,
    handleBrandSelect,
    handleModelSelect,
    model,
    detectFuel,
    isGoodPrice,
    editSale,
  } = useCarContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<TEditAd>({
    resolver: zodResolver(editAdSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "imgUrlPlus",
  });

  const onSubmitForm = (data: TEditAd) => {};

  return (
    <StyledCreateAd>
      <h2>Informações do veículo</h2>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <Select
          arr={brands!}
          id="brand"
          title="Marca"
          selectValue={editSale!.brand}
          callback={handleBrandSelect}
        />

        <Select
          arr={models!}
          id="model"
          title="Modelo"
          selectValue={editSale!.model}
          itemKey="name"
          callback={handleModelSelect}
          isModel
        />
        <StyledInputContainer>
          <Input id="year" label="Ano" disabled placeholder="Ex: 2023" />
          <Input
            id="engine"
            label="Combustível"
            disabled
            placeholder="Ex: flex"
          />
        </StyledInputContainer>
        <StyledInputContainer>
          <Input
            id="mileage"
            label="Quilometragem"
            {...register("mileage")}
            errors={errors.mileage}
            placeholder="Ex: 10000"
          />
          <Input
            id="color"
            label="Cor"
            {...register("color")}
            errors={errors.color}
            placeholder="Ex: preto"
          />
        </StyledInputContainer>
        <StyledInputContainer>
          <Input
            id="fipePrice"
            label="Preço tabela FIPE"
            // value={
            //   model
            //     ? model.value.toLocaleString("pt-br", {
            //         style: "currency",
            //         currency: "BRL",
            //       })
            //     : ""
            // }
            placeholder="Ex: R$ 200.000,00"
            disabled
          />
          <Input
            id="price"
            label="Preço"
            {...register("price")}
            errors={errors.price}
            placeholder="Ex: 100000"
          />
        </StyledInputContainer>
        <Textarea
          id="description"
          label="Descrição"
          {...register("description")}
          errors={errors.description}
          placeholder="Escreva a descrição do carro"
        />
        <Input
          id="imgUrl"
          label="Imagem de capa"
          {...register("imgUrl")}
          errors={errors.imgUrl}
          placeholder="Ex: https://image.com"
        />
        <Input
          id="imgUrl2"
          label="1ª imagem da galeria"
          {...register("imgUrl2")}
          errors={errors.imgUrl2}
          placeholder="Ex: https://image.com"
        />
        <Input
          id="imgUrl3"
          label="2ª imagem da galeria"
          {...register("imgUrl3")}
          errors={errors.imgUrl3}
          placeholder="Ex: https://image.com"
        />

        <Button
          type="button"
          $background="brand-4"
          $color="brand-1"
          $width={8}
          onClick={() => append({ url: "" })}
        >
          Adicionar campo para imagem da galeria
        </Button>

        {fields.map((field, index) => {
          return (
            <StyledDinamicInput key={field.id}>
              <Input
                id={`imgUrlPlus-${index}`}
                label="Imagem extra"
                {...register(`imgUrlPlus.${index}.url`)}
                errors={errors.imgUrlPlus?.[index]?.root!}
                placeholder="Ex: https://image.com"
              />

              <button type="button" onClick={() => remove(index)}>
                <AiFillDelete />
              </button>
            </StyledDinamicInput>
          );
        })}

        <StyledInputContainer>
          <Button
            $background="grey-5"
            $color="grey-2"
            $width={7}
            onClick={() => setModal("Excluir anúncio")}
          >
            Excluir anúncio
          </Button>
          <Button
            type="submit"
            $background="brand-1"
            $color="grey-9"
            $width={7}
          >
            Salvar alterações
          </Button>
        </StyledInputContainer>
      </form>
    </StyledCreateAd>
  );
};

export default EditAdForm;
