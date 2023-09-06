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
import InputRadio from "../../Inputs/InputRadio";
import { StyledInputRadioContainer, StyledStatusTitle } from "./style";
import TEditFormPartial from "./@types";

const EditAdForm = () => {
  const { closeModal, setModal } = useModal();

  const {
    brands,
    models,
    handleBrandSelect,
    handleModelSelect,
    isGoodPrice,
    editSale,
    setModels,
    editASalesAd,
  } = useCarContext();

  const imgUrlPlusArray = editSale?.salesImages.slice(3);

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
      status: String(editSale!.status),
      mileage: String(editSale?.mileage),
      fipePrice: "",
      price: String(editSale?.price),
      imgUrl: editSale?.salesImages[0].imageUrl,
      imgUrl2: editSale?.salesImages[1].imageUrl,
      imgUrl3: editSale?.salesImages[2].imageUrl,
      imgUrlPlus: imgUrlPlusArray,
    },
  });

  const [fipePrice, setFipePrice] = useState(0);

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
        setFipePrice(findModel!.value);
      } catch (error) {
        console.log(error);
      } finally {
        console.clear();
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

    let adObj: TEditFormPartial = {
      ...rest,
      isGoodPrice: isGoodPrice(Number(data.price), fipePrice),
      salesImages: [],
      price: Number(data.price),
      mileage: Number(data.mileage),
      status: JSON.parse(data.status!),
    };

    let initialArrayData = [imgUrl, imgUrl2, imgUrl3];

    const strImgUrlPlusArray: string[] =
      imgUrlPlus?.map((img) => img.imageUrl!) || null;

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

    editASalesAd(editSale!.id, adObj);

    closeModal();
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
          disabled
        />

        <Select
          arr={models!}
          id="model"
          title="Modelo"
          {...register("model")}
          itemKey="name"
          callback={handleModelSelect}
          disabled
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
        <StyledStatusTitle>Publicado</StyledStatusTitle>
        <StyledInputRadioContainer>
          <InputRadio
            title="status"
            label="Sim"
            inputValue="true"
            {...register("status")}
          />
          <InputRadio
            title="status"
            label="Não"
            inputValue="false"
            {...register("status")}
          />
        </StyledInputRadioContainer>
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

        {fields.length < 3 && (
          <Button
            type="button"
            $background="brand-4"
            $color="brand-1"
            $width={8}
            onClick={() => append({ imageUrl: "" })}
          >
            Adicionar campo para imagem da galeria
          </Button>
        )}

        {fields.map((field, index) => {
          return (
            <StyledDinamicInput key={field.id}>
              <Input
                id="imgUrlPlus"
                label="Imagem extra"
                {...register(`imgUrlPlus.${index}.imageUrl`)}
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
