import { z } from "zod";

const schema = z.object({
  email: z.string().email("Deve ser um e-mail"),
});

export type RecoverData = z.infer<typeof schema>;

export default schema;