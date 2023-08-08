import { Header, SalesList } from "../../Components";
import AsideMobile from "../../Components/Aside/AsideMobile";
import { StyledHomePage } from "./style";

const Home = () => {
  return (
    <StyledHomePage>
      <Header />
      <AsideMobile />
      <SalesList />
    </StyledHomePage>
  );
};

export default Home;
