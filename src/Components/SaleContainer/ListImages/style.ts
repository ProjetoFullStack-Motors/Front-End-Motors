import styled from "styled-components";

const StyleListImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;
  height: 400px;
  padding: 16px;

  background-color: green;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;

    margin: 0 auto;
    width: 90%;
    height: 100%;

    border: solid 2px white;

    li {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 108px;
      height: 108px;

      cursor: pointer;

      background-color: white;
      img {
        width: 94px;
        height: 54px;
      }
    }
  }

  @media (min-width: 1200px) {
    width: 440px;
  }
`;

export { StyleListImages };
