import { Navigation } from "swiper/modules";
import { TSaleContainerProps } from "./@types";
import { StyleSaleContainer, StyleSwiper } from "./style";
import { SwiperSlide } from "swiper/react";

const SaleContainer = ({ saleFounded }: TSaleContainerProps) => {
  return (
    <StyleSaleContainer>
      <div className="sale__container">
        <StyleSwiper
          slidesPerView={1}
          modules={[Navigation]}
          navigation={{ enabled: true, hideOnClick: true }}
          loop>
          <ul className="sale__image--container">
            {saleFounded.salesImages.map((img) => (
              <SwiperSlide key={img.imageUrl} className="car-img-container">
                <li>
                  <img src={img.imageUrl} alt={saleFounded.model} />
                </li>
              </SwiperSlide>
            ))}
          </ul>
        </StyleSwiper>
      </div>
    </StyleSaleContainer>
  );
};

export default SaleContainer;
