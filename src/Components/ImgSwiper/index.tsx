import { useRef } from "react";
import { StyledSwiper } from "./styled";
import { SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import { Navigation } from "swiper/modules";
import { v4 as uuidv4 } from "uuid";

type TImgSwiperProps = {
    imgs: string[];
    $width?: number;
    $height?: number;
};

const ImgSwiper = ({ imgs }: TImgSwiperProps) => {
    const swiperRef = useRef<SwiperCore>();

    return (
        <>
            <StyledSwiper
                slidesPerView={1}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                modules={[Navigation]}
                navigation
            >
                {imgs?.map((img) => (
                    <SwiperSlide key={uuidv4()} className="car-img-container">
                        <img src={img} className="car-img" />
                    </SwiperSlide>
                ))}
            </StyledSwiper>
            {/* <button onClick={() => swiperRef.current?.slidePrev()}>Prev</button>
            <button onClick={() => swiperRef.current?.slideNext()}>Next</button> */}
        </>
    );
};

export default ImgSwiper;
