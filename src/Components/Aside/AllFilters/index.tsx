import ListNav from "../ListNav";
import RangeSlide from "../RangeSlide";
import StyledFilters from "./style";

const AllFilters = () => {
  return (
    <StyledFilters>
      <ListNav saleKey="brand" name="Marca" />
      <ListNav saleKey="model" name="Modelo" />
      <ListNav saleKey="color" name="Cor" />
      <ListNav saleKey="year" name="Ano" />
      <ListNav saleKey="engine" name="Combustível" />
      <RangeSlide
        title="Km"
        stepValue={5000}
        itemKey="mileage"
        min={0}
        max={200000}
      />
      <RangeSlide
        title="Preço"
        stepValue={2000}
        itemKey="price"
        min={10000}
        max={500000}
      />
    </StyledFilters>
  );
};

export default AllFilters;
