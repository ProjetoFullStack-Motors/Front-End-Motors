import styled from "styled-components";

const StyleListImages = styled.ul`
  display: flex;
  justify-content: center;
  gap: 7px;
  flex-wrap: wrap;
  height: 80%;
  overflow-y: auto;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 108px;
    height: 108px;
    background-color: var(--grey-7);

    img {
      object-fit: fill;
      width: 90%;
      height: 50%;
    }
  }
`;

export { StyleListImages };
