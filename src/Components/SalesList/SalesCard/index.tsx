import { StyledSalesCard } from "./style";

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
            img: string;
        };
        imgUrl: string;
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
        imgUrl,
    } = sale;
    return (
        <StyledSalesCard>
            <div className="car-img-container">
                <img className="car-img" src={imgUrl} />
                {isGoodPrice ? (
                    <h4
                        className="good-price-tag"
                        title="Essa oferta está 10% abaixo da tabela que esqueci o nome"
                    >
                        $
                    </h4>
                ) : null}
            </div>
            <h2 className="car-title">
                {brand} - {model}
            </h2>
            <p className="car-description">{description}</p>
            <div className="seller-info-container">
                <div className="seller-img-container">
                    <img className="seller-img" src={seller.img}></img>
                </div>
                <h3 className="seller-title">
                    {seller.firstName} {seller.lastName}
                </h3>
            </div>
            <div className="car-info-container">
                <div className="car-info">
                    <span>{mileage} KM</span>
                    <span>{year}</span>
                </div>
                <span className="car-price">R$ {price},00</span>
            </div>
        </StyledSalesCard>
    );
};

export default SalesCard;
