import { useContext } from "react";
import ListNav from "../ListNav";
import { CarContext } from "../../../Providers/CarContext";
import RangeSlide from "../RangeSlide";

const AsideMobile = () => {
  const { setFilterModal, handleClearFilter } = useContext(CarContext);

  const clearFilter = () => {
    setFilterModal(false);
    handleClearFilter();
  };

  return (
    <div>
      <div>
        <div>
          <h2>Filtro</h2>
          <button onClick={() => setFilterModal(false)}>X</button>
        </div>
        <ListNav saleKey="brand" name="Marca" />
        <ListNav saleKey="model" name="Modelo" />
        <ListNav saleKey="color" name="Cor" />
        <ListNav saleKey="year" name="Ano" />
        <ListNav saleKey="engine" name="Combustível" />
        <RangeSlide title="Preço" stepValue={10} itemKey="price" />
        <RangeSlide title="Quilometragem" stepValue={10} itemKey="mileage" />
        <div>
          <button onClick={() => setFilterModal(false)}>Ver Anúncios</button>

          <button onClick={clearFilter}>Limpar Filtro</button>
        </div>
      </div>
    </div>
  );
};

export default AsideMobile;
