import { TSaleContainerProps } from "../@types";
import { StyleListImages } from "./style";

const ListImages = ({ saleFounded }: TSaleContainerProps) => {
  return (
    <StyleListImages>
      <h2>Fotos</h2>
      <ul>
        {saleFounded.salesImages.map((img) => (
          <li key={img.imageUrl}>
            <img src={img.imageUrl} alt={saleFounded.model} />
          </li>
        ))}
      </ul>
    </StyleListImages>
  );
};

export default ListImages;
