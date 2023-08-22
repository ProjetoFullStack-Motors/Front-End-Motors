import styled from "styled-components";

export const StyledSaleComments = styled.div`
    display: flex;
    flex-direction: column;

    .comments-section {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    .comments-section > h2 {
        font-size: var(--font-heading-5);
        line-height: 170%;
        font-weight: var(--font-semibold);
    }
    .comments-list {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }
`;
