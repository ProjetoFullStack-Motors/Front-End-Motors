import { useFieldArray, useForm } from "react-hook-form";
import { useCarContext, useModal } from "../../../Hooks";
import updateAdSchema, { TEditAd } from "./validator";
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
  const { setModal } = useModal();

  const {
    brands,
    models,
    // selectedBrand,
    handleBrandSelect,
    handleModelSelect,
    // model,
    // detectFuel,
    // isGoodPrice,
    editSale,
    updateSalesAd
  } = useCarContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<TEditAd>({
    resolver: zodResolver(updateAdSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "salesImages",
  });

  const onSubmitForm = (salesAdData: TEditAd) => {
    const cleanedData: TEditAd = Object.fromEntries(
      Object.entries(salesAdData).filter(([_key, value]) => value !== "")
    );

    cleanedData ? updateSalesAd(editSale!.id, cleanedData) : null;

    console.log(cleanedData)
  };

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
        
        {editSale?.salesImages.map((img, index) => {
          return (
            <StyledDinamicInput key={`${img.id}`}>
              <Input
                id={`${img.id}`}
                label="Imagem de capa"
                {...register(`salesImages.${index}.id`)} 
                {...register(`salesImages.${index}.imageUrl`)} 
                errors={errors.salesImages?.[index]?.root!}
                placeholder="Ex: https://image.com"
              />
            </StyledDinamicInput>
          );
        })}
        
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
