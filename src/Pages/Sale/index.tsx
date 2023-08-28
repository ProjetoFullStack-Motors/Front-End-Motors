import { useContext, useEffect } from "react";
import { api } from "../../Services/api";
import { useParams } from "react-router-dom";
import { Header } from "../../Components";
import StyledMainContainer from "./style";
import DetailsProduct from "../../Components/DetailsProduct";
import { CarContext } from "../../Providers";

const Sale = () => {
    const { id } = useParams();
    const {setSaleFounded, saleFounded} = useContext(CarContext)

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
