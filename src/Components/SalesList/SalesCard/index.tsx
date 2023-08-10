import { StyledSalesCard } from "./style";
import { UserAvatar, ImgSwiper } from "../..";
import { TSaleProps } from "../../../Providers/CarContext/@types";

type TSaleCardProps = {
  sale: TSaleProps;
};

const SalesCard = ({ sale }: TSaleCardProps) => {
  const {
    brand,
    model,
    year,
    mileage,
    isGoodPrice,
    price,
    description,
    seller,
    salesImages,
  } = sale;

  const priceCentsToReal = () => {
    const priceDecimalStr = (price / 100).toString().replace(".", ",");
    const priceFormated = priceDecimalStr.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return "R$ " + priceFormated;
  };

  const imgs = salesImages.map((img) => img.imageUrl);

  return (
    <StyledSalesCard>
      {isGoodPrice ? (
        <h4
          className="good-price-tag"
          title="Essa oferta está 5% abaixo da tabela Fipe"
        >
          $
        </h4>
      ) : null}
      <ImgSwiper imgs={imgs}></ImgSwiper>
      <div className="sales-info-container">
        <h2 className="car-title">
          {brand} - {model}
        </h2>
        <p className="car-description">{description}</p>
        <div className="seller-info-container">
          <UserAvatar
            img={seller ? seller.img : undefined}
            username={`Roberto Alberto`}
          />
          <h3 className="seller-title">Roberto Alberto</h3>
        </div>
        <div className="car-info-container">
          <div className="car-info">
            <span>{mileage} KM</span>
            <span>{year}</span>
          </div>
          <span className="car-price">{priceCentsToReal()}</span>
        </div>
      </div>
    </StyledSalesCard>
  );
};

export default SalesCard;
