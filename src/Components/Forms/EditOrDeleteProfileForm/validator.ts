import { z } from "zod";

export const editProfileSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().optional(),
  password: z.string().optional(),
  cpf: z
    .string()
    .max(11, "Escreva sem digitar pontos e traços, apenas os números")
    .optional(),
  cellphone: z
    .string()
    .max(12, "O número de celular deve conter até 12 números")
    .optional(),
  birthdate: z.string().optional(),
  description: z.string().optional(),
});

export type TEditProfile = z.infer<typeof editProfileSchema>;
