import { useContext, useEffect } from "react";
import { api } from "../../Services/api";
import { useParams } from "react-router-dom";
import { Footer, Header } from "../../Components";
import StyledMainContainer from "./style";
import DetailsProduct from "../../Components/DetailsProduct";
import { CarContext } from "../../Providers";
import { motion } from "framer-motion";

const Sale = () => {
  const { id } = useParams();
  const { setSaleFounded, saleFounded, changeComment } = useContext(CarContext);

  useEffect(() => {
    const getSale = async () => {
      try {
        const { data } = await api.get(`/salesAd/${id}`);

        setSaleFounded(data);
      } catch (error) {
        console.log(error);
      } finally {
        console.clear();
      }
    };

    getSale();
  }, [changeComment]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />

      {saleFounded && (
        <>
          <StyledMainContainer>
            <DetailsProduct saleFounded={saleFounded} />
          </StyledMainContainer>
        </>
      )}
      <Footer />
    </motion.div>
  );
};

export default Sale;
