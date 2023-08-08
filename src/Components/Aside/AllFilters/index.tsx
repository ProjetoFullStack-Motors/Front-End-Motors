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
      <RangeSlide title="Km" stepValue={10} itemKey="mileage" />
      <RangeSlide title="Preço" stepValue={10} itemKey="price" />
    </StyledFilters>
  );
};

export default AllFilters;
