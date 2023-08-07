import styled from "styled-components";

export const StyledSalesList = styled.ul`
    display: grid;
    grid-auto-flow: column;
    gap: 10px;
    overflow: scroll;

    @media (min-width: 650px) {
        display: grid;
        grid-auto-flow: row;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        max-width: 800px;
        overflow: initial;
    }

    @media (min-width: 950px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;
