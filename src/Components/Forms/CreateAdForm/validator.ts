import { z } from "zod";

export const createAdSchema = z.object({
  mileage: z.string().nonempty("Campo obrigatório"),
  color: z.string().nonempty("Campo obrigatório"),
  price: z.string().nonempty("Campo obrigatório"),
  description: z.string().nonempty("Campo obrigatório"),
  brand: z.string().optional(),
  model: z.string().optional(),
  year: z.string().optional(),
  fuel: z.string().optional(),
  fipePrice: z.string().optional(),
});

export type TCreateAd = z.infer<typeof createAdSchema>;
