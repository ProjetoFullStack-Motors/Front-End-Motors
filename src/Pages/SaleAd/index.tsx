import { useEffect } from "react";
import { api } from "../../Services/api";
import { useParams } from "react-router-dom";
import { Footer, Header } from "../../Components";
import StyledMainContainer from "./style";
import DetailsProduct from "../../Components/DetailsProduct";
import { motion } from "framer-motion";
import { useCarContext, useUserContext } from "../../Hooks";
import Loading from "../../Components/Loading";

const Sale = () => {
  const { id } = useParams();
  const { setSaleFounded, saleFounded, changeComment } = useCarContext();
  const { loading, setLoading } = useUserContext();

  useEffect(() => {
    const getSale = async () => {
      setLoading(true);
      try {
        const { data } = await api.get(`/salesAd/${id}`);

        setSaleFounded(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getSale();
  }, [changeComment]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
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
      )}
    </>
  );
};

export default Sale;
