import { z } from "zod";

export const editAdSchema = z.object({
  mileage: z.string().optional(),
  color: z.string().optional(),
  price: z.string().optional(),
  description: z.string().optional(),
  imgUrl: z.string().url("O dado necessita ser uma url").optional(),
  imgUrl2: z.string().url("O dado necessita ser uma url").optional(),
  imgUrl3: z.string().url("O dado necessita ser uma url").optional(),
  imgUrlPlus: z
    .object({
      url: z.string().url("O dado necessita ser uma url").optional(),
    })
    .array(),
});

export type TEditAd = z.infer<typeof editAdSchema>;
