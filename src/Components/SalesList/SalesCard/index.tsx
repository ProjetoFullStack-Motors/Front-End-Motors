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
				<img src={imgUrl} />
				{isGoodPrice ? <img /> : null}
			</div>
			<h2>
				{brand} - {model}
			</h2>
			<p>{description}</p>
			<div className="user-info-container">
				<div className="user-img-container">
					<img src={seller.img}></img>
				</div>
				<h3>
					{seller.firstName} {seller.lastName}
				</h3>
			</div>
			<div>
				<div>
					<span>{mileage}</span>
					<span>{year}</span>
				</div>
				<span>{price}</span>
			</div>
		</StyledSalesCard>
	);
};

export default SalesCard;
