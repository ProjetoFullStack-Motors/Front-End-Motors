import { styled } from "styled-components";
import { Swiper } from "swiper/react";
import "swiper/css";

export const StyledSwiper = styled(Swiper)`
    width: ${({ width }) => (width ? `${width}rem` : "19.5rem")};
    height: ${({ height }) => (height ? `${height}rem` : "9.5rem")};
    background-color: var(--grey-7);
    position: relative;

    .car-img {
        width: 100%;
        height: 100%;
    }

    .good-price-tag {
        padding: 4px;
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 4px;
        color: var(--white);
        background-color: var(--sucess-1);
        font-weight: var(--font-base);
        cursor: context-menu;
    }
`;
