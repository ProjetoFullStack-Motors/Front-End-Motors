import { useEffect, useState } from "react";
import { api } from "../../Services/api";
import { useParams } from "react-router-dom";
import { ISale } from "../../Providers/CarContext/@types";
import { Header } from "../../Components";
import { StyleSalePageContainer } from "./style";
import { SalesComments } from "../../Components";
import SaleContainer from "../../Components/SaleContainer";
import ListImages from "../../Components/SaleContainer/ListImages";
import SaleUserContainer from "../../Components/SaleContainer/SaleUserContainer";

const Sale = () => {
    const { id } = useParams();
    const [saleFounded, setSaleFounded] = useState<ISale | null>(null);

    useEffect(() => {
        const getSale = async () => {
            try {
                const { data } = await api.get(`/salesAd/${id}`);

                setSaleFounded(data);
            } catch (error) {
                console.log(error);
            }
        };

        getSale();
    }, []);

    return (
        <>
            <Header />

            {saleFounded && (
                <>
                    <StyleSalePageContainer>
                        <SaleContainer saleFounded={saleFounded} />
                        <div className="sale__images--user">
                            <ListImages saleFounded={saleFounded} />
                            <SaleUserContainer saleFounded={saleFounded} />
                        </div>
                    </StyleSalePageContainer>
                    <SalesComments />
                </>
            )}
        </>
    );
};

export default Sale;
