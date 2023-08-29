import { z } from "zod";

const commentSchema = z.object({
    id: z.string(),
    comment: z.string(),
    created_at: z.string(),
    user: z.object({
        id: z.string(),
        firstName: z.string(),
        lastName: z.string(),
    }),
});

const commentSchemaArray = z.array(commentSchema);

export { commentSchema, commentSchemaArray };
