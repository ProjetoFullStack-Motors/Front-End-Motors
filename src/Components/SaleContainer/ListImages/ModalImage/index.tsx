import { TModalImage } from "../../@types";

const ModalImage = ({ url }: TModalImage) => {
  return (
    <>
      <img src={url} alt="Imagem do carro" />
    </>
  );
};

export default ModalImage;
