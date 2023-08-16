import { Header } from "../../Components";
import FormRegister from "../../Components/Forms/RegisterForm";
import StyledMainContainer from "./style";

const Register = () => {
  return (
    <>
      <Header />
      <StyledMainContainer>    
        <FormRegister />
      </StyledMainContainer>
    </>
  );
};

export default Register;