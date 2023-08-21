import {
  Header,
  SalesList,
  AsideDesktop,
  AsideMobile,
  Footer,
  Button,
  Banner,
  ChangePage,
  Modal,
} from "../../Components";
import { ButtonContainerPosition, StyledHomePage } from "./style";
import { createPortal } from "react-dom";
import { useCarContext, useModal } from "../../Hooks";
import EditOrDeleteProfileForm from "../../Components/Forms/EditOrDeleteProfileForm";

const Home = () => {
  const { filterModal, setFilterModal, filteredCars } = useCarContext();
  const { modal } = useModal();

  return (
    <>
      <StyledHomePage>
        <Header />
        <Banner />
        <div className="home-container container">
          <AsideDesktop />
          <SalesList sales={filteredCars} owner="all" />
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
        {modal && modal == "Editar perfil"
          ? createPortal(
              <Modal title="Editar perfil">
                {" "}
                <EditOrDeleteProfileForm />
              </Modal>,
              document.body
            )
          : null}

        <ChangePage />

        <Footer />
      </StyledHomePage>
    </>
  );
};

export default Home;
