import { z } from "zod";

const schema = z.object({
  email: z.string().email("Deve ser um e-mail válido").nonempty(),
  password: z.string().min(5).nonempty("Senha é obrigatória"),
});

export type TLoginData = z.infer<typeof schema>;

export default schema;