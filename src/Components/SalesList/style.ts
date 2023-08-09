import styled from "styled-components";

export const StyledSalesList = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    gap: 10px;
    overflow: scroll;
    align-content: flex-start;

    @media (min-width: 1023px) {
        flex-wrap: wrap;
        overflow: auto;
        max-width: 65%;
    }
`;
