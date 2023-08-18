import { z } from "zod";

export const addressSchema = z.object({
  cep: z.string().max(8),
  state: z.string().max(2),
  city: z.string().max(255),
  street: z.string().max(255),
  addressNumber: z.number().or(z.string()),
  addressComplement: z.string().nullish(),
});

export const userSchema = z
  .object({
    firstName: z.string().max(255).nonempty("Primeiro nome é obrigatório"),
    lastName: z.string().max(255).nonempty("Último nome é obrigatório"),
    email: z
      .string()
      .email("Tipo de email inválido")
      .max(255)
      .nonempty("Email é obrigatório"),
    cpf: z
      .string()
      .max(11)
      .nonempty("Cpf obrigatório e precisa ter 11 digitos"),
    cellphone: z
      .string()
      .min(11)
      .max(14)
      .nonempty(
        "Celular obrigatório e precisa ter 11 no mínimo digitos e no máximo 14"
      ),
    birthdate: z.string().min(10, "Data de aniversário obrigatória"),
    description: z.string().nonempty("Descrição obrigatória"),
    userImage: z.string().nullish(),
    address: addressSchema,
    role: z.enum(["seller", "buyer"]),
    password: z.string().max(255),
    confirmPass: z.string(),
  })
  .refine(({ password, confirmPass }) => password === confirmPass, {
    message: "As senhas precisam corresponderem",
    path: ["confirmPass"],
  });

export type TUserRegisterData = z.infer<typeof userSchema>;
