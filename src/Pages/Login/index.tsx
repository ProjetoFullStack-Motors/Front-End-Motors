import { Header, Modal } from "../../Components"
import LoginForm from "../../Components/Forms/LoginForm"
import RecoverForm from "../../Components/Forms/RecoverForm";
import StyledMainContainer from "./style";


const Login = () => {
  return (
    <>
      <Header />
      <StyledMainContainer>
        <Modal title={"Recuperar senha"}>
          <RecoverForm />
        </Modal>
        <LoginForm />
      </StyledMainContainer>
    </>
  );
};

export default Login;