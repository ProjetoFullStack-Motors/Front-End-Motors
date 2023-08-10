import {
  Header,
  SalesList,
  AsideDesktop,
  AsideMobile,
  Footer,
  Button,
} from "../../Components";
import { ButtonContainerPosition, StyledHomePage } from "./style";
import { createPortal } from "react-dom";
import { useCarContext } from "../../Hooks";
import Banner from "../../Components/Banner";

const Home = () => {
  const { filterModal, setFilterModal } = useCarContext();
  return (
    <>
      <StyledHomePage>
        <Header />
        <Banner />
        <div className="home-container">
          <AsideDesktop />
          <SalesList />
        </div>
        <ButtonContainerPosition>
          <Button
            $display={true}
            $width={5}
            $background="brand-2"
            onClick={() => setFilterModal(true)}>
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
