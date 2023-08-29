import { z } from "zod";

export const createCommentSchema = z.object({
  comment: z.string().nonempty("Campo obrigatório"),
});

export type TCreateComment = z.infer<typeof createCommentSchema>;
