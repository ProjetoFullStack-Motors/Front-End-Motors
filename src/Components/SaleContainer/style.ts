import styled from "styled-components";

const StyleSaleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .sale__container {
    display: flex;
    flex-direction: column;
    gap: 16px;

    width: 100%;
  }
`;

import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const StyleSwiper = styled(Swiper)`
  width: 100%;
  height: 355px;
  text-align: center;

  img {
    margin-top: 50px;
    width: 100%;
    max-width: 442px;
    height: 100%;
    max-height: 253px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: var(--brand-1);
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 2rem;
  }
  @media (min-width: 1200px) {
    width: 752px;
  }
`;

export { StyleSaleContainer, StyleSwiper };
