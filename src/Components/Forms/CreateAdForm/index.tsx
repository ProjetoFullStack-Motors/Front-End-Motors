import Select from "../../Select";
import useModal from "../../../Hooks/useModal";
import {
  StyledCreateAd,
  StyledDinamicInput,
  StyledInputContainer,
} from "./style";
import Input from "../../Inputs/ Input";
import Textarea from "../../Textarea";
import { useFieldArray, useForm } from "react-hook-form";
import { TCreateAd, createAdSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../Buttons/index";
import { AiFillDelete } from "react-icons/ai";

const CreateAd = () => {
  const {
    brands,
    models,
    selectedBrand,
    selectedModel,
    handleBrandSelect,
    handleModelSelect,
    model,
    detectFuel,
    setModal,
  } = useModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<TCreateAd>({
    resolver: zodResolver(createAdSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "imgUrlPlus",
  });

  const onSubmitForm = (data: any) => {
    const adObj = {
      ...data,
      brand: selectedBrand,
      model: model ? model.name : models[0].name,
      year: model ? model.year : models[0].year,
      fuel: model ? detectFuel(model.fuel) : detectFuel(models[0].fuel),
      fipePrice: model ? model.value : models[0].value,
    };

    console.log(adObj);
  };

  return (
    <StyledCreateAd>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <Select
          arr={brands!}
          id="brand"
          title="Marca"
          selectValue={selectedBrand}
          callback={handleBrandSelect}
        />

        <Select
          arr={models!}
          id="model"
          title="Modelo"
          selectValue={selectedModel}
          itemKey="name"
          callback={handleModelSelect}
        />
        <StyledInputContainer>
          <Input
            id="year"
            label="Ano"
            disabled
            value={model ? model.year : models[0].year}
          />
          <Input
            id="fuel"
            label="Combustível"
            value={model ? detectFuel(model.fuel) : detectFuel(models[0].fuel)}
            disabled
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
            value={
              model
                ? model.value.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })
                : models[0].value.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })
            }
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
          $width={5}
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
            onClick={() => setModal(null)}
          >
            Excluir anúncio
          </Button>
          <Button
            type="submit"
            $background="brand-3"
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

export default CreateAd;
