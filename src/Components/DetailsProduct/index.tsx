import { StyledDivContainer, StyledSectioncomments } from "./styles";
import Button from "../Buttons";
import SaleContainer from "../SaleContainer";
import { TSaleContainerProps } from "../SaleContainer/@types";
import ListImages from "../SaleContainer/ListImages";
import { SalesComments } from "..";

const DetailsProduct = ({ saleFounded }: TSaleContainerProps) => {
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
                {saleFounded.brand} {saleFounded.model} 
              </h2>

              <div className="price">
                <div>
                  <span>{saleFounded.year}</span>
                  <span>{saleFounded.mileage} KM</span>
                </div>

                <p>R$ {saleFounded.price}</p>
              </div>

              <Button
                className="btnEntrar"
                $background="brand-2"
                $width={1}
                type="submit">
                Comprar
              </Button>
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
            <span>{saleFounded.user.firstName[0]}{saleFounded.user.lastName[0]}</span>
            <h2>{saleFounded.user.firstName} {saleFounded.user.lastName}</h2>
            <p> {saleFounded.user.description} </p>
            <Button>Ver todos anúncios</Button>
          </section>
        </div>
      </StyledDivContainer>

      <StyledSectioncomments>
          <SalesComments />
      </StyledSectioncomments>
    </>
  );
};

export default DetailsProduct;