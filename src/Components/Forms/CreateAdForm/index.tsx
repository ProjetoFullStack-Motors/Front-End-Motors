import Select from "../../Select";
import useModal from "../../../Hooks/useModal";
import { StyledCreateAd } from "./style";

const CreateAd = () => {
    const { brands, models, selectedBrand, setSelectedBrand } = useModal();

    return (
        <StyledCreateAd>
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
