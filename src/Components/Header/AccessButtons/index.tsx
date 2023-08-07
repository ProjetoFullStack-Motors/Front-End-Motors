import { Link } from "react-router-dom";

const AccessButtons = () => {
  return (
    <div>
      <Link to={"/login"}>Fazer login</Link>
      <Link to={"/register"}>Cadastrar</Link>
    </div>
  );
};

export default AccessButtons;
