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
import { apiFipe } from "../../../Services/api";
import { useEffect, useState } from "react";
import { TBrandModel } from "../../../Providers/CarContext/@types";

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
    getBrandModels,
    setModels,
    setSelectedBrand,
    deleteSalesImage,
  } = useCarContext();

  const imgUrlPlusArray = editSale?.salesImages.slice(3);

  console.log(editSale);

  console.log(imgUrlPlusArray);

  console.log(editSale!.salesImages);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm<TEditAd>({
    resolver: zodResolver(editAdSchema),
    defaultValues: {
      brand: editSale?.brand,
      model: editSale?.model,
      engine: editSale?.engine,
      year: editSale?.year,
      color: editSale?.color,
      description: editSale?.description,
      mileage: String(editSale?.mileage),
      fipePrice: "",
      price: String(editSale?.price),
      imgUrl: editSale?.salesImages[0].imageUrl,
      imgUrl2: editSale?.salesImages[1].imageUrl,
      imgUrl3: editSale?.salesImages[2].imageUrl,
      imgUrlPlus: imgUrlPlusArray,
    },
  });

  useEffect(() => {
    const getBrandModels = async (brand: string) => {
      try {
        const { data } = await apiFipe.get<TBrandModel[]>(
          `/cars?brand=${brand}`
        );
        setModels(data);

        const findModel: TBrandModel | undefined = data.find(
          (carModel) => carModel.name === editSale!.model
        );

        setValue("model", String(findModel?.name));
        setValue("fipePrice", String(findModel?.value));
      } catch (error) {
        console.log(error);
      }
    };

    getBrandModels(editSale!.brand);
  }, []);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "imgUrlPlus",
  });

  const onSubmitForm = (data: TEditAd) => {
    const { imgUrl, imgUrl2, imgUrl3, imgUrlPlus, ...rest } = data;
    const array = editSale?.salesImages.map((img, index) => {
      if (img.imageUrl !== editSale?.salesImages[index].imageUrl) {
        return img;
      }
    });

    console.log(array);
  };

  const handleRemoveAndRequest = async (
    event: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    remove(index);

    const buttonId = event.currentTarget.id;
    await deleteSalesImage(buttonId!);
  };

  return (
    <StyledCreateAd>
      <h2>Informações do veículo</h2>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <Select
          arr={brands!}
          id="brand"
          title="Marca"
          {...register("brand")}
          callback={handleBrandSelect}
        />

        <Select
          arr={models!}
          id="model"
          title="Modelo"
          {...register("model")}
          itemKey="name"
          callback={handleModelSelect}
        />
        <StyledInputContainer>
          <Input
            id="year"
            label="Ano"
            disabled
            placeholder="Ex: 2023"
            {...register("year")}
          />
          <Input
            id="engine"
            label="Combustível"
            disabled
            placeholder="Ex: flex"
            {...register("engine")}
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
            placeholder="Ex: R$ 200.000,00"
            {...register("fipePrice")}
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
          onClick={() => append({ imageUrl: "" })}
        >
          Adicionar campo para imagem da galeria
        </Button>

        {fields.map((field, index) => {
          return (
            <StyledDinamicInput key={field.id}>
              <Input
                id={`imgUrlPlus-${index}`}
                label="Imagem extra"
                {...register(`imgUrlPlus.${index}.imageUrl`)}
                errors={errors.imgUrlPlus?.[index]?.root!}
                placeholder="Ex: https://image.com"
              />

              <button
                type="button"
                id={imgUrlPlusArray![index].id}
                onClick={(event) => handleRemoveAndRequest(event, index)}
              >
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
