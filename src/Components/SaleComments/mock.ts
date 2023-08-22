export type TComment = {
    message: string;
    author: {
        firstName: string;
        lastName: string;
    };
    created_at: number;
};

export const comments = [
    {
        message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        author: {
            firstName: "Alberto",
            lastName: "Roberto",
        },
        created_at: 5,
    },
    {
        message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        author: {
            firstName: "Sr",
            lastName: "Beiçola",
        },
        created_at: 7,
    },
    {
        message: "Mim dê papai",
        author: {
            firstName: "Larissa",
            lastName: "Manoela",
        },
        created_at: 12,
    },
];
