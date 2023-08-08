import { useContext } from "react";
import ListNav from "../ListNav";
import { CarContext } from "../../../Providers/CarContext";

const AsideMobile = () => {
  const { setFilterModal } = useContext(CarContext);

  const clearFilter = () => {
    setFilterModal(false);
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
        <div>
          <button onClick={() => setFilterModal(false)}>Ver Anúncios</button>

          <button onClick={clearFilter}>Limpar Filtro</button>
        </div>
      </div>
    </div>
  );
};

export default AsideMobile;
