import { StyledSalesCard } from "./style";
import { Avatar } from "@mui/material";

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

    const stringToColor = (string: string) => {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = "#";

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    };

    const stringAvatar = (name: string) => {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
        };
    };

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
            <div className="car-img-container">
                <img className="car-img" src={imgUrl} />
                {isGoodPrice ? (
                    <h4
                        className="good-price-tag"
                        title="Essa oferta está 5% abaixo da tabela Fipe"
                    >
                        $
                    </h4>
                ) : null}
            </div>
            <div className="sales-info-container">
                <h2 className="car-title">
                    {brand} - {model}
                </h2>
                <p className="car-description">{description}</p>
                <div className="seller-info-container">
                    <div className="seller-img-container">
                        <Avatar
                            className="seller-img"
                            src={seller.img}
                            {...stringAvatar(
                                `${seller.firstName} ${seller.lastName}`
                            )}
                        />
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
                    <span className="car-price">{priceCentsToReal()}</span>
                </div>
            </div>
        </StyledSalesCard>
    );
};

export default SalesCard;
