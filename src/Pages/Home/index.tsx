import AsideMobile from "../../Components/Aside/AsideMobile";
import ListNav from "../../Components/Aside/ListNav";
import { StyledHomePage } from "./style";

const Home = () => {
  return (
    <StyledHomePage>
      <h1>Home</h1>

      <AsideMobile />
    </StyledHomePage>
  );
};

export default Home;
