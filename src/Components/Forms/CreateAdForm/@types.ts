import { TCreateAd } from "./validator";

type TCreateAdWithoutPriceAndMileage = Omit<
  TCreateAd,
  "price" | "mileage" | "imgUrl" | "imgUrl2" | "imgUrl3" | "imgUrlPlus"
>;

type TFormData = {
  brand: string;
  model: string;
  year: string;
  engine: string;
  isGoodPrice: boolean;
  price: number;
  mileage: number;
  salesImages: {
    imageUrl: string;
  }[];
} & TCreateAdWithoutPriceAndMileage;

export default TFormData;
