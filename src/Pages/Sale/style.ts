import styled from "styled-components";

const StyleSalePageContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;
  margin: 150px auto;

  .sale__images--user {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    max-width: 1200px;
  }
`;

export { StyleSalePageContainer };
