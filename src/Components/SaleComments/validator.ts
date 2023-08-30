import { z } from "zod";

export const createCommentSchema = z.object({
    comment: z.string().nonempty("Campo obrigatório"),
});

export type TCreateComment = z.infer<typeof createCommentSchema>;

export type TComment = {
    id: string;
    comment: string;
    created_at: string;
    user: {
        birthdate: string;
        cellphone: string;
        cpf: string;
        created_at: string;
        description: string;
        email: string;
        firstName: string;
        id: string;
        lastName: string;
        role: string;
        userImage: string | null;
    };
};

export type TCommentsArray = Array<TComment>;
