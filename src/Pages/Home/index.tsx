import AsideDesktop from "../../Components/Aside/AsideDesktop";
import { Header, SalesList } from "../../Components";
import AsideMobile from "../../Components/Aside/AsideMobile";
import { StyledHomePage } from "./style";
import { useContext } from "react";
import { CarContext } from "../../Providers/CarContext";
import { createPortal } from "react-dom";
import Footer from "../../Components/Footer";

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
        <button onClick={() => setFilterModal(true)}>
          Abrir modal (teste)
        </button>
        {filterModal && createPortal(<AsideMobile />, document.body)}

        <Footer />
      </StyledHomePage>
    </>
  );
};

export default Home;
