import { StyledSalesCard } from "./style";
import { UserAvatar, ImgSwiper } from "../..";
import { TSaleCardProps } from "./@types";
import { useCarContext, useModal, useUserContext } from "../../../Hooks";
import { useNavigate } from "react-router-dom";

const SalesCard = ({ sale, owner }: TSaleCardProps) => {
  const { convertStr } = useCarContext();
  const { setModal } = useModal();
  const { user } = useUserContext();
  const {
    brand,
    model,
    year,
    mileage,
    isGoodPrice,
    price,
    description,
    salesImages,
  } = sale;

  const navigate = useNavigate();

  const imgs = salesImages?.map((img) => img.imageUrl);

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
      <div
        className="sales-info-container"
        onClick={() => navigate(`/sale/${sale.id}`)}
      >
        <h2 className="car-title">
          {convertStr(brand)} - {convertStr(model)}
        </h2>
        <p className="car-description">{description}</p>
        {user ? (
          <div className="seller-info-container">
            <UserAvatar
              img={user.userImage}
              username={`${user.firstName} ${user.lastName}`}
            />
            <h3 className="seller-title">{`${user.firstName} ${user.lastName}`}</h3>
          </div>
        ) : null}
        <div className="car-info-container">
          <div className="car-info">
            <span>{mileage} KM</span>
            <span>{year}</span>
          </div>
          <span className="car-price">
            {price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>

        {!user ? (
          <div className="sales-buttons-container">
            {owner == "seller" && (
              <button onClick={() => setModal("Editar anúncio")}>Editar</button>
            )}
            <button className="details-sale-button">Ver Detalhes</button>
          </div>
        ) : null}
      </div>
    </StyledSalesCard>
  );
};

export default SalesCard;
