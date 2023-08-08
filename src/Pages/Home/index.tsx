import AsideDesktop from "../../Components/Aside/AsideDesktop";
import { Header, SalesList } from "../../Components";
import AsideMobile from "../../Components/Aside/AsideMobile";
import { StyledHomePage } from "./style";

const Home = () => {
  return (
    <StyledHomePage>
      <Header />
      <AsideMobile />
      <AsideDesktop />
      <SalesList />
    </StyledHomePage>
  );
};

export default Home;
