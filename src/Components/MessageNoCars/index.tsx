import { NoCarsSection } from "./style";
import NoCarsGif from "../../Assets/NotFound/notfound.gif";
import MessageComponet from "./Message/index";

const NoCars = () => {
  return (
    <NoCarsSection>
      <MessageComponet />
      <img src={NoCarsGif} alt="" />
    </NoCarsSection>
  );
};

export default NoCars;
