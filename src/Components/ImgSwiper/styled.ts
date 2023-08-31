import { styled } from "styled-components";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export const StyledSwiper = styled(Swiper)`
  width: ${({ width }) => (width ? `${width}rem` : "18rem")};
  height: ${({ height }) => (height ? `${height}rem` : "9.5rem")};
  background-color: var(--grey-7);
  position: relative;

  .car-img {
    width: 100%;
    height: 100%;
  }

  .swiper-button-next,
  .swiper-button-prev {
    visibility: hidden;
    color: var(--brand-1);
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 2rem;
  }
`;
