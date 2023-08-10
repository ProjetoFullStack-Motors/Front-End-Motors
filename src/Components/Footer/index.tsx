import { FooterStyled } from "./style";
import MotorsShopLogo from "../../Assets/icons/Motors_shop_black.svg";
import ArrowUp from "../../Assets/icons/arrow_up.svg";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="container ">
        <img src={MotorsShopLogo} alt="Motors Shop" />
        <p>© 2022 - Todos os direitos reservados.</p>
        <a href="#top">
          <img
            className="arrowUp"
            src={ArrowUp}
            alt="Botão para ir para o topo"
          />
        </a>
      </div>
    </FooterStyled>
  );
};

export default Footer;
