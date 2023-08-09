import { StyledSalesCard } from "./style";
import { UserAvatar, ImgSwiper } from "../..";

type TSalesCard = {
    sale: {
        id: number;
        brand: string;
        model: string;
        year: number;
        mileage: number;
        isGoodPrice: boolean;
        price: number;
        color: string;
        description: string;
        seller: {
            firstName: string;
            lastName: string;
            img?: string;
        };
        imgs: string[];
        engine: string;
    };
};

const SalesCard = ({ sale }: TSalesCard) => {
    const {
        brand,
        model,
        year,
        mileage,
        isGoodPrice,
        price,
        description,
        seller,
        imgs,
    } = sale;

    const priceCentsToReal = () => {
        const priceDecimalStr = (price / 100).toString().replace(".", ",");
        const priceFormated = priceDecimalStr.replace(
            /\B(?=(\d{3})+(?!\d))/g,
            "."
        );

        return "R$ " + priceFormated;
    };

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
                        img={seller.img ? seller.img : undefined}
                        username={`${seller.firstName} ${seller.lastName}`}
                    />
                    <h3 className="seller-title">
                        {seller.firstName} {seller.lastName}
                    </h3>
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
