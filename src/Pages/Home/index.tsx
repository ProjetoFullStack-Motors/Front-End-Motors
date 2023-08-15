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
import CreateAd from "../../Components/Forms/CreateAdForm";

const Home = () => {
  const { filterModal, setFilterModal } = useCarContext();
  return (
    <>
      <StyledHomePage>
        <Header />
        <Banner />
        <div className="home-container container">
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

        <ChangePage />

        <Footer />
        {createPortal(<CreateAd />, document.body)}
      </StyledHomePage>
    </>
  );
};

export default Home;
