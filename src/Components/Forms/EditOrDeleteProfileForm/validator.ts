import { z } from "zod";

export const editProfileSchema = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  cpf: z.string().optional(),
  cellphone: z.string().optional(),
  birthdate: z.date().optional(),
  description: z.string().optional(),
});

export type TEditProfile = z.infer<typeof editProfileSchema>;
