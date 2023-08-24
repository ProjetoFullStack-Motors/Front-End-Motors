import { StyledDivContainer, StyledSectionComments } from "./styles";
import Button from "../Buttons";
import SaleContainer from "../SaleContainer";
import { TSaleContainerProps } from "../SaleContainer/@types";
import ListImages from "../SaleContainer/ListImages";
import { SalesComments } from "..";
import { useNavigate } from "react-router-dom";
import { useCarContext, useUserContext } from "../../Hooks";

const DetailsProduct = ({ saleFounded }: TSaleContainerProps) => {
  const navigate = useNavigate();
  const { convertStr } = useCarContext();
  const { user } = useUserContext();

  return (
    <>
      <StyledDivContainer>
        <div>
          <section className="boxImgCar">
            <SaleContainer saleFounded={saleFounded} />
          </section>
          <section className="boxInfoCar">
            <div className="infoCar">
              <h2>
                {convertStr(saleFounded.brand)} {convertStr(saleFounded.model)}
              </h2>

              <div className="price">
                <div>
                  <span>{saleFounded.year}</span>
                  <span>{saleFounded.mileage} KM</span>
                </div>

                <p>R$ {saleFounded.price.toFixed(2)}</p>
              </div>

              {user && user.role === "buyer" && (
                <Button
                  className="btnEntrar"
                  $background="brand-2"
                  $width={1}
                  type="button"
                  onClick={() =>
                    (window.location.href = `https://api.whatsapp.com/send?phone=+55${saleFounded.user.cellphone}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`)
                  }>
                  Comprar
                </Button>
              )}
            </div>

            <div className="descriptonCar">
              <h2>Descrição</h2>
              <p> {saleFounded.description} </p>
            </div>
          </section>
        </div>

        <div className="detailsSection">
          <section className="detailsPhotoCar">
            <h2>Fotos</h2>
            <ListImages saleFounded={saleFounded} />
          </section>

          <section className="detailsSeller">
            <span>
              {saleFounded.user.firstName[0]}
              {saleFounded.user.lastName[0]}
            </span>
            <h2>
              {saleFounded.user.firstName} {saleFounded.user.lastName}
            </h2>
            <p> {saleFounded.user.description} </p>
            <Button
              onClick={() =>
                navigate(`/ProfileViewUser/${saleFounded.user.id}`)
              }>
              Ver todos anúncios
            </Button>
          </section>
        </div>
      </StyledDivContainer>

      <StyledSectionComments>
        <div>
          <SalesComments />
        </div>
      </StyledSectionComments>
    </>
  );
};

export default DetailsProduct;
