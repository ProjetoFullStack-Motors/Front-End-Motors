import { useCarContext } from "../../../Hooks";
import ListNav from "../ListNav";
import RangeSlide from "../RangeSlide";
import StyledFilters from "./style";

const AllFilters = () => {
  const { maxPrice, minPrice, maxMileage, minMileage } = useCarContext();
  return (
    <StyledFilters>
      <ListNav saleKey="brand" name="Marca" />
      <ListNav saleKey="model" name="Modelo" />
      <ListNav saleKey="color" name="Cor" />
      <ListNav saleKey="year" name="Ano" />
      <ListNav saleKey="engine" name="Combustível" />
      <RangeSlide
        title="Km"
        stepValue={1000}
        itemKey="mileage"
        min={minMileage}
        max={maxMileage}
      />
      <RangeSlide
        title="Preço"
        stepValue={2000}
        itemKey="price"
        min={minPrice}
        max={maxPrice}
      />
    </StyledFilters>
  );
};

export default AllFilters;
