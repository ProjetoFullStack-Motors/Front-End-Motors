import { z } from "zod";

export const createAdSchema = z.object({
  mileage: z.string().nonempty("Campo obrigatório"),
  color: z.string().nonempty("Campo obrigatório"),
  price: z.string().nonempty("Campo obrigatório"),
  description: z.string().nonempty("Campo obrigatório"),
  imgUrl: z
    .string()
    .nonempty("Campo obrigatório")
    .url("O dado necessita ser uma url"),
  imgUrl2: z
    .string()
    .nonempty("Campo obrigatório")
    .url("O dado necessita ser uma url"),
  imgUrl3: z
    .string()
    .nonempty("Campo obrigatório")
    .url("O dado necessita ser uma url"),
  imgUrlPlus: z
    .object({
      url: z.string().url("O dado necessita ser uma url").optional(),
    })
    .array(),
});

export type TCreateAd = z.infer<typeof createAdSchema>;
