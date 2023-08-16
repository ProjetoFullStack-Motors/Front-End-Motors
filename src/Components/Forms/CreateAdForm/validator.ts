import { z } from "zod";

export const createAdSchema = z.object({
  mileage: z.string().nonempty("Campo obrigatório"),
  color: z.string().nonempty("Campo obrigatório"),
  price: z.string().nonempty("Campo obrigatório"),
  description: z.string().nonempty("Campo obrigatório"),
});

export type TCreateAd = z.infer<typeof createAdSchema>;
