import { z } from "zod";

export const editAdSchema = z.object({
  brand: z.string(),
  model: z.string(),
  year: z.string(),
  engine: z.string(),
  fipePrice: z.string(),
  mileage: z.string().optional(),
  color: z.string().optional(),
  price: z.string().optional(),
  description: z.string().optional(),
  status: z.string().optional(),
  imgUrl: z.string().url("O dado necessita ser uma url"),
  imgUrl2: z.string().url("O dado necessita ser uma url"),
  imgUrl3: z.string().url("O dado necessita ser uma url"),
  imgUrlPlus: z
    .object({
      imageUrl: z.string().url("O dado necessita ser uma url").optional(),
    })
    .array(),
});

export type TEditAd = z.infer<typeof editAdSchema>;
