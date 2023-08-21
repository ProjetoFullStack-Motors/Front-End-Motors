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

        <div className="sale__details">
          <h2>
            {saleFounded.brand} {saleFounded.model}
          </h2>

          <section className="sale__details--container">
            <div className="sale__year--mileage">
              <span>{saleFounded.year}</span>
              <span>{saleFounded.mileage} KM</span>
            </div>
            <div className="sale__price">
              <p>R$ {saleFounded.price}</p>
            </div>
          </section>
        </div>

        <div className="sale__desc">
          <h2>Descrição</h2>
          <p>{saleFounded.description}</p>
        </div>
      </div>
    </StyleSaleContainer>
  );
};

export default SaleContainer;
