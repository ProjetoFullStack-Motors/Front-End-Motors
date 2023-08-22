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
    width: 90px;
    height: 90px;
    background-color: var(--grey-7);

    img {
      object-fit: fill;
      min-width: 90px;
      min-height: 90px;
    }
  }

  @media (min-width: 1200px) {
     
    li {
      img {
        width: 108px;
        height: 108px;
      }
    }
  }
`

export {StyleListImages};