import Select from "../../Select";
import useModal from "../../../Hooks/useModal";
import { StyledCreateAd } from "./style";
import Input from "../../Inputs/ Input";
import Textarea from "../../Textarea";
import { useForm } from "react-hook-form";
import { TCreateAd, createAdSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";

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
  } = useModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCreateAd>({
    resolver: zodResolver(createAdSchema),
  });

  return (
    <StyledCreateAd>
      <form action="">
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
        <div>
          <Input
            id="year"
            label="Ano"
            {...register("year")}
            errors={errors.year}
            disabled
            value={model ? model.year : models[0].year}
          />
          <Input
            id="fuel"
            label="Combustível"
            {...register("fuel")}
            errors={errors.fuel}
            value={model ? detectFuel(model.fuel) : detectFuel(models[0].fuel)}
            disabled
          />
        </div>
        <div>
          <Input
            id="mileage"
            label="Quilometragem"
            {...register("mileage")}
            errors={errors.mileage}
          />
          <Input
            id="color"
            label="Cor"
            {...register("color")}
            errors={errors.color}
          />
        </div>
        <div>
          <Input
            id="fipePrice"
            label="Preço tabela FIPE"
            {...register("fipePrice")}
            errors={errors.fipePrice}
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
          />
        </div>
        <Textarea
          id="description"
          label="Descrição"
          {...register("description")}
          errors={errors.description}
        />
      </form>
    </StyledCreateAd>
  );
};

export default CreateAd;
