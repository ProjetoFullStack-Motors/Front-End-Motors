import AsideDesktop from "../../Components/Aside/AsideDesktop";
import AsideMobile from "../../Components/Aside/AsideMobile";
import ListNav from "../../Components/Aside/ListNav";
import { StyledHomePage } from "./style";

const Home = () => {
  return (
    <StyledHomePage>
      <h1>Home</h1>

      <AsideMobile />
      <AsideDesktop />
    </StyledHomePage>
  );
};

export default Home;
