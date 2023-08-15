import { IoMdClose } from "react-icons/io";
import Select from "../../Select";
import useModal from "../../../Hooks/useModal";
import { StyledCreateAd } from "./style";

const CreateAd = () => {
  const { brands, models, selectedBrand, setSelectedBrand } = useModal();

  return (
    <StyledCreateAd>
      <div>
        <h2>Criar anúncio</h2>
        <button>
          <IoMdClose />
        </button>
      </div>

      <Select
        arr={brands!}
        id="brand"
        title="Marca"
        selectValue={selectedBrand}
        setSelectValue={setSelectedBrand}
      />
    </StyledCreateAd>
  );
};

export default CreateAd;
