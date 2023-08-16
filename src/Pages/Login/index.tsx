import { Header } from "../../Components"
import LoginForm from "../../Components/Forms/LoginForm"
import StyledMainContainer from "./style";


const Login = () => {
  return (
    <>
      <Header />
      <StyledMainContainer>
        <LoginForm />
      </StyledMainContainer>
    </>
  );
};

export default Login;