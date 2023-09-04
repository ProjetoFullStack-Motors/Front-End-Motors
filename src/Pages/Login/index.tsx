import { Header, Modal } from "../../Components";
import LoginForm from "../../Components/Forms/LoginForm";
import RecoverForm from "../../Components/Forms/RecoverForm";
import StyledMainContainer from "./style";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <Header />
      <StyledMainContainer>
        <Modal title={"Recuperar senha"}>
          <RecoverForm />
        </Modal>
        <LoginForm />
      </StyledMainContainer>
    </motion.div>
  );
};

export default Login;
