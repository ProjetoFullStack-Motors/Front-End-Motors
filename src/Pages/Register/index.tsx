import { Header } from "../../Components";
import FormRegister from "../../Components/Forms/RegisterForm";
import StyledMainContainer from "./style";
import { motion } from "framer-motion";

const Register = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <Header />
      <StyledMainContainer>
        <FormRegister />
      </StyledMainContainer>
    </motion.div>
  );
};

export default Register;
