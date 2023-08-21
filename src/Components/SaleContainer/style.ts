import styled from "styled-components";

const StyleSaleContainer = styled.div`
  display: flex;
  flex-direction: column;

  .sale__container {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .sale__details {
      display: flex;
      flex-direction: column;
      gap: 32px;

      padding: 32px;
      width: 100%;

      background-color: blue;

      .sale__details--container {
        display: flex;
        justify-content: space-between;

        .sale__year--mileage {
          display: flex;
          gap: 32px;
        }
      }
    }
  }
`;

import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const StyleSwiper = styled(Swiper)`
  width: 752px;
  height: 355px;
  background-color: red;
  text-align: center;

  img {
    margin-top: 50px;
    width: 442px;
    height: 253px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: var(--brand-1);
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 2rem;
  }
`;

export { StyleSaleContainer, StyleSwiper };
