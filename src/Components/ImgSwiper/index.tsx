import { StyledSwiper } from "./styled";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { v4 as uuidv4 } from "uuid";

type TImgSwiperProps = {
    imgs: string[];
    $width?: number;
    $height?: number;
};

const ImgSwiper = ({ imgs }: TImgSwiperProps) => {
    return (
        <>
            <StyledSwiper
                slidesPerView={1}
                modules={[Navigation]}
                navigation
                loop
            >
                {imgs?.map((img) => (
                    <SwiperSlide key={uuidv4()} className="car-img-container">
                        <img src={img} className="car-img" />
                    </SwiperSlide>
                ))}
            </StyledSwiper>
        </>
    );
};

export default ImgSwiper;
