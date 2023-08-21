import { TSaleContainerProps } from "../@types";
import { StyleListImages } from "./style";

const ListImages = ({ saleFounded }: TSaleContainerProps) => {
  const findImage = (url: string) => {
    const image = saleFounded.salesImages.find((img) => img.imageUrl === url);
    return image;
  };

  return (
    <StyleListImages>
      <h2>Fotos</h2>
      <ul>
        {saleFounded.salesImages.map((img) => (
          <li key={img.imageUrl} onClick={() => findImage(img.imageUrl)}>
            <img src={img.imageUrl} alt={saleFounded.model} />
          </li>
        ))}
      </ul>
    </StyleListImages>
  );
};

export default ListImages;
