import { z } from "zod";

export const editAddressSchema = z.object({
  cep: z.string().max(8, "O cep deve conter 8 números, sem traços").optional(),
  state: z.string().max(2, "Digite apenas a sigla do estado").optional(),
  city: z.string().optional(),
  street: z.string().optional(),
  addressNumber: z.string().optional(),
  addressComplement: z.string().optional(),
});

export type TEditAddress = z.infer<typeof editAddressSchema>;
