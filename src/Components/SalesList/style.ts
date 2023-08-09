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

// display: grid;
// grid-auto-flow: column;
// gap: 10px;
// overflow: scroll;
// margin: 150px 0;

// @media (min-width: 650px) {
//   display: grid;
//   grid-auto-flow: row;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 10px;
//   /* max-width: 800px; */
//   overflow: initial;
// }

// @media (min-width: 950px) {
//   grid-template-columns: repeat(3, 1fr);
//   margin: 80px 0;
// }
