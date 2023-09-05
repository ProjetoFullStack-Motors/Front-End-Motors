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
import { useCarContext, useUserContext } from "../../Hooks";
import { motion } from "framer-motion";
import NoCars from "../../Components/MessageNoCars";
import Loading from "../../Components/Loading";

const Home = () => {
  const { filterModal, setFilterModal, filteredCars, allCars } =
    useCarContext();

  const { loading } = useUserContext();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <StyledHomePage>
            <Header />
            <Banner />

            {allCars.length === 0 ? (
              <NoCars />
            ) : (
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
                    onClick={() => setFilterModal(true)}>
                    Filtros
                  </Button>
                </ButtonContainerPosition>

                {filterModal && createPortal(<AsideMobile />, document.body)}
              </>
            )}

            <Footer />
          </StyledHomePage>
        </motion.div>
      )}
    </>
  );
};

export default Home;
