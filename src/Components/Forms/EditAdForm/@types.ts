type TEditForm = {
  brand: string;
  model: string;
  year: string;
  color: string;
  engine: string;
  mileage: number;
  isGoodPrice: boolean;
  price: number;
  description: string;
  status?: boolean;
  salesImages?: {
    imageUrl: string;
  }[];
};

type TEditFormPartial = Partial<TEditForm>;

export default TEditFormPartial;
