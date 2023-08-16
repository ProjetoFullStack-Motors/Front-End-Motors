import { StyledSalesCard } from "./style";
import { UserAvatar, ImgSwiper } from "../..";
import { TSaleCardProps } from "./@types";
import { useCarContext } from "../../../Hooks";

const SalesCard = ({ sale }: TSaleCardProps) => {
    const { convertStr } = useCarContext();

    const {
        brand,
        model,
        year,
        mileage,
        isGoodPrice,
        price,
        description,
        salesImages,
        user,
    } = sale;

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
                    {convertStr(brand)} - {convertStr(model)}
                </h2>
                <p className="car-description">{description}</p>
                <div className="seller-info-container">
                    <UserAvatar
                        img={user ? user.userImage : undefined}
                        username={`${user.firstName} ${user.lastName}`}
                    />
                    <h3 className="seller-title">{`${user.firstName} ${user.lastName}`}</h3>
                </div>
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
            </div>
        </StyledSalesCard>
    );
};

export default SalesCard;
