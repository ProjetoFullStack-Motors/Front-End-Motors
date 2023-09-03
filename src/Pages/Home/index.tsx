import {
  Header,
  SalesList,
  AsideDesktop,
  AsideMobile,
  Footer,
  Button,
  Banner,
  ChangePage,
} from "../../Components";
import { ButtonContainerPosition, StyledHomePage } from "./style";
import { createPortal } from "react-dom";
import { useCarContext } from "../../Hooks";
import  NoCars  from "../../Components/MessageNoCars";

const Home = () => {
  const { filterModal, setFilterModal, filteredCars, allCars } = useCarContext();

  return (
    <>
      <StyledHomePage>
        <Header />
        <Banner />
    
       
        {allCars.length === 0? <NoCars /> : 
        <>
        <div className="home-container container">
          <AsideDesktop />
          <SalesList sales={filteredCars} owner="all" />
        </div>
        <ChangePage />
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
        </>
        }

        <Footer />
      </StyledHomePage>
    </>
  );
};

export default Home;
