import { useContext } from "react";
import {
  Header,
  SalesList,
  AsideDesktop,
  AsideMobile,
  Footer,
  Button,
} from "../../Components";
import { ButtonContainerPosition, StyledHomePage } from "./style";
import { CarContext } from "../../Providers/CarContext";
import { createPortal } from "react-dom";

const Home = () => {
  const { filterModal, setFilterModal } = useContext(CarContext);
  return (
    <>
      <StyledHomePage>
        <Header />
        <div className="home-container">
          <AsideDesktop />
          <SalesList />
        </div>
        <ButtonContainerPosition>
          <Button
            $display={true}
            $width={5}
            $background="brand-2"
            onClick={() => setFilterModal(true)}
          >
            Filtros
          </Button>
        </ButtonContainerPosition>

        {filterModal && createPortal(<AsideMobile />, document.body)}

        <Footer />
      </StyledHomePage>
    </>
  );
};

export default Home;
