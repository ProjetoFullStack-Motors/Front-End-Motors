import { z } from "zod";

export const createAdSchema = z.object({
  year: z.string().nonempty("Campo obrigatório"),
  fuel: z.string().nonempty("Campo obrigatório"),
  mileage: z.string().nonempty("Campo obrigatório"),
  color: z.string().nonempty("Campo obrigatório"),
  fipePrice: z.string().nonempty("Campo obrigatório"),
  price: z.string().nonempty("Campo obrigatório"),
  description: z.string().nonempty("Campo obrigatório"),
  imageUrl: z.string().url("Deve ser uma url").nonempty("Campo obrigatório"),
});

export type TCreateAd = z.infer<typeof createAdSchema>;
