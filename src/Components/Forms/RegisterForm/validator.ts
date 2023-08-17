import { z } from "zod";

export const addressSchema = z.object({
  cep: z.string().max(8),
  state: z.string().max(2),
  city: z.string().max(255),
  street: z.string().max(255),
  addressNumber: z.number(),
  addressComplement: z.string().nullish(),
});

export const userSchema = z.object({
  firstName: z.string().max(255),
  lastName: z.string().max(255),
  email: z.string().email().max(255),
  cpf: z.string().max(11),
  cellphone: z.string().max(14),
  birthdate: z.union([z.date(), z.string()]),
  description: z.string(),
  userImage: z.string(),
  address: addressSchema,
  role: z.enum(["seller", "buyer"]),
  password: z.string().max(255),
});

export type TUserRegisterData = z.infer<typeof userSchema>;
