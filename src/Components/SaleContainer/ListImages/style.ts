import styled from "styled-components";

const StyleListImages = styled.ul`
  display: flex;
  gap: 7px;
  overflow: y;
  flex-wrap: wrap;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 108px;
    height: 108px;
    background-color: var(--grey-7);

    img {
      object-fit: fill;
      min-width: 95px;
      min-height: 55px;
    }
  }
`;

export { StyleListImages };
