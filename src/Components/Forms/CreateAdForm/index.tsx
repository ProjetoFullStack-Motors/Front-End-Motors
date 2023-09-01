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
import { useCarContext } from "../../../Hooks";
import TFormData from "./@types";

const CreateAd = () => {
  const { closeModal } = useModal();

  const {
    createSalesAd,
    brands,
    models,
    selectedBrand,
    handleBrandSelect,
    handleModelSelect,
    model,
    detectFuel,
    isGoodPrice,
  } = useCarContext();

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

  const onSubmitForm = (data: TCreateAd) => {
    const fipePrice: number = model ? model.value : models[0].value;
    const { imgUrl, imgUrl2, imgUrl3, imgUrlPlus, ...rest } = data;
    let adObj: TFormData = {
      ...rest,
      brand: selectedBrand,
      model: model ? model.name : models[0].name,
      year: model ? model.year : models[0].year,
      isGoodPrice: isGoodPrice(Number(data.price), fipePrice),
      salesImages: [],
      engine: model ? detectFuel(model.fuel) : detectFuel(models[0].fuel),
      price: Number(data.price),
      mileage: Number(data.mileage),
    };

    let initialArrayData = [imgUrl, imgUrl2, imgUrl3];

    const strImgUrlPlusArray: string[] =
      imgUrlPlus?.map((img) => img.url!) || null;

    if (strImgUrlPlusArray) {
      initialArrayData = [...initialArrayData, ...strImgUrlPlusArray];
    }

    const imgArray = initialArrayData.map((img) => {
      return {
        imageUrl: img,
      };
    });

    adObj = {
      ...adObj,
      salesImages: imgArray,
    };

    createSalesAd(adObj);

    closeModal();
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
          selectValue={model ? model.name : ""}
          itemKey="name"
          callback={handleModelSelect}
          isModel
        />
        <StyledInputContainer>
          <Input
            id="year"
            label="Ano"
            disabled
            value={model ? model.year : ""}
            placeholder="Ex: 2023"
          />
          <Input
            id="engine"
            label="Combustível"
            value={model ? detectFuel(model.fuel) : ""}
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
            value={
              model
                ? model.value.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })
                : ""
            }
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
          onClick={() => append({ url: "" })}>
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
            onClick={closeModal}>
            Cancelar
          </Button>
          <Button
            type="submit"
            $background="brand-1"
            $color="grey-9"
            $width={7}>
            Salvar alterações
          </Button>
        </StyledInputContainer>
      </form>
    </StyledCreateAd>
  );
};

export default CreateAd;
