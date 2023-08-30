import { z } from "zod";

export const editCommentSchema = z.object({
  comment: z.string().nonempty("Campo obrigatório"),
});

export type TEditComment = z.infer<typeof editCommentSchema>;
