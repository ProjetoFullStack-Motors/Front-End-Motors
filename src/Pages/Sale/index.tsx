import { useEffect, useState } from "react";
import { api } from "../../Services/api";
import { useParams } from "react-router-dom";
import { ISale } from "../../Providers/CarContext/@types";
import { Header } from "../../Components";
import StyledMainContainer from "./style";
import DetailsProduct from "../../Components/DetailsProduct";

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
                    <StyledMainContainer>
                        <DetailsProduct saleFounded={saleFounded}/>
                    </StyledMainContainer>
                </>
            )}
        </>
    );
};

export default Sale;
