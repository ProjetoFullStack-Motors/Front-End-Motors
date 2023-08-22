import styled from "styled-components";

export const StyledSaleCommentCard = styled.li`
    display: flex;
    flex-direction: column;
    gap: 10px;

    .comment-header {
        display: flex;
        gap: 10px;
        align-items: center;
    }

    .comment-author {
        font-size: var(--font-body-1);
        line-height: 170%;
        font-weight: var(--font-medium);
        color: var(--grey-1);
    }

    .comment-header > span {
        font-size: var(--font-body-2);
        font-weight: var(--font-base);
        color: var(--grey-3);
    }

    .comment-message {
        font-size: var(--font-body-1);
        font-weight: var(--font-base);
        color: var(--grey-2);
    }
`;
